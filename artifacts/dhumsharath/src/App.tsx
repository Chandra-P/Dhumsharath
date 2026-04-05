import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import SetupPage from "@/pages/SetupPage";
import ReadyPage from "@/pages/ReadyPage";
import ActingPage from "@/pages/ActingPage";
import ResultPage from "@/pages/ResultPage";
import ScoreboardPage from "@/pages/ScoreboardPage";
import type { GameSettings, GameState } from "@/data/gameTypes";
import { getAllMoviesShuffled } from "@/data/movies";
import type { Difficulty, Movie } from "@/data/movies";

const queryClient = new QueryClient();

function buildRounds(settings: GameSettings) {
  const { teams, roundsPerTeam, timePerRound, difficulties } = settings;
  const totalMoviesNeeded = teams.length * roundsPerTeam;
  const movieQueue = getAllMoviesShuffled(difficulties as Difficulty[], totalMoviesNeeded + 20);

  const rounds = [];
  let movieIdx = 0;
  for (let r = 0; r < roundsPerTeam; r++) {
    for (const team of teams) {
      const movie = movieQueue[movieIdx % movieQueue.length];
      movieIdx++;
      rounds.push({
        roundNumber: r + 1,
        teamId: team.id,
        movie,
        timeLimit: timePerRound,
        guessed: false,
        skipped: false,
      });
    }
  }
  return rounds;
}

function GameApp() {
  const [gameState, setGameState] = useState<GameState | null>(null);

  const handleStart = useCallback((settings: GameSettings) => {
    const rounds = buildRounds(settings);
    setGameState({
      phase: "ready",
      settings,
      rounds,
      currentRoundIndex: 0,
      movieQueue: [],
    });
  }, []);

  const handleBeginActing = useCallback((overrideMovie?: Movie) => {
    setGameState(prev => {
      if (!prev) return prev;
      if (overrideMovie) {
        const updatedRounds = [...prev.rounds];
        updatedRounds[prev.currentRoundIndex] = {
          ...updatedRounds[prev.currentRoundIndex],
          movie: overrideMovie,
        };
        return { ...prev, phase: "acting", rounds: updatedRounds };
      }
      return { ...prev, phase: "acting" };
    });
  }, []);

  const handleGuessed = useCallback((timeUsed: number) => {
    setGameState(prev => {
      if (!prev) return prev;
      const updatedRounds = [...prev.rounds];
      updatedRounds[prev.currentRoundIndex] = {
        ...updatedRounds[prev.currentRoundIndex],
        guessed: true,
        skipped: false,
        timeUsed,
      };
      const updatedTeams = prev.settings.teams.map(team => {
        if (team.id === updatedRounds[prev.currentRoundIndex].teamId) {
          return { ...team, score: team.score + 1 };
        }
        return team;
      });
      return {
        ...prev,
        phase: "result",
        rounds: updatedRounds,
        settings: { ...prev.settings, teams: updatedTeams },
      };
    });
  }, []);

  const handleSkipped = useCallback((timeUsed: number) => {
    setGameState(prev => {
      if (!prev) return prev;
      const updatedRounds = [...prev.rounds];
      updatedRounds[prev.currentRoundIndex] = {
        ...updatedRounds[prev.currentRoundIndex],
        guessed: false,
        skipped: true,
        timeUsed,
      };
      return {
        ...prev,
        phase: "result",
        rounds: updatedRounds,
      };
    });
  }, []);

  const handleNextRound = useCallback(() => {
    setGameState(prev => {
      if (!prev) return prev;
      const nextIdx = prev.currentRoundIndex + 1;
      if (nextIdx >= prev.rounds.length) {
        return { ...prev, phase: "finished", currentRoundIndex: prev.currentRoundIndex };
      }
      return { ...prev, phase: "ready", currentRoundIndex: nextIdx };
    });
  }, []);

  const handleContinueAfterScoreboard = useCallback(() => {
    setGameState(prev => {
      if (!prev) return prev;
      return { ...prev, phase: "ready" };
    });
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameState(null);
  }, []);

  if (!gameState) {
    return <SetupPage onStart={handleStart} />;
  }

  switch (gameState.phase) {
    case "ready":
      return <ReadyPage state={gameState} onBegin={handleBeginActing} />;
    case "acting":
      return (
        <ActingPage
          state={gameState}
          onGuessed={handleGuessed}
          onSkipped={handleSkipped}
        />
      );
    case "result":
      return <ResultPage state={gameState} onNext={handleNextRound} />;
    case "scoreboard":
      return (
        <ScoreboardPage
          state={gameState}
          onContinue={handleContinueAfterScoreboard}
        />
      );
    case "finished":
      return (
        <ScoreboardPage
          state={gameState}
          onContinue={() => {}}
          isFinal={true}
          onPlayAgain={handlePlayAgain}
        />
      );
    default:
      return <SetupPage onStart={handleStart} />;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GameApp />
      <Toaster />
    </QueryClientProvider>
  );
}
