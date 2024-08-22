"use client";

import { OneloopApiKeyManager } from "@oneloop-hq/react";
import { useEffect, useState } from "react";
import { getData } from "@/app/api-key-manager/actions";

const WORKSPACE_ID = "workspace_id";
const CURRENT_CUSTOMER_ID = "customer_id";

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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {linkToken ? (
        <OneloopApiKeyManager
          accentColor="#ADFF85"
          description="Create a key that unlocks full API access, enabling extensive interaction with your account. Learn more"
          textColor="#000000"
          title="API Keys"
          token={linkToken}
          darkMode={false}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
