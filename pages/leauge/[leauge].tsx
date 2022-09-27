import { collection, DocumentData, getDocs } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
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

const LeaugeStore: NextPage<{ data: IProduct[]; params: ParsedUrlQuery }> = ({
  data,
  params,
}) => {
  console.log(data);

  return <div>Leauge Store</div>;
};
export default LeaugeStore;
