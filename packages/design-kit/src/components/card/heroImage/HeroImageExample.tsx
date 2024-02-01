import {
  CardImage,
  HeroImageBadge,
  HeroImageTitle,
  HeroImageWrapper,
} from "@/components/card/heroImage/HeroImage";

const HeroImageExample = () => {
  return (
    <>
      <HeroImageWrapper>
        <CardImage src="/images/Log_main.png" banner={true} alt="이미지" />
        <HeroImageTitle>TEXT</HeroImageTitle>
        <HeroImageBadge>이번 주 가장 많이 읽은 로그</HeroImageBadge>
      </HeroImageWrapper>
      <HeroImageWrapper size="big">
        <CardImage src="/images/Log_main.png" banner={true} alt="이미지" />
        <HeroImageTitle>TEXT</HeroImageTitle>
        <HeroImageBadge>이번 주 가장 많이 읽은 로그</HeroImageBadge>
      </HeroImageWrapper>
    </>
  );
};

export default HeroImageExample;
