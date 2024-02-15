import { mypageProps } from "../page";
import MyactiveTap from "./(components)/MyactiveTap";

const myactive = ({ params, searchParams }: mypageProps) => {
  return <MyactiveTap params={params} searchParams={searchParams} />;
};
export default myactive;
