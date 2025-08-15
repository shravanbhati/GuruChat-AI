import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "GuruChat",
  description:
    "AI powered chat app to talk directly with coding gurus Hitesh Choudhary and Piyush Garg.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense>
        {" "}
        <body>{children}</body>
      </Suspense>
    </html>
  );
}
