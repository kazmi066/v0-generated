import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${pixelify.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
