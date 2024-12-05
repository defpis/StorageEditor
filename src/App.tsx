import "./index.scss";
import { useEffect, useState } from "react";
import { getCookies, setCookie } from "./chrome";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function App() {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    getCookies().then(setValue);
  }, []);

  return (
    <>
      <div className="p-2" style={{ width: 400 }}>
        <Textarea value={value} onChange={(ev) => setValue(ev.target.value)} />
        <Button onClick={() => setCookie()} size={"sm"}>
          setCookie
        </Button>
      </div>
    </>
  );
}
