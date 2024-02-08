"use client";
import { useQuery } from "@tanstack/react-query";
import Swiper from "./Swiper";
import { handleLogGetList } from "@/utils/api";

const SwiperWrapper = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["mainSwiper"],
    queryFn: async () => {
      const result = await handleLogGetList(0, 3);
      return result;
    },
  });
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data) {
    return (
      <>
        <Swiper data={data}></Swiper>
      </>
    );
  } else {
    return null;
  }
};

export default SwiperWrapper;
