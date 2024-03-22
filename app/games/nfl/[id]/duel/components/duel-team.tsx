import { DuelTeam as DuelTeamModel } from "@/app/models/nfl/duel-team";

export default function DuelTeam({
  duelTeam,
  isHomeTeam,
}: {
  duelTeam: DuelTeamModel;
  isHomeTeam: boolean;
}) {
  const allClass = "text-center text-sm";
  const headerClass = `${allClass} ${
    isHomeTeam ? "bg-blue-600" : "bg-yellow-600 text-black"
  }`;
  const subHeaderClass = `${allClass} bg-sky-950`;
  const dataClass = `${allClass}`;

  return (
    <table className="inline-table">
      <tr>
        <th colSpan={9} className={headerClass}>
          {duelTeam.team.name}
        </th>
      </tr>
      <tr>
        <td colSpan={3} className={subHeaderClass}>
          {isHomeTeam ? "Points Scored Per Game" : ""}
        </td>
        <td className={dataClass}>{duelTeam.agg_stats.pointsScoredPerGame}</td>
        <td colSpan={5} className={subHeaderClass}>
          {isHomeTeam ? "" : "Points Scored Per Game"}
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={subHeaderClass}>
          {isHomeTeam ? "Net Passing Yards Per Game" : ""}
        </td>
        <td className={dataClass}>
          {duelTeam.agg_stats.passingYardsPerGame -
            duelTeam.agg_stats.sackedYardsPerGame}
        </td>
        <td colSpan={5} className={subHeaderClass}>
          {isHomeTeam ? "" : "Net Passing Yards Per Game"}
        </td>
      </tr>
      <tr>
        <td colSpan={3} className={subHeaderClass}>
          {isHomeTeam ? "Rushing Yards Per Game" : ""}
        </td>
        <td className={dataClass}>{duelTeam.agg_stats.rushingYardsPerGame}</td>
        <td colSpan={5} className={subHeaderClass}>
          {isHomeTeam ? "" : "Rushing Yards Per Game"}
        </td>
      </tr>

      <tr>
        <th colSpan={9} className={headerClass}>
          Passing
        </th>
      </tr>
      <tr>
        <td className={subHeaderClass}>Player</td>
        <td className={subHeaderClass}>Line</td>
        <td className={subHeaderClass}>Yards Per Game</td>
        <td className={subHeaderClass}>Touchdowns/Game</td>
        <td colSpan={5} className={subHeaderClass}>
          Yards (TDs) Last Five Games
        </td>
      </tr>
      {duelTeam.top_passing_players.map((duelPlayer) => (
        <tr key={duelPlayer.player.id}>
          <td
            className={dataClass}
          >{`${duelPlayer.player.name} (${duelPlayer.player.position})`}</td>
          <td className={dataClass}>O/U {duelPlayer.odds.line_over_under}</td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.passingYardsPerGame}
          </td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.rushingTouchdownsPerGame +
              duelPlayer.agg_stats.receivingTouchdownsTotal}
          </td>
          {duelPlayer.last_games_stats.map((playerStat) => (
            <td className={dataClass}>{`${playerStat.passingYards}(${
              playerStat.rushingTouchdowns + playerStat.receivingTouchdowns
            })`}</td>
          ))}
        </tr>
      ))}

      <tr>
        <th colSpan={9} className={headerClass}>
          Rushing
        </th>
      </tr>
      <tr>
        <td className={subHeaderClass}>Player</td>
        <td className={subHeaderClass}>Line</td>
        <td className={subHeaderClass}>Yards Per Game</td>
        <td className={subHeaderClass}>Attempts Per Game</td>
        <td colSpan={5} className={subHeaderClass}>
          Yards (Attempts) Last Five Games
        </td>
      </tr>
      {duelTeam.top_rushing_players.map((duelPlayer) => (
        <tr key={duelPlayer.player.id}>
          <td
            className={dataClass}
          >{`${duelPlayer.player.name} (${duelPlayer.player.position})`}</td>
          <td className={dataClass}>O/U {duelPlayer.odds.line_over_under}</td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.rushingYardsPerGame}
          </td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.rushingAttemptsPerGame}
          </td>
          {duelPlayer.last_games_stats.map((playerStat) => (
            <td
              className={dataClass}
            >{`${playerStat.rushingYards}(${playerStat.rushingAttempts})`}</td>
          ))}
        </tr>
      ))}

      <tr>
        <th colSpan={9} className={headerClass}>
          Receiving
        </th>
      </tr>
      <tr>
        <td className={subHeaderClass}>Player</td>
        <td className={subHeaderClass}>Line</td>
        <td className={subHeaderClass}>Yards Per Game</td>
        <td className={subHeaderClass}>Receptions Per Game</td>
        <td colSpan={5} className={subHeaderClass}>
          Yards (Receptions) Last Five Games
        </td>
      </tr>
      {duelTeam.top_receiving_players.map((duelPlayer) => (
        <tr key={duelPlayer.player.id}>
          <td
            className={dataClass}
          >{`${duelPlayer.player.name} (${duelPlayer.player.position})`}</td>
          <td className={dataClass}>O/U {duelPlayer.odds.line_over_under}</td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.receivingYardsPerGame}
          </td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.receptionsPerGame}
          </td>
          {duelPlayer.last_games_stats.map((playerStat) => (
            <td
              className={dataClass}
            >{`${playerStat.receivingYards}(${playerStat.receptions})`}</td>
          ))}
        </tr>
      ))}

      <tr>
        <th colSpan={9} className={headerClass}>
          Touchdowns
        </th>
      </tr>
      <tr>
        <td className={subHeaderClass}>Player</td>
        <td className={subHeaderClass}>ATD Odds</td>
        <td className={subHeaderClass}>Rushing TDs</td>
        <td className={subHeaderClass}>Receiving TDs</td>
        <td colSpan={5} className={subHeaderClass}>
          Touchdowns Last Five Games
        </td>
      </tr>
      {duelTeam.top_touchdowns_players.map((duelPlayer) => (
        <tr key={duelPlayer.player.id}>
          <td
            className={dataClass}
          >{`${duelPlayer.player.name} (${duelPlayer.player.position})`}</td>
          <td className={dataClass}>{duelPlayer.odds.atd_odds}</td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.rushingTouchdownsTotal}
          </td>
          <td className={dataClass}>
            {duelPlayer.agg_stats.receivingTouchdownsTotal}
          </td>
          {duelPlayer.last_games_stats.map((playerStat) => (
            <td className={dataClass}>
              {playerStat.rushingTouchdowns + playerStat.receivingTouchdowns}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
