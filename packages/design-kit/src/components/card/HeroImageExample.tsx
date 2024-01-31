import {
  HeroImage,
  HeroImageBadge,
  HeroImageTitle,
  HeroImageWrapper,
} from "@/components/card/HeroImage";

const HeroImageExample = () => {
  return (
    <>
      <HeroImageWrapper>
        <HeroImage src="/images/Log_main.png" alt="이미지" />
        <HeroImageTitle>TEXT</HeroImageTitle>
        <HeroImageBadge>이번 주 가장 많이 읽은 로그</HeroImageBadge>
      </HeroImageWrapper>
      <HeroImageWrapper size="big">
        <HeroImage src="/images/Log_main.png" alt="이미지" />
        <HeroImageTitle>TEXT</HeroImageTitle>
        <HeroImageBadge>이번 주 가장 많이 읽은 로그</HeroImageBadge>
      </HeroImageWrapper>
    </>
  );
};

export default HeroImageExample;
