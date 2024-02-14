import LogTabs from "@/components/logs/LogTabs";

const LogsPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1200px] mt-16 flex justify-center">
        <LogTabs />
      </div>
    </div>
  );
};

export default LogsPage;
