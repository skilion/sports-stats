import { Team } from "./team";

export interface Game {
  id: number;
  home: Team;
  away: Team;
}
