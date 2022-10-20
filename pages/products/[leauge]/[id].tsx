import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { ParsedUrlQuery } from "querystring";
import SingleProduct from "../../../components/Layouts/SingleProduct/SingleProduct";
import { db } from "../../../firebase/firabaseConfig";
import { IProduct } from "../../../interfaces/ProductInterface";

interface ParamsProps {
  leauge: string;
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const QUERY_COL_REF = params?.leauge;
  const QUERY_DOC_REF = params?.id;

  const docRef = doc(db, `${QUERY_COL_REF}/${QUERY_DOC_REF}`);
  const res = await getDoc(docRef);
  const data = { ...res.data(), id: res.id };

  return {
    props: {
      data,
      params,
      QUERY_COL_REF,
      QUERY_DOC_REF,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let pathID: string[] = [];
  const firebaseRef = [
    "bundesliga",
    "la-liga",
    "ligue-one",
    "national-teams",
    "other-clubs",
    "premier-leauge",
    "seriea-leauge",
  ];

  firebaseRef.forEach(async (query) => {
    const colRef = collection(db, query);
    const res = await getDocs(colRef);
    pathID.push(...res.docs.map((item) => item.id));
  });

  return {
    paths: pathID,
    fallback: true,
  };
};

const SingleProductComp: NextPage<{
  params: ParsedUrlQuery;
  data: IProduct;
  QUERY_COL_REF: string;
  QUERY_DOC_REF: string;
}> = ({ params, data, QUERY_COL_REF, QUERY_DOC_REF }) => {
  return <SingleProduct {...data} />;
};
export default SingleProductComp;
