export async function POST(req: Request) {

  const data = await req.json();

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwbOGYEzpxerAll1enPNGe2eY4qsYljbFb4H4lWXu94ps4Vl6_be-KB1rVu3s820elK/exec";

  const formData = new URLSearchParams();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  await fetch(scriptUrl, {
    method: "POST",
    body: formData,
  });

  return Response.json({ success: true });
}