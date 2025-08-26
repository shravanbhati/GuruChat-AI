import ChatClient from "./client.js";
import { Suspense } from "react";
import PageLoader from "@/Components/PageLoader.js";
export default function ChatPage({ searchParams }) {
  // Get initial model from search params for server-side rendering
  const initialModel =
    searchParams?.character === "piyush" || searchParams?.character === "hitesh"
      ? searchParams.character
      : "hitesh";

  return (
    <Suspense fallback={<PageLoader />}>
      <ChatClient initialModel={initialModel} />
    </Suspense>
  );
}
