"use client";

import { useEffect } from "react";
import Form from "./_components/Form";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Form></Form>
    </div>
  );
}
