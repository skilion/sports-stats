import { AggTeamStats } from "./agg-team-stats";
import { DuelPlayer } from "./duel-player";
import { Team } from "./team";

export interface DuelTeam {
  team: Team;
  agg_stats: AggTeamStats;
  top_passing_players: DuelPlayer[];
  top_rushing_players: DuelPlayer[];
  top_receiving_players: DuelPlayer[];
  top_touchdowns_players: DuelPlayer[];
}
