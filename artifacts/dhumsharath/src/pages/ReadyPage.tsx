import { motion } from "framer-motion";
import { ChevronRight, Film } from "lucide-react";
import type { GameState } from "@/data/gameTypes";
import { TEAM_COLORS } from "@/data/gameTypes";

interface ReadyPageProps {
  state: GameState;
  onBegin: () => void;
}

export default function ReadyPage({ state, onBegin }: ReadyPageProps) {
  const { currentRoundIndex, rounds, settings } = state;
  const currentRound = rounds[currentRoundIndex];
  const currentTeam = settings.teams.find(t => t.id === currentRound.teamId)!;
  const teamIndex = settings.teams.findIndex(t => t.id === currentRound.teamId);
  const roundNum = currentRoundIndex + 1;
  const totalRounds = rounds.length;

  const difficultyColors = {
    easy: "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400",
    medium: "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400",
    hard: "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400",
  };

  const difficultyIcons = { easy: "😊", medium: "🎯", hard: "🔥" };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/20" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md text-center"
      >
        <div className="mb-4">
          <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
            Round {roundNum} of {totalRounds}
          </span>
        </div>

        <motion.div
          className={`inline-flex items-center gap-3 bg-gradient-to-br ${TEAM_COLORS[teamIndex % TEAM_COLORS.length]} text-white rounded-2xl px-6 py-4 mb-6 shadow-lg`}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-2xl">🏅</span>
          <div className="text-left">
            <p className="text-sm font-medium opacity-80">It's time for</p>
            <p className="text-2xl font-black">{currentTeam.name}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-card border border-card-border rounded-2xl p-6 mb-6 shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Film className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">Your movie has been selected</h3>
          </div>

          <div className="bg-muted rounded-xl p-4 mb-4">
            <p className="text-sm text-muted-foreground font-medium">Genre</p>
            <p className="font-semibold capitalize">{currentRound.movie.genre}</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className={`px-3 py-1.5 rounded-lg text-sm font-bold ${difficultyColors[currentRound.movie.difficulty]}`}>
              {difficultyIcons[currentRound.movie.difficulty]} {currentRound.movie.difficulty.toUpperCase()}
            </span>
            <span className="text-sm text-muted-foreground">
              ⏱ {currentRound.timeLimit}s limit
            </span>
          </div>
        </motion.div>

        <motion.div
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">Rules Reminder</p>
          <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1 text-left">
            <li>🤫 No speaking, whispering, or mouthing</li>
            <li>🙅 No pointing at objects in the room</li>
            <li>🙋 Other team members can guess</li>
            <li>⏭️ One skip allowed per round</li>
          </ul>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-sm mb-6"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Only the actor should tap the button below
        </motion.p>

        <motion.button
          data-testid="button-reveal-movie"
          onClick={onBegin}
          className="w-full py-5 bg-gradient-to-r from-orange-500 to-red-500 text-white font-black text-xl rounded-2xl shadow-lg flex items-center justify-center gap-3"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span>Reveal Movie & Start</span>
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </div>
  );
}
