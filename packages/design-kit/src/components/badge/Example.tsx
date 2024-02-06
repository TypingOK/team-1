import { Badge } from ".";

// 뱃지의 경우 여러가지 속성이 있습니다.
//  variant: {
//         default: "border-trasnparent bg-neutral-0 text-neutral-100",
//         primary: "border-transparent bg-primary-100 text-neutral-0",
//         outline: "text-neutral-100 bg-none",
//         outlinePrimary: "border-primary-100 text-primary-100",
//         outlineWhite: "bg-neutral-0 text-primary-100 border-none",
//         black: "bg-neutral-100 text-neutral-0",
//         outlineBrand: `border-none bg-[#F9F5FF] text-[#6941C6]`,
//         outlineBlue: `border-none bg-[#F5F8FF] text-primary-90`,
//         outlineGreen: `border-none bg-[#F2FDF2] text-[#2DB45D]`,
//         outlinePink: `border-none bg-[#FDF2FA] text-[#C11574]`,
//         outlineBlueLight: `border-none bg-[#F0F9FF] text-[#026AA2]`,
//         outlineOrange: `text-[#C4320A] border-none bg-[#FFF6ED]`,
//         outlineGray: `text-[#344054] border-none bg-[#F2F4F7]`,
//         outlineRed: `text-[#B42318] border-none bg-[#FEF3F2]`,
//       },
// variant에는 위와 같은 속성들이 있으며 각각 배경과 글자 보더 색이 다르기 때문에 상황에 맞게 사용하면 됩니다.
// 일반적으로 primary나 black의 경우 배경이 꽉 차있는 일반적인 버튼을 의미하며 outline이적힌 경우 보통 배경은 없으며 border가 있는 경우입니다.
// outlinePrimary 같은 경우 border와 background가 있으며 text도 색상이 들어가 있습니다.
// 또한 버튼으로 동작해야하는 경우 Badge에 editMode를 true로 주면 x이 달려있는 버튼으로 바뀌게 됩니다.
const BadgeExample = () => {
  return (
    <>
      <Badge variant={"outlineGreen"}>test</Badge>
      <Badge
        editMode={true}
        onClick={() => {
          console.log("test");
        }}
      >
        삭제 버튼
      </Badge>
    </>
  );
};

export default BadgeExample;
