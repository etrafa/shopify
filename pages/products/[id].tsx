import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import SingleProduct from "../../components/Layouts/SingleProduct/SingleProduct";
import { db } from "../../firebase/firabaseConfig";
import { IProduct } from "../../interfaces/ProductInterface";

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const docRef = doc(db, "la-liga", "5A129G766300rx");
  const res = await getDoc(docRef);
  const data = { ...res.data(), id: res.id };

  return {
    props: {
      data,
      params,
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
}> = ({ params, data }) => {
  return <SingleProduct {...data} />;
};
export default SingleProductComp;
