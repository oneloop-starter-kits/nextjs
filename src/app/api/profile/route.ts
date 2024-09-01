import { createOneloop } from "@oneloop-hq/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto

const oneloop = createOneloop(process.env.ONELOOP_SDK_KEY ?? "");

export const GET = oneloop.auth(
  async (request: Request) => {
    return new Response("Profile Endpoint Authenticated", {
      headers: {
        "content-type": "text/plain",
      },
    });
  },
  {
    scopes: [
      {
        representation: "profile",
        read: true,
      },
    ],
    onInvalidKey: (req, err) => {
      return new Response("Invalid API Key Custom Fn", {
        status: 401,
        headers: {
          "content-type": "text/plain",
        },
      });
    },
    onError: (req, err) => {
      console.log("Aahan", err.message);
      return new Response("Invalid API Key", {
        status: 401,
        headers: {
          "content-type": "text/plain",
        },
      });
    },
  }
);
