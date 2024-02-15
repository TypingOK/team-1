"use client";

import { TabRoot, TabList, TabTrigger, TabContent } from "design-kit";
import MyFollowing from "./MyFollowing";
import MyFollower from "./MyFollower";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MypageTap = () => {
  const searchParams = useSearchParams();
  const target = searchParams.get("target");
  const [state, setState] = useState<string>(target ? target : "following");
  const followingRef = useRef<HTMLButtonElement>(null);
  const followerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (target === "following") {
      followingRef.current?.click();
    }
    if (target === "follower") {
      followerRef.current?.click();
    }
  }, [target, followingRef, followerRef]);

  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">마이페이지</p>
      <TabRoot defaultValue={state}>
        <TabList className="w-[250px] flex justify-around">
          <Link href={"/mypage/i_am_angry/myfollow?target=following"}>
            <TabTrigger
              ref={followingRef}
              value="following"
              className="text-sm text-neutral-90"
            >
              팔로잉
            </TabTrigger>
          </Link>
          <Link href={"/mypage/i_am_angry/myfollow?target=follower"}>
            <TabTrigger
              ref={followerRef}
              value="follower"
              className="text-sm text-neutral-90"
            >
              팔로워
            </TabTrigger>
          </Link>
        </TabList>
        <TabContent value="following" className="w-full h-full pt-[30px]">
          <MyFollowing />
        </TabContent>
        <TabContent value="follower" className="w-full h-full pt-[30px]">
          <MyFollower />
        </TabContent>
      </TabRoot>
    </div>
  );
};

export default MypageTap;
