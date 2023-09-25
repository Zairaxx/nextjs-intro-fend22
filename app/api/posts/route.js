export async function GET(request) {
  const posts = [
    { title: "Hej", id: 1, author: "Brandon" },
    { title: "Hej", id: 2, author: "Brandon" },
  ];
  return new Response(JSON.stringify(posts));
}
