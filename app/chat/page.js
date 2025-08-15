import ChatClient from "./client.js";
import { Suspense } from "react";
export default function ChatPage({ searchParams }) {
  // Get initial model from search params for server-side rendering
  const initialModel =
    searchParams?.character === "piyush" || searchParams?.character === "hitesh"
      ? searchParams.character
      : "hitesh";

  return (
    <Suspense fallback={<div>Loading chat...</div>}>
      <ChatClient initialModel={initialModel} />
    </Suspense>
  );
}
