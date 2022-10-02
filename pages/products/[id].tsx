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
  return (
    // <div>
    //
    //   </div>
    //
    //
    //
    //   <div>
    //     <p className="text-button-text text-sm mt-8 pl-4">Quantity</p>
    //     <div className="w-4/12 max-w-xs h-10 border flex items-center mx-4 my-2">
    //       <button className="w-3/12 h-10 text-button-text font-bold text-xl">
    //         -
    //       </button>
    //       <input
    //         className="w-6/12 text-center"
    //         type="number"
    //         name="quantity"
    //         min={1}
    //         value={1}
    //       />
    //       <button className="w-3/12 h-10 text-button-text font-bold">+</button>
    //     </div>
    //   </div>
    //   <button className="mt-12 w-11/12 h-12 block mx-auto border rounded-sm bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text">
    //     Add to Cart
    //   </button>

    //   <div>
    //     <h2 className="my-8 text-sm text-button-text font-bold pl-4 tracking-widest">
    //       Product Details
    //     </h2>

    //     <ul className="list-disc  list-inside">
    //       {data.description.map((description) => (
    //         <>
    //           <li key={description} className="text-sm px-4 py-2">
    //             {description}
    //           </li>
    //         </>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <SingleProduct {...data} />
  );
};
export default SingleProductComp;
