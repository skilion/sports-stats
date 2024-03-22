import { AggPlayerStats } from "./agg-player-stats";
import { Player } from "./player";
import { PlayerOdds } from "./player-odds";
import { PlayerStats } from "./player-stats";

export interface DuelPlayer {
  player: Player;
  odds: PlayerOdds;
  agg_stats: AggPlayerStats;
  last_games_stats: PlayerStats[];
}
