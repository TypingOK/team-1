import { CardImage } from "../heroImage/HeroImage";
import {
  MyCardDate,
  MyCardImageWrapper,
  MyCardNickname,
  MyCardSeries,
  MyCardTitle,
  MyCardWrapper,
} from "./MyCard";
// MyCard를 통해 Card를 생성할 수 있습니다.
// MyCardWrapper는 카드를 감싸고 있는 요소를 의미하며 border 속성을 none으로 주면 border가 없는 Card가 나옵니다.
// 반대로 border 속성에 stroke  속성을 주면 brder가 있는 카드가 됩니다.

const MyCardExample = () => {
  return (
    <MyCardWrapper border={`none`}>
      {/* MyCardImageWrapper는 이미지를 사용힐 경우 감싸주어야 합니다. Wrapper 크기를 기준으로 이미지 크기가 결정 되기 때문입니다. */}
      {/* 만약 원하는 크기가 아닌 경우 Wrapper에 className을 통해 값을 변경할 수 있습니다. */}
      <MyCardImageWrapper>
        {/* 이미지의 위치를 넣어주면 됩니다. */}
        <CardImage src="/images/Log_main.png"></CardImage>
      </MyCardImageWrapper>
      {/* 시리즈를 넣어야 하는 경우 Series를 넣으면 됩니다. */}
      <MyCardSeries>Series</MyCardSeries>
      <MyCardTitle>Text</MyCardTitle>
      <MyCardNickname>User Name</MyCardNickname>
      {/* Date 부분에 createdAt 날짜와 좋아요, 조회수, document 수를 확인할 수 있도록 할 수 있습니다. */}
      {/* 기본적으로 좋아요나 조회수는 false로 설정 되어있기 때문에 원하는 요소만 true로 바꿔 출력 하시면 됩니다. */}
      <MyCardDate
        className="w-full text-xs"
        date={"2024.01.31"}
        like
        likeCount={100}
        document
        documentCount={200}
        hit={true}
        hitCount={300}
      ></MyCardDate>
    </MyCardWrapper>
  );
};

export default MyCardExample;
