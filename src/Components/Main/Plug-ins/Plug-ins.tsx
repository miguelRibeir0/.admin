import Nav from "../Nav";
import PageTitle from "../PageTitle";
import PlugItem from "./PlugItem";

const Plugin = () => {
  return (
    <div>
      <Nav />
      <div className="h-20 w-screen" /> {/* nav filler */}
      <PageTitle title="Plugins" />
      <p className="m-10 w-3/4">
        Connect our plugins to your app to enhance our data and your experience.
      </p>
      <section className="m-10 mt-16 flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-1/4">
          <PlugItem
            url="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/.Admin/MongoDB_Logo.svg.png"
            description="Document-oriented database program."
            status="Inactive"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <PlugItem
            url="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/.Admin/postgres13.png"
            description="Open-source relational database management system."
            status="Active"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <PlugItem
            url="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/.Admin/mysql.png"
            description="Relational database management system."
            status="Inactive"
          />
        </div>
      </section>
      <section className="m-10 flex flex-wrap justify-center gap-8">
        <div className="w-full lg:w-1/4">
          <PlugItem
            url="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/.Admin/square.png"
            description="Website building and hosting company."
            status="Inactive"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <PlugItem
            url="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/.Admin/shop.png"
            description="Website building and hosting company."
            status="Inactive"
          />
        </div>
        <div className="w-full lg:w-1/4">
          <PlugItem
            url="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/.Admin/stripe.png"
            description="Financial infrastructure platform for businesses."
            status="Active"
          />
        </div>
      </section>
    </div>
  );
};

export default Plugin;
