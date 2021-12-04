import type { NextPage } from "next";
import Layout from "../components/Layout";
import HeroHomePage from "../components/HeroHomepage";
import useCallApi from "../utils/useCallApi";
import Loading from "../components/Loading";
import Products from "../components/Products";

const Home: NextPage = () => {
  const metaInfo = {
    title: "Robots Market - Buy the best robots from here",
    metaKeywords: "best robots, buy robots",
    metaDesc: "Best robots and cheap rates available",
  };

  const productsList = useCallApi("robots");

  return (
    <Layout metaInfo={metaInfo}>
      <div className="flex-grow">
        <HeroHomePage />
        {!productsList.isLoaded ? (
          <Loading />
        ) : (
          <Products products={productsList.data} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
