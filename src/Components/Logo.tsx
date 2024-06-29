type color = {
  color: string;
};

const Logo = ({ color }: color) => {
  const textColorClass = `text-${color} flex items-center text-3xl font-bold`;

  return (
    <h1 className={textColorClass}>
      <span className="mr-1 text-orange-500">.</span>admin
    </h1>
  );
};

export default Logo;
