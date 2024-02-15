import { mypageProps } from "../page";
import MypageTap from "./(components)/MyfollowTap";

const myfollow = ({ params, searchParams }: mypageProps) => {
  return <MypageTap params={params} searchParams={searchParams} />;
};
export default myfollow;
