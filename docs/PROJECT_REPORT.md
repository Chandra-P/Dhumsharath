# Indian Dumb Charades
Project Submission Report

Submitted by: ______________________________
Institution / course: ______________________________
Guide / instructor: ______________________________
Submission date: ______________________________

Documentation prepared: 11 October 2026
Source repository: https://github.com/Chandra-P/Dhumsharath

## 1. Project Overview

### Abstract
Indian Dumb Charades is a browser-based, team-oriented movie-guessing game. It supports an in-person group sharing a device: one player acts out a movie without speaking, while teammates try to guess it before a countdown expires. The application manages team configuration, movie selection, round timing, results, and a final scoreboard.

The project uses React and TypeScript for the interface, Vite for development and production builds, and Clerk for user authentication. An Express service provides a health endpoint and authentication middleware. The movie library is bundled with the application rather than fetched from an external movie service.

### Problem Statement
Organizing dumb charades manually requires finding suitable movie names, keeping time, rotating teams, and recording scores. Repeated titles, unclear movie choices, and inconsistent timing can interrupt the game. This project combines those tasks in a configurable interface with language-based movie selection.

### Objectives
- Require players to sign in before accessing gameplay.
- Allow groups to configure teams, rounds, movie language, and round duration.
- Offer a searchable movie library covering Indian regional cinema and English-language films.
- Automate the countdown, score calculation, and final results.
- Reduce duplicate title aliases while preserving distinct remakes and language versions.

### Scope
The current product is a shared-device game for an in-person group. It is not a networked multiplayer service. Authentication identifies the signed-in player, but game state is currently held in browser memory and is not stored in an account database.

## 2. Features and User Guide

### Implemented Features
| Feature | Current behavior |
| --- | --- |
| Authentication | Clerk sign-up, sign-in, account display, and sign-out |
| Protected gameplay | Signed-out visitors to /play are redirected to the public welcome page |
| Team setup | Two to six teams with editable names |
| Round selection | 1, 2, 3, 4, 5, 6, 8, or 10 rounds per team |
| Language selection | All languages, Telugu, Hindi, Tamil, Malayalam, Kannada, or English |
| Preset round time | 30, 45, 60, 90, or 120 seconds |
| Custom round time | A whole number from 10 to 300 seconds |
| Movie picker | Search, language selection, difficulty filters, genre filters, and custom titles |
| Acting screen | Movie title, genre, year, optional hint, and countdown |
| Results | Correct guesses, skipped rounds, time used, and final team scores |

### How to Use the Application
1. Open the application and select sign-in or create an account.
2. Continue to game setup and edit the team names.
3. Choose a movie language, rounds per team, and a preset or custom duration.
4. Start the game. Teams take turns in their configured order.
5. On the ready screen, use the assigned random movie or open Pick Movie to choose another title.
6. Begin acting. The acting screen displays the title and starts the countdown; other players should not look at the actor's screen.
7. Confirm Guessed when the team gets the answer, or Skip to finish without a point. Reaching zero automatically ends the round as skipped.
8. Continue through the remaining rounds, review the final scoreboard, and select Play Again for a new setup.

### Defaults and Scoring
The default setup has two teams, three rounds per team, a 60-second timer, and all languages selected. A confirmed correct guess adds one point to the active team. Skipped or expired rounds add no points. Higher scores appear first in the final scoreboard.

## 3. System Architecture

### Technology Stack
| Layer | Technologies | Responsibility |
| --- | --- | --- |
| Frontend | React 19, TypeScript, Vite 7 | Screens, state, routing, and production bundling |
| Styling | Tailwind CSS, Radix UI components, Lucide icons | Responsive layout and interface controls |
| Animation | Framer Motion | Screen and component transitions |
| Routing / queries | Wouter, TanStack React Query | Route navigation and shared query infrastructure |
| Identity | Clerk React and Express SDKs | Authentication UI, sessions, and request identity |
| Backend | Express 5, Pino, esbuild | API service, request logging, and server build |
| API contract | OpenAPI, Orval, Zod | Generated typed client and response schemas |
| Workspace | pnpm, shared TypeScript libraries | Dependency management and reusable packages |

