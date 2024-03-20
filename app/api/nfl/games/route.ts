import gamesJson from "./games.json";

export async function GET() {
  return Response.json(gamesJson);
}
