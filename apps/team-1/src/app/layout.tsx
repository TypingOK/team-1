import type { Metadata } from "next";
import "./globals.css";
import "design-kit/dist/style.css";
import Provider from "./Provider";
import RecoilRootWrapper from "@/recoil/recoilRootWrapper";
import HeaderWrapper from "@/components/header/HeaderWrapper";

export const metadata: Metadata = {
  title: "스펙로그",
  description: "개꿀잼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRootWrapper>
          <Provider>
            <HeaderWrapper>{children}</HeaderWrapper>
          </Provider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
