import { useOneloop } from "@oneloop-hq/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto

// eslint-disable-next-line
export const GET = useOneloop(
  async (request: Request) => {
    return new Response("Profile Endpoint Authenticated", {
      headers: {
        "content-type": "text/plain",
      },
    });
  },
  {
    sdkKey: "ok_24117c8fde624df1bae439e28b4bd9b7",
    scopes: [
      {
        representation: "profile",
        read: true,
      },
    ],
  },
  {
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