### Logical Architecture
```text
Browser
  -> Public welcome / Clerk sign-in and sign-up
  -> Protected React game interface
       -> Setup -> Ready -> Acting -> Result -> Final scoreboard
       -> Bundled movie catalog and in-memory game state

Express API service
  -> Clerk identity middleware
  -> GET /api/healthz
  -> Clerk Frontend API proxy in production
```

### Responsibilities and Routes
The React application owns gameplay and score calculation. The server currently has no game-results or saved-settings endpoints. Its health route returns {"status":"ok"}. The Clerk proxy is mounted at /api/__clerk and is bypassed in development.

| Browser route | Purpose |
| --- | --- |
| / | Public welcome page; signed-in players continue to /play |
| /sign-in | Sign-in interface |
| /sign-up | Account creation interface |
| /play | Authenticated game interface |

The workspace also contains a PostgreSQL/Drizzle package as infrastructure scaffolding. Its schema is currently empty; the implemented game does not persist results through it.

## 4. Data Model and Game Logic

### Catalog Snapshot
The built-in catalog currently contains 1,014 distinct movie entries. This number reflects the source at documentation time, not a live external catalog.

| Language | Movie entries |
| --- | --- |
| Telugu | 314 |
| Hindi | 344 |
| Tamil | 123 |
| Malayalam | 65 |
| Kannada | 25 |
| English | 143 |
| Total | 1,014 |

The catalog's recorded years range from 1951 to 2026, with 125 entries dated 2024 or later. These are stored metadata values, not a claim that every release date or hint has been independently reverified for this report.

### Main Data Structures
| Structure | Important fields |
| --- | --- |
| Movie | ID, title, optional Telugu title, year, genre, difficulty, optional hint |
| Team | ID, name, score, color |
| Round | Round number, team ID, movie, time limit, guessed/skipped status, time used |
| GameSettings | Teams, rounds per team, time per round, selected movie language |
| GameState | Current phase, settings, rounds, current round index, movie queue |

### Round Generation and Filtering
The selected language filters the movie pool before random ordering. Rounds are prepared in round-major order: each team gets one turn before the next round begins. Total turns equal team count multiplied by rounds per team.

The application cycles through the selected movie list if more turns are requested than the pool contains. This means a small pool can repeat movies within a long game. The picker initially uses the setup language but lets the actor change its filter or explicitly choose a custom title.

Movie aliases have been consolidated to reduce repeated entries. Distinct remakes, sequels, and language versions remain separate. Language classification currently relies on catalog IDs and explicit exceptions rather than a stored language field on every movie.

### State and Timer
React state holds the current game. The countdown decreases once per second and finishes an expired round as skipped. Correct and skipped results update the current round before advancing. Reloading the page resets the in-memory game; signing in does not imply saved game history.

## 5. Installation and Project Structure

### Prerequisites and Configuration
Use a supported Node.js release; the workspace was validated with Node.js 24 and pnpm 10. Use pnpm rather than npm or Yarn. The frontend requires PORT and BASE_PATH. The API requires its own PORT.

Clerk configuration uses VITE_CLERK_PUBLISHABLE_KEY in the frontend and CLERK_PUBLISHABLE_KEY / CLERK_SECRET_KEY on the server. VITE_CLERK_PROXY_URL may configure the frontend authentication proxy. Supply credentials through secure environment configuration; never commit secret values. DATABASE_URL is needed only when activating the database package, not for the current in-memory game.

### Development Commands
```sh
pnpm install

# Terminal 1: frontend, mounted at the root path
PORT=22639 BASE_PATH=/ pnpm --filter @workspace/dhumsharath run dev

# Terminal 2: API service
PORT=8080 pnpm --filter @workspace/api-server run dev
```

These commands start the individual services. In Replit, use the existing managed frontend and API workflows; its shared preview proxy routes frontend and API traffic. Outside that environment, configure an equivalent same-origin reverse proxy if using relative API paths.

### Build and Validation Commands
```sh
pnpm run typecheck
PORT=22639 BASE_PATH=/ pnpm --filter @workspace/dhumsharath run build
pnpm --filter @workspace/api-server run build
pnpm run test:security
node --test artifacts/dhumsharath/src/data/movies.test.ts
pnpm --filter @workspace/api-spec run codegen
```

