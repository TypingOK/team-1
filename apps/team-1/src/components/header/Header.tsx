import Image from "next/image";
import Link from "next/link";
import HeaderRight from "./HeaderRight";
import HeaderRightAuth from "./HeaderRightAuth";
import { getNextjsCookie } from "@/utils/cookies/serverCookie";

const fetchCookies = async () => {
  return await getNextjsCookie();
};

const Header = async () => {
  const cookies = await fetchCookies();

  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="h-full flex mr-auto">
        <nav className="w-[37.75rem] h-full flex items-center justify-between font-semibold text-neutral-50">
          <Link href="/" className="relative h-full w-52">
            <Image src="/logo.svg" alt="로고" fill />
          </Link>
          <Link href="/article">아티클</Link>
          <Link href="/community">커뮤니티</Link>
          <Link href="/program">성장/프로그램</Link>
          <Link href="/project">협업/프로젝트</Link>
        </nav>
      </div>
      <div className="w-[32rem] flex">
        {cookies ? <HeaderRight cookies={cookies} /> : <HeaderRightAuth />}
      </div>
    </div>
  );
};

export default Header;
