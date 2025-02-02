import type { NextPage } from "next";
import Layout from "../components/Layout";
import HeroHomePage from "../components/HeroHomepage";
import Products from "../components/Products";

const Home: NextPage = () => {
  const metaInfo = {
    title: "Robots Market - Buy the best robots from here",
    metaKeywords: "best robots, buy robots",
    metaDesc: "Best robots and cheap rates available",
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="flex-grow">
        <HeroHomePage />
        <Products />
      </div>
    </Layout>
  );
};

export default Home;
