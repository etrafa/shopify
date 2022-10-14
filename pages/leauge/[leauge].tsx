import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  startAfter,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StoreLayout from "../../components/Layouts/StoreLayout/StoreLayout";
import { db } from "../../firebase/firabaseConfig";
import { IProduct } from "../../interfaces/ProductInterface";

const LeaugeStore = () => {
  const params = useRouter();
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      const colRef = collection(db, `${params.query.leauge}`);

      const qu = query(colRef, orderBy("uid"), limit(10));

      const res = await getDocs(qu);

      const data = res.docs.map((product: DocumentData) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      const lastVisible = res.docs[res.docs.length - 1];

      setLastDoc(lastVisible);

      setProducts(data);
    };

    fetchInitialData();
  }, [params.query.leauge]);

  const fetchMoreData = async () => {
    const colRef = collection(db, `${params.query.leauge}`);
    const qu = query(colRef, orderBy("uid"), startAfter(lastDoc), limit(2));

    const res = await getDocs(qu);

    const data = res.docs.map((product: DocumentData) => {
      return {
        ...product.data(),
        id: product.id,
      };
    });
    const lastVisible = res.docs[res.docs.length - 1];
    setProducts((prev) => (prev ? [...prev, ...data] : null));
    setLastDoc(lastVisible);
  };

  return (
    <div>
      <div className="grid grid-cols-2 px-4 mt-12 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 xl:grid-cols-5">
        {products &&
          products.map((tshirt) => {
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
    </div>
  );
};
export default LeaugeStore;
