import { Button } from ".";

//{
//     variants: {
//       variant: {
//         nomal: `bg-neutral-0 border border-neutral-20 text-neutral-70 active:bg-neutral-90 disabled:text-neutral-20 hover:bg-neutral-5`,
//         primary: `bg-primary-100 text-neutral-0 active:bg-neutral-90  disabled:bg-primary-30 hover:bg-primary-80`,
//         ghost: `bg-none border-none text-neutral-70 active:bg-neutral-90 disabled:text-neutral-20 hover:bg-neutral-5`,
//         outline: "text-neutral-100 bg-none",
//         outlinePrimary:
//           "border-primary-100 text-primary-100 hover:border-primary-80",
//         outlineWhite: "bg-neutral-0 text-primary-100 border-none",
//       },
//       popupSize: {
//         small: `w-[10.35938rem] h-[2.8125rem] p-[0.46875rem]`,
//         big: `w-[16.81413rem] h-[4.54969rem] text-2xl font-semibold`,
//       },
//     },
//     defaultVariants: {
//       variant: `nomal`,
//       popupSize: `big`,
//     },
//   },
// variant에 각종 속성을 넣을 수 있습니다. nomal의 경우 하얀색 배경에 회색 보더가 있습니다.
// primary의 경우 파란색 배경의 버튼을 의미 합니다.
// popupSize의 경우 버튼의 크기를 의미합니다.
// 만약 그 외 크기가 필요한 경우 className을 통해 직접 값을 설정할 수 있습니다.

const ButtonExample = () => {
  return (
    <>
      <Button variant={"primary"} popupSize={"small"}>
        버튼
      </Button>
    </>
  );
};

export default ButtonExample;
