import ChatClient from "./client.js";

export default function ChatPage({ searchParams }) {
  // Get initial model from search params for server-side rendering
  const initialModel =
    searchParams?.character === "piyush" || searchParams?.character === "hitesh"
      ? searchParams.character
      : "hitesh";

  return <ChatClient initialModel={initialModel} />;
}
