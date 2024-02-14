"use client"

import { TabRoot, TabList, TabTrigger, TabContent } from 'design-kit';
import MyFollowing from './MyFollowing';
import MyFollower from './MyFollower';

const MypageTap = () => {
  return (
    <div className="flex flex-col gap-[20px] p-[50px]">
      <p className="body-3-bold">마이페이지</p>
      <TabRoot defaultValue="tab1">
        <TabList className="w-[250px] flex justify-around">
          <TabTrigger value="tab1" className="text-sm text-neutral-90">
            팔로잉
          </TabTrigger>
          <TabTrigger value="tab2" className="text-sm text-neutral-90">
            팔로워
          </TabTrigger>
        </TabList>
        <TabContent value="tab1" className="w-full h-full pt-[30px]">
          <MyFollowing />
        </TabContent>
        <TabContent value="tab2" className="w-full h-full pt-[30px]">
          <MyFollower />
        </TabContent>
      </TabRoot>
    </div>
  )
}

export default MypageTap;