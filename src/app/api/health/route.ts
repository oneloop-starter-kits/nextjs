export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  return new Response("Hello from the API", {
    headers: {
      "content-type": "text/plain",
    },
  });
}
