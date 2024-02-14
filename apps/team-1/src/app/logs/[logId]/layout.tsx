import { logsTypes } from "@/types";
import { handleLogGetById } from "@/utils/api";
import type { Metadata } from "next";

interface generateMetadataProps {
  params: { logId: string };
}

export const generateMetadata = async ({
  params,
}: generateMetadataProps): Promise<Metadata> => {
  const { logId } = params;
  const currentLogData = (await handleLogGetById(logId)) as logsTypes;

  return {
    title: `${currentLogData.title}`,
    description: `${currentLogData.content.slice(0, 80)}`,
    keywords: currentLogData.tags.split(","),
    openGraph: {
      images: currentLogData.thumbnail,
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-[200px]">{children}</div>;
}
