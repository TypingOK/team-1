interface logHeaderProps {
  title: string;
  userName: string;
  profileImg: string;
  createdAt: string;
  like: string;
  view: string;
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
      <div>
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="flex">
        <HeaderAvatar profileImg={profileImg} />
        <p>{userName}</p>
        <p>{createdAt}</p>
        <p className="flex">
          <img src="/icons/Log_header_like.svg" />
          {like}
        </p>
        <p className="flex">
          <img src="/icons/Log_header_view.svg" />
          {view}
        </p>
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
