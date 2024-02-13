import { formatDate } from "@/utils/common/formatDate";

interface logHeaderProps {
  title: string;
  userName: string;
  profileImg: string;
  createdAt: string;
  like: number;
  view: number;
}

const LogHeader = ({
  title,
  userName,
  profileImg,
  createdAt,
  like,
  view,
}: logHeaderProps) => {
  return (
    <div className="max-w-[800px] m-auto">
      <div className="grid gap-[20px]">
        <div>
          <h1 className="page-title">{title}</h1>
        </div>
        <div className="flex gap-[10px] body-7 text-neutral-40 items-center">
          <HeaderAvatar profileImg={profileImg} />
          <p className="body-6-bold font-semibold">{userName}</p>
          <p className="border-l h-[16px] border-[#D9D9D9]" />
          <p>{formatDate(createdAt)}</p>
          <p className="border-l h-[16px] border-[#D9D9D9]" />
          <p className="flex gap-[7px]">
            <img src="/icons/detail/Log_header_like.svg" />
            <span>{like}</span>
          </p>
          <p className="flex gap-[7px]">
            <img src="/icons/detail/Log_header_view.svg" />
            <span>{view}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const HeaderAvatar = ({ profileImg }: { profileImg: string }) => {
  return (
    <div className="w-[24px] h-[24px] rounded-full">
      <img className="rounded-full" src={profileImg} />
    </div>
  );
};

export default LogHeader;
