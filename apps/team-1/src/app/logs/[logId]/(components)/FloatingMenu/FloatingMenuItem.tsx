interface floatingMenuItemProps {
  label: string;
  img: string;
  callback: () => void;
}

const FloatingMenuItem = ({
  label,
  img = "/icons/Log_follow.svg",
  callback,
}: floatingMenuItemProps) => {
  return (
    <div
      onClick={callback}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="w-[40px] h-[40px]">
        <img src={img} />
      </div>
      <p className="caption-4 text-neutral-40">{label}</p>
    </div>
  );
};

export default FloatingMenuItem;
