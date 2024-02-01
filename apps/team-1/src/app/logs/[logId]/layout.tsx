import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상세글",
  description: "개꿀잼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-[200px]">{children}</div>;
}
