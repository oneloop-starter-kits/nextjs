import { useOneloop } from "@oneloop-hq/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto

const oneloopSdkKey = process.env.ONELOOP_SDK_KEY ?? "";

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
    sdkKey: oneloopSdkKey,
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
