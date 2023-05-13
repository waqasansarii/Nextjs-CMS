import postgres from "postgres";
export async function GET(request: Request) {

// const conn = postgres();

// function selectAll() {
  let conn =  postgres("SELECT * FROM hello_world");
// }

  return new Response('Hello, Next.js!')
}
