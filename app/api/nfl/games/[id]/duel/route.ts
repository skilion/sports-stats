import duelJson from "./duels.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  for (let duel of duelJson) {
    if (duel.game_id === parseInt(params.id)) {
      return Response.json(duel);
    }
  }

  return new Response(null, { status: 404 });
}
