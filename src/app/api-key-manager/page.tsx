"use client";

import { OneloopApiKeyManager } from "@oneloop-hq/react";
import { useEffect, useState } from "react";
import { getData } from "@/app/api-key-manager/actions";

const WORKSPACE_ID = "ws_69d96bdf84fb435caef375eaacc08c49";
const CURRENT_CUSTOMER_ID = "customer-aahan";

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
        <div className="min-w-[800px]">
          <OneloopApiKeyManager
            accentColor="#ADFF85"
            description="Create a key that unlocks full API access"
            textColor="#000000"
            title="API Keys"
            token={linkToken}
            darkMode={true}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
