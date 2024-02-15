import MypageTap from "./(components)/MypageTap";

export interface mypageProps {
  params: { username: string };
  searchParams?: { [key: string]: string };
}

const Mypage = ({ params, searchParams }: mypageProps) => {
  return <MypageTap params={params} searchParams={searchParams} />;
};

export default Mypage;
