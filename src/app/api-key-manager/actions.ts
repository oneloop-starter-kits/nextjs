"use server";

export async function getData(workspaceId: string, customerId: string) {
  const res = await fetch("https://prod.oneloop.ai/api/v1/link-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ONELOOP_CLIENT_TOKEN}`,
    },
    body: JSON.stringify({
      customerId,
      workspaceId,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
