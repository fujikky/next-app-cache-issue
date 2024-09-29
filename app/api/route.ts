export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({ content: new Date().toISOString() });
}
