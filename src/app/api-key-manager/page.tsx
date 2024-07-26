"use client";

import { App } from "@oneloop-hq/frontend-react-sdk";
import { useEffect, useState } from "react";
import { getData } from "@/app/api-key-manager/actions";

const WORKSPACE_ID = "<your-oneloop-workspace-id>";
const CURRENT_CUSTOMER_ID = "<your-customer-id>";

export default function Page() {
  const [linkToken, setLinkToken] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getData(WORKSPACE_ID, CURRENT_CUSTOMER_ID);
      setLinkToken(res.token);
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {linkToken ? (
        <App
          accentColor="#ADFF85"
          description="Create a key that unlocks full API access, enabling extensive interaction with your account. Learn more"
          textColor="#000000"
          title="Standard keys"
          token={linkToken}
          isDev
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
