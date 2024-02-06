import { Button } from "design-kit";

interface logCenterInfo {
  title: string;
  like: string;
  view: string;
}

const LogCenterInfo = ({ title, like, view }: logCenterInfo) => {
  return (
    <div className="bg-neutral-5 min-h-[310px] my-[100px] pt-[100px] pb-[40px]">
      <div className="flex flex-col items-center gap-[40px]">
        <div className="flex gap-[5px]">
          <Button className="w-[200px]">
            <div className="flex flex-col items-center">
              <div className="w-[32px] h-[32px]">
                <img src="/icons/detail/Log_archive save.svg" />
              </div>
              <p className="caption-2 text-neutral-40">아카이브 저장</p>
            </div>
          </Button>
          <Button variant="primary" className="w-[200px]">
            <div className="flex flex-col items-center">
              <div className="w-[32px] h-[32px]">
                <img src="/icons/detail/Log_heart.svg" />
              </div>
              <p className="caption-2 text-primary-0">좋아요</p>
            </div>
          </Button>
        </div>
        <div className="max-w-[800px]">
          <div className="grid gap-[5px]">
            <p className="caption-2 text-neutral-60 text-center">{title}</p>
            <div className="flex gap-[5px] justify-center">
              <p className="flex gap-[7px]">
                <img src="/icons/detail/Log_header_like.svg" />
                <span className="body-7 text-neutral-40">{like}</span>
              </p>
              <p className="flex gap-[7px]">
                <img src="/icons/detail/Log_header_view.svg" />
                <span className="body-7 text-neutral-40">{view}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogCenterInfo;
