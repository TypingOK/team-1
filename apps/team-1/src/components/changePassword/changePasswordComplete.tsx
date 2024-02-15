import Image from "next/image";
import { Button } from "design-kit";
import { useRouter } from "next/navigation";

export default function ChangePasswordComplete() {
  const router = useRouter();

  function goLogin() {
    router.push("/login");
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center mb-3">
        <Image
          width={353}
          height={57}
          src="/logo.svg"
          alt="logo"
          className="mt-32 mb-6"
        />
        <div className="text-2xl font-semibold mt-10">
          비밀번호 변경 이메일이 발송되었습니다
        </div>
        <div className="text-lg my-3">
          비밀번호를 변경한 후에 로그인해주세요
        </div>
        <Button
          type="submit"
          variant={"primary"}
          className="w-[355px] h-10 text-base mt-28 mb-36"
          onClick={goLogin}
        >
          로그인
        </Button>
      </div>
    </div>
  );
}
