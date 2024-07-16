type PlugItemProps = {
  url: string;
  description: string;
  status: string;
};

const PlugItem: React.FC<PlugItemProps> = ({ url, description, status }) => {
  return (
    <div>
      <div className="flex min-h-44 w-full cursor-pointer flex-col items-center gap-y-7 rounded-lg border-2 border-orange-500 bg-slate-50 pb-10 pt-10 shadow-md lg:h-72 dark:border-gray-100 dark:border-opacity-50">
        <div className="ml-3 flex h-3/4 flex-col items-center justify-center lg:w-full">
          <img src={`${url}`} className="h-auto max-h-52 w-52" />
        </div>
        <p className="w-11/12 text-center">{`${description}`}</p>
      </div>
      <div className="flex h-10 w-full items-center gap-x-3 rounded-lg rounded-t-none border-2 border-t-0 border-orange-500 dark:border-gray-100 dark:border-opacity-50 dark:bg-neutral-950 dark:text-slate-50">
        <h3 className="ml-3 font-bold">Status: </h3>
        <p>{`${status}`}</p>
        <span
          className={`duration-2000 h-[7px] w-[7px] animate-pulse rounded-full ${status === "Active" ? "bg-green-500" : "bg-red-500"} transition`}
        ></span>
      </div>
    </div>
  );
};

export default PlugItem;
