import { joinUserState } from "@/recoil/joinUserState";
import { handleEmailVerification } from "@/utils/api";
import { useRecoilValue } from "recoil";
import { Button } from "design-kit";

export default function SignUpComplete() {
  const userValue = useRecoilValue(joinUserState);
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex flex-col justify-center items-center">
          <img className="mt-16" src="sfaclog.svg" alt="sfaclog" />
          <div className="text-2xl font-semibold my-10">이메일 인증</div>
          <img src="EmailVerify_image.svg" alt="email verify" />
          <p className="text-primary-80 mt-10 mb-5">
            {userValue.email}로 인증메일을 발송했습니다.
          </p>
          <p className="text-sm text-neutral-60 mb-3">
            메일 내에 있는 인증 버튼을 클릭하신 뒤 아래 가입 완료 버튼을 눌러
            주세요.
          </p>
          <p className="text-sm text-neutral-60">
            메일이 도착하지 않았다면 스팸함을 확인해주세요.
          </p>
          <p className="text-sm text-neutral-60">
            메일 재발송이 필요하시다면 여기를 눌러주세요.
          </p>
          <Button
            type="submit"
            variant={"primary"}
            className="w-80 h-10 text-base mt-12 mb-12"
          >
            가입 완료
          </Button>
        </div>
      </div>
    </div>
  );
}
