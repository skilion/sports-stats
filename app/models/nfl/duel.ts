import { DuelTeam } from "./duel-team";

export interface Duel {
  game_id: number;
  home: DuelTeam;
  away: DuelTeam;
}
