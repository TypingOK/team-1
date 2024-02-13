"use client";
import { privacyPolicyData, serviceTermsData } from "@/data/data";
import { Button, TextArea } from "design-kit";
import Image from "next/image";
import { useState, useEffect } from "react";
import RoundCheckbox from "./roundCheckbox";

interface SignUpProps {
  goToNextPage: () => void;
}

export default function SignUpStart({ goToNextPage }: SignUpProps) {
  const [privacyAgree, setPrivacyAgree] = useState<boolean | null>(false);
  const [termsAgree, setTermsAgree] = useState<boolean | null>(false);
  const [allAgree, setAllAgree] = useState<boolean>(false);

  useEffect(() => {
    // 개별 동의 상태가 모두 true일 때만 전체동의를 true로 설정
    if (privacyAgree === true && termsAgree === true) {
      setAllAgree(true);
    } else setAllAgree(false);
  }, [privacyAgree, termsAgree]);

  useEffect(() => {
    // 전체동의가 선택되었을 때, 모든 항목을 동의로 설정
    if (allAgree) {
      setPrivacyAgree(true);
      setTermsAgree(true);
    }
  }, [allAgree]);

  const handlePrivacyChange = (isAgree: boolean) => {
    setPrivacyAgree(isAgree);
  };

  const handleTermsChange = (isAgree: boolean) => {
    setTermsAgree(isAgree);
  };

  const handleAllAgreeChange = () => {
    setAllAgree(!allAgree);
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex flex-col justify-center items-center mb-3">
          <Image
            width={260}
            height={42}
            src="/logo.svg"
            alt="logo"
            className="mt-16"
          />
          <div className="text-2xl font-semibold my-10">회원가입</div>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-bold mb-1">개인정보 처리방침</p>
          <div className="flex flex-row">
            <RoundCheckbox
              value="allAgree"
              name="allAgree"
              onChange={handleAllAgreeChange}
              checked={allAgree}
            />
            <p className="text-sm mt-1">전체 동의</p>
          </div>
        </div>
        <TextArea
          defaultValue={privacyPolicyData}
          className="w-[1040px] h-[386px] text-xs font-semibold"
        />
        <div className="flex flex-row justify-end">
          <div className="flex flex-row mr-5">
            <RoundCheckbox
              value="privacyAgree"
              name="privacyAgree"
              onChange={() => handlePrivacyChange(true)}
              checked={privacyAgree === true}
            />
            <p className="text-sm">동의</p>
          </div>
          <div className="flex flex-row">
            <RoundCheckbox
              value="privacyDisagree"
              name="privacyDisagree"
              onChange={() => handlePrivacyChange(false)}
              checked={privacyAgree === false}
            />
            <p className="text-sm">비동의</p>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <p className="font-bold mb-1">서비스 이용약관</p>
        </div>
        <TextArea
          defaultValue={serviceTermsData}
          className="w-[1040px] h-[386px]  text-xs font-semibold"
        />
        <div className="flex flex-row justify-end">
          <div className="flex flex-row mr-5">
            <RoundCheckbox
              value="termsAgree"
              name="termsAgree"
              onChange={() => handleTermsChange(true)}
              checked={termsAgree === true}
            />
            <p className="text-sm">동의</p>
          </div>
          <div className="flex flex-row">
            <RoundCheckbox
              value="termsDisagree"
              name="termsDisagree"
              onChange={() => handleTermsChange(false)}
              checked={termsAgree === false}
            />
            <p className="text-sm">비동의</p>
          </div>
        </div>
        <Button
          className="w-[1040px] h-10 mt-20 mb-16 text-base"
          variant={"primary"}
          onClick={goToNextPage}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
