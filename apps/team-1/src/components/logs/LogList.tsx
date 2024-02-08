"use client";

import { useGetLogLists } from "@/hooks/queries/useGetLogLists";
import {
  CardImage,
  MyCardDate,
  MyCardImageWrapper,
  MyCardNickname,
  MyCardSeries,
  MyCardTitle,
  MyCardWrapper,
  Pagination,
  PaginationNumber,
  PaginationNextButton,
  PaginationPreviousButton,
  PaginationFastForwardButton,
  PaginationRewindButton,
  PaginationDot,
} from "design-kit";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const LogList = ({ category }: { category: string }) => {
  const searchParmas = useSearchParams();
  const pageParams = searchParmas.get("page");
  const router = useRouter();
  let page: number | null = null;
  if (typeof pageParams === "string") {
    page = parseInt(pageParams);
  }

  const { data, isLoading } = useGetLogLists({
    page,
    category,
    itemsPerPage: 15,
  });
  console.log(data);
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data) {
    if (page !== null) {
      const startPage = Math.trunc((page - 1) / 5) * 5 + 1;
      const endPage =
        data.page + 5 <= data.totalPages ? data.page + 5 : data.totalPages;
      return (
        <>
          <div className="mt-[113px] w-full justify-center flex flex-wrap mb-[100px]">
            {data.items.map(e => (
              <Link key={e.id} href={`/logs/${e.id}`}>
                <MyCardWrapper border={`none`} className="h-96 flex flex-col">
                  <MyCardImageWrapper className="mb-7">
                    <CardImage src={e.thumbnail} alt="이미지"></CardImage>
                  </MyCardImageWrapper>
                  <MyCardSeries className="h-6">{e.series}</MyCardSeries>
                  <MyCardTitle>{e.title}</MyCardTitle>
                  <MyCardDate
                    className="w-full text-sm"
                    date={e.created}
                    like
                    likeCount={e.likes}
                    hit
                    hitCount={e.views}
                  ></MyCardDate>
                  <div className="w-full truncate h-10">{e.content}</div>
                  <MyCardNickname className="flex w-full mt-auto">
                    {e?.expand?.userId.profileImage && (
                      <Image
                        src={`https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/_pb_users_auth_/${e?.expand?.userId.id}/${e?.expand?.userId.profileImage}`}
                        alt="프로필 사진"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                    )}

                    {e?.expand?.userId.username}
                  </MyCardNickname>
                </MyCardWrapper>
              </Link>
            ))}
          </div>
          {data && page !== null && (
            <div className="mb-[150px]">
              <Pagination>
                <PaginationRewindButton
                  onClick={() => {
                    router.push(`/logs?page=1`);
                  }}
                />
                <PaginationPreviousButton
                  onClick={() => {
                    if (page) {
                      router.push(`/logs?page=${page - 1}`);
                    }
                  }}
                />
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                  <PaginationNumber
                    key={index + startPage}
                    isActive={index + startPage === page}
                    onClick={() => {
                      router.push(`/logs?page=${index + startPage}`);
                    }}
                  >
                    {index + startPage}
                  </PaginationNumber>
                ))}
                <PaginationNextButton
                  onClick={() => {
                    if (page) {
                      router.push(`/logs?page=${page + 1}`);
                    }
                  }}
                />
                <PaginationFastForwardButton
                  onClick={() => {
                    router.push(`/logs?page=${data.totalPages}`);
                  }}
                />
              </Pagination>
            </div>
          )}
        </>
      );
    } else {
      return <div></div>;
    }
  } else {
    return null;
  }
};

export default LogList;
