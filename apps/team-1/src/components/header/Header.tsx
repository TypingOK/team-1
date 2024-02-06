import Image from "next/image";

const Header = () => {
  return (
    <div className="ml-auto h-full flex items-center">
      <div className="relative h-full w-52">
        <Image src="/logo.svg" alt="로고" fill />
      </div>
    </div>
  );
};

export default Header;
