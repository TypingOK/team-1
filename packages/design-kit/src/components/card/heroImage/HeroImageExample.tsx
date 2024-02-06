import {
  CardImage,
  HeroImageBadge,
  HeroImageTitle,
  HeroImageWrapper,
} from "@/components/card/heroImage/HeroImage";
// 배너 느낌의 Card를 위해 별도로 제작하였습니다.
// 배경에 사진이 있고 화면 중앙에 글자가 있는 Card입니다.
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
