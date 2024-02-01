import { CardImage } from "../heroImage/HeroImage";
import {
  MyCardDate,
  MyCardImageWrapper,
  MyCardNickname,
  MyCardSeries,
  MyCardTitle,
  MyCardWrapper,
} from "./MyCard";

const MyCardExample = () => {
  return (
    <MyCardWrapper border={`none`}>
      <MyCardImageWrapper>
        <CardImage src="/images/Log_main.png"></CardImage>
      </MyCardImageWrapper>
      <MyCardSeries>Series</MyCardSeries>
      <MyCardTitle>Text</MyCardTitle>
      <MyCardNickname>User Name</MyCardNickname>
      <MyCardDate
        className="w-full text-xs"
        date={"2024.01.31"}
        like
        likeCount={100}
        document
        documentCount={200}
        hit={true}
      ></MyCardDate>
    </MyCardWrapper>
  );
};

export default MyCardExample;
