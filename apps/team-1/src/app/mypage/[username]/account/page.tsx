import { mypageProps } from "../page";
import AccountTap from "./(componets)/AccountTap";

const Account = ({ params, searchParams }: mypageProps) => {
  return <AccountTap params={params} searchParams={searchParams} />;
};

export default Account;
