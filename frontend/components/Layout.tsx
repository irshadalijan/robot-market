import Head from "next/head";
import Navbar from "./Navbar";

interface layoutProps {
  metaInfo: {
    title: string;
    metaKeywords: string;
    metaDesc: string;
  };
  children?: any;
}

const Layout = (props: layoutProps) => {
  const { title, metaKeywords, metaDesc } = props.metaInfo;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKeywords} />
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-grow mx-auto w-full shadow rounded bg-white">
          {props.children}
        </div>

        <footer className="w-full text-center border-t bg-blue-700 text-white p-4 pin-b">
          <span className="lg:text-xl"> &copy; Robots Market 2022 </span>
        </footer>
      </div>
    </>
  );
};

Layout.defaultProps = {
  metaInfo: {
    title: "Default Title",
    metaKeywords: "Default metaKeywords",
    metaDesc: "Default metaDesc",
  },
};

export default Layout;
