import Head from "next/head";
import MyLink from "./MyLink";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"Tutorial Next" + keywords}></meta>
        <title>Main Page</title>
      </Head>
      <div className="navbar">
        <MyLink href={"/"} text="Index" />
        <MyLink href={"/users"} text="Users" />
        <a href={"/users"}>Users</a>
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
