import type { Metadata } from "next";
import "./globals.css";
import "design-kit/dist/style.css";
import Provider from "./Provider";
import RecoilRootWrapper from "@/recoil/recoilRootWrapper";
import HeaderWrapper from "@/components/header/HeaderWrapper";
import FooterWrapper from "@/components/footer/FooterWrapper";

export const metadata: Metadata = {
  title: "스펙로그",
  description: "당신의 이야기가 값진 경험이 됩니다.",
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
            <HeaderWrapper />
            {children}
            <FooterWrapper />
          </Provider>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
