import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

export const metadata: Metadata = {
  title: "Healing flow - Trauma coaching and Self-empowerment",
  description:
    "Find peace and healing with Healing Flow's professional mental health services. Expert therapists providing individual therapy, couples counseling, and group sessions.",
  keywords: [
    "mental health",
    "therapy",
    "counseling",
    "mental wellness",
    "therapist",
    "psychology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
