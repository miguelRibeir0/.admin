type PageTitleProp = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProp) => {
  return (
    <h1 className="m-10 mb-14 text-3xl font-bold uppercase lg:text-4xl">
      <span className="text-orange-500">/</span>/ {title}
    </h1>
  );
};

export default PageTitle;
