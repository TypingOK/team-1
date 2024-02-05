import { Input } from ".";

const InputExample = () => {
  // 인풋태그의 크기를 variant 옵션을 통해 변경할 수 있습니다.
  // large, small로 변경할 수 있으며
  // border의 경우 full과 bottom 두가지가 있습니다.
  // 모든 border가 필요한 경우 full, 아래쪽 border만 필요한 경우 bottom을 사용하면 됩니다
  // 이외의 동작은 일반적인 input과 같습니다.
  return (
    <>
      <Input variant={`small`} border={`full`} placeholder="test" />
    </>
  );
};
export default InputExample;
