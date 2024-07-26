"use client";

import { App } from "@oneloop-hq/frontend-react-sdk";

export default function ApiKeyManager(props: { linkToken: string }) {
  return (
    <div>
      <App
        accentColor="#ADFF85"
        description="Create a key that unlocks full API access, enabling extensive interaction with your account. Learn more"
        textColor="#000000"
        title="Standard keys"
        token={props.linkToken}
      />
    </div>
  );
}
