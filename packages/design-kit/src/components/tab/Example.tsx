import { TabContent, TabList, TabRoot, TabTrigger } from "./Tab";

const TabExample = () => {
  // TabRoot에 defaultValue를 넣으면 기본적으로 선택 될 tab을 미리 지정 할 수 있습니다.
  // TabRoot의 경우 value와 onValueChange가 있기 때문에 값이 변경 될 때 마다 value를 직접 넣어서 변경하거나 callback 함수를 넣어서 실행할 수 있습니다.
  // value 값을 기준으로 선택이 되기 때문에 value는 필수적으로 넣어야 합니다.
  // TabList는 타이틀 값들이 들어갈 구역입니다.
  // TabTrigger는 타이틀들을 넣으면 됩니다. 기본적으로 120px x 40px에 대응되는 rem 값들이 들어 있습니다.
  // TabTrigger의 경우 css state 값으로 data-state가 들어있으며 선택 된 경우 data-state=active, 선택되지 않은 경우 data-state=inactive로 표현됩니다.
  // TabTrigger가 선택 된 경우의 색을 변경하고 싶은 경우 TabTrigger에 className으로 data-[state=active]:를 넣어 원하는 tailwind 값을 넣으면 됩니다.
  // TabTrigger에 disabled 값이 있습니다. boolean 값을 넣을 수 있으며 true를 넣으면 해당 탭이 비활성화 됩니다.
  // TabContent의 경우 value에 들어있는 값과 TabTrigger의 값이 동일한 경우 콘텐츠가 표현 됩니다.
  // 이외 자세한 내용의 경우 해당 링크를 참고 하시면 좋습니다. https://www.radix-ui.com/primitives/docs/components/tabs
  return (
    <TabRoot defaultValue="tab1">
      <TabList className="w-96 flex justify-around">
        <TabTrigger value="tab1">첫번째</TabTrigger>
        <TabTrigger value="tab2">두번째</TabTrigger>
        <TabTrigger value="tab3">세번째</TabTrigger>
      </TabList>
      <TabContent value="tab1" className="w-96 h-96 border">
        첫번째 콘텐츠
      </TabContent>
      <TabContent value="tab2" className="w-96 h-96 border">
        두번째 콘텐츠
      </TabContent>
      <TabContent value="tab3" className="w-96 h-96 border">
        세번째 콘텐츠
      </TabContent>
    </TabRoot>
  );
};

export default TabExample;
