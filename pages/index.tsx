import BestSellers from "../components/BestSellers/BestSellers";
import CurrencyWarningMessage from "../components/CurrencyWarning/CurrencyWarningMessage";
import Banner from "../components/HomeBanner/Banner";

const Home = () => {
  return (
    <>
      <CurrencyWarningMessage />
      <Banner />
      <BestSellers />
    </>
  );
};

export default Home;