### Repository Layout
| Location | Purpose |
| --- | --- |
| artifacts/dhumsharath/src/pages | Setup, ready, acting, result, scoreboard, and landing screens |
| artifacts/dhumsharath/src/components | Authentication, language selection, movie picker, and UI components |
| artifacts/dhumsharath/src/data | Movie library, catalog tests, and game types |
| artifacts/api-server/src | Express server, health route, logging, and Clerk middleware |
| lib/api-spec, lib/api-client-react, lib/api-zod | API contract and generated client/schema libraries |
| lib/db | Database scaffolding, not game persistence |
| lib/braces | Local MIT-licensed dependency security fork and regression tests |
| docs | This report and its PDF/Word export script |

The PDF and Word copies are generated from docs/PROJECT_REPORT.md. Run python docs/export_report.py to rebuild them when the documentation-export Python dependencies are installed.

## 6. Testing and Security

### Verification Approach
| Check | What it establishes |
| --- | --- |
| TypeScript typecheck | Consistent types across shared libraries and application packages |
| Frontend production build | Successful bundling of the current React application |
| Catalog regression tests | Duplicate consolidation rules and language/count behavior |
| Language-pool checks | Each supported language has movies and random selection stays inside its pool |
| Security regression suite | Bounded nesting for the local braces dependency fix, including malformed and cyclic inputs |
| pnpm audit | Known dependency advisories reported by the package registry |

Typechecking, frontend production build, catalog tests, and the security command were checked during report preparation. The six braces security tests passed and pnpm audit reported no known vulnerabilities at that time. Audit results can change as advisories are published; a clean audit is not proof of complete application security.

Earlier development checks confirmed the API health response and the public sign-in page rendering. This report does not claim a fresh automated, authenticated end-to-end test of the complete gameplay journey.

### Security Measures
- Clerk manages account authentication rather than custom password storage.
- The game route renders only for signed-in users.
- Query caches are cleared when the active signed-in user changes.
- Credentials remain in environment configuration, not documentation or source.
- Dependency updates preserve the workspace's security settings and release-age guard.
- A local licensed braces fork adds parser and AST depth limits because no published safe upstream fix was available during remediation.

### Important Boundaries
The API health endpoint is public. Gameplay authorization is currently an interface gate, and scores are calculated client-side. Future account persistence or competitive leaderboards will require server-side authorization, validation, and appropriate abuse controls.

Production authentication must use an appropriate production Clerk configuration. This report does not certify a deployed production environment or assert that the latest local commit has been pushed to GitHub.

## 7. Limitations, Future Work, and Conclusion

### Current Limitations
- Game state and results are not retained after reload or stored per account.
- Team names, timer choices, and movie filters are not saved as user preferences.
- The catalog is maintained in source code; it is not synchronized with a live movie database.
- Recorded release years and hints can require editorial corrections.
- Movie language mapping depends on stable IDs and explicit exceptions.
- The current random-sort comparator is not an unbiased shuffle algorithm.
- Long games may repeat movies when the selected language pool is small.
- The game is designed for a shared device, not remote real-time multiplayer.
- Browser background throttling can affect a timer based on one-second intervals.
- Automated browser coverage of authentication and the full game journey remains limited.

### Proposed Enhancements
1. Save game history and results in each authenticated player's account.
2. Persist preferred team setup, language, and round duration.
3. Use an unbiased Fisher-Yates shuffle and warn about small movie pools.
4. Expand automated browser checks for language selection, sign-in, and custom timers.
5. Improve catalog metadata verification and release-year maintenance.
6. Add server-side enforcement before offering competitive or persistent scoreboards.

These are future improvements, not features claimed as completed in this submission.

### Conclusion
Indian Dumb Charades provides a functional shared-device game with authentication, configurable teams and timing, language-based movie selection, searchable titles, and automatic scorekeeping. Its modular TypeScript structure makes future improvements feasible without replacing the existing gameplay interface.

### References and Submission Notes
- Project source: https://github.com/Chandra-P/Dhumsharath
- React documentation: https://react.dev/
- Vite documentation: https://vite.dev/
- Clerk documentation: https://clerk.com/docs
- Express documentation: https://expressjs.com/
- pnpm documentation: https://pnpm.io/

Complete the student/institution fields on the cover before submission. If the evaluator requires a live application URL, screenshots, or a specific institutional template, add those separately using verified details. No live URL or author identity has been invented in this report.
