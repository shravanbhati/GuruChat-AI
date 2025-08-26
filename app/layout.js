import "./globals.css";

export const metadata = {
  title: "GuruChatAI",
  description:
    "AI powered chat app to talk directly with coding gurus, Hitesh Choudhary and Piyush Garg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
