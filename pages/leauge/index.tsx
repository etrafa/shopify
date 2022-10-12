import { collection, DocumentData, getDocs } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import { useGetDocs } from "../../customHooks/useGetDocs";
import { db } from "../../firebase/firabaseConfig";
import { IProduct } from "../../interfaces/ProductInterface";

export const getStaticProps: GetStaticProps = async () => {
  const colRef = collection(db, "bundesliga");
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
    },
  };
};

const Store: NextPage<{ data: IProduct[] }> = ({ data }) => {
  return <div></div>;
};
export default Store;
