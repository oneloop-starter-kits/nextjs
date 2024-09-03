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
    usage: {
      value: 100,
      id: "profile-endpoint-usage",
    },
    onInvalidKey: (req, err) => {
      return new Response("Invalid API Key Custom Fn", {
        status: 401,
        headers: {
          "content-type": "text/plain",
        },
      });
    },
    onError: (req, err) => {
      return new Response("Invalid API Key", {
        status: 401,
        headers: {
          "content-type": "text/plain",
        },
      });
    },
  }
);
