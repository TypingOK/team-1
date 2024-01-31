import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스펙로그 마이페이지",
  description: "마이페이지",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default RootLayout;
