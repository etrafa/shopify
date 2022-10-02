import {
  doc,
  DocumentData,
  getDoc,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firabaseConfig";
import { IProduct } from "../../interfaces/ProductInterface";
import StoreLayout from "../StoreLayout/StoreLayout";

const BestSellers = () => {
  const [bestSellerItems, setBestSellerItems] = useState<IProduct[] | null>(
    null
  );

  useEffect(() => {
    const bestSellerProductsQuery = [
      "/la-liga/359s2n7F762786",
      "/la-liga/5A129G766300rx",
      "/ligue-one/704DNePMkX683H",
      "/premier-leauge/2m6x15UP89WA47",
      "/premier-leauge/77178208357f97",
      "/premier-leauge/no8436588a4052",
      "/seriea-leauge/5QX430D5MC665L",
      "/premier-leauge/VBF477q93lAzPZ",
      "/seriea-leauge/0u6870i0223427",
    ];

    let bestSellerData: IProduct[] = [];

    const getBestSellerItems = async () => {
      bestSellerProductsQuery.forEach(async (qu) => {
        const docRef = doc(db, qu);
        const res: DocumentData = await getDoc(docRef);
        bestSellerData.push({ ...res.data(), id: res.id });
        setBestSellerItems(bestSellerData);
      });
    };

    getBestSellerItems();
  }, []);

  return (
    <div>
      <h2>Hot Sales</h2>
      <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
        {bestSellerItems &&
          bestSellerItems?.map((item) => (
            <StoreLayout
              key={item.id}
              backLarge={item.backLarge}
              backSmall={item.backSmall}
              description={item.description}
              frontLarge={item.frontLarge}
              frontSmall={item.frontSmall}
              isBestSeller={item.isBestSeller}
              leauge={item.leauge}
              isStock={item.isStock}
              price={item.price}
              tshirtName={item.tshirtName}
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
};
export default BestSellers;
