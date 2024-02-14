import { Button } from "design-kit";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUpComplete() {
  const router = useRouter();
  const goLogin = () => {
    router.push("/login");
  };
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex flex-col justify-center items-center">
          <Image
            width={260}
            height={42}
            src="/logo.svg"
            alt="logo"
            className="mt-16"
          />
          <Image
            width={331}
            height={331}
            src="/Finish_image.svg"
            alt="logo"
            className="my-16"
          />
          <div className="text-2xl font-semibold mb-2">
            회원가입이 완료되었습니다!
          </div>
          <div className="text-neutral-60">
            지금 바로 다양한 작업을 감상해보세요.
          </div>
          <Button
            type="button"
            variant={"primary"}
            className="w-80 h-10 text-base mt-10 mb-40"
            onClick={goLogin}
          >
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
