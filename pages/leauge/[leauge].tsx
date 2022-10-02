import { collection, DocumentData, getDocs } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import StoreLayout from "../../components/Layouts/StoreLayout/StoreLayout";
import { db } from "../../firebase/firabaseConfig";
import { IProduct } from "../../interfaces/ProductInterface";

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const leaugeID = params?.leauge;

  const colRef = collection(db, `${leaugeID}`);

  const res = await getDocs(colRef);

  const data = res.docs.map((item) => {
    return {
      ...item.data(),
      id: item.id,
    };
  });

  return {
    props: {
      data,
      params,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      "/leauge/national-teams",
      "/leauge/premier-leauge",
      "/leauge/bundesliga",
      "/leauge/seriea-leauge",
      "/leauge/la-liga",
      "/leauge/ligue-one",
      "/leauge/other-clubs",
    ],
    fallback: true,
  };
};

const LeaugeStore: NextPage<{ data: IProduct[] }> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
      {data.map((tshirt) => {
        return (
          <StoreLayout
            backLarge={tshirt.backLarge}
            backSmall={tshirt.backLarge}
            description={tshirt.description}
            frontLarge={tshirt.frontLarge}
            frontSmall={tshirt.frontSmall}
            id={tshirt.id}
            isBestSeller={tshirt.isBestSeller}
            isStock={tshirt.isStock}
            leauge={tshirt.leauge}
            price={tshirt.price}
            tshirtName={tshirt.tshirtName}
            key={tshirt.id}
          />
        );
      })}
    </div>
  );
};
export default LeaugeStore;
