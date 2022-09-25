//react
import { useEffect, useState } from "react";

//firebase
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  onSnapshot,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/firabaseConfig";

//*this function will be used to get data from database server.

export function useGetDocs<T>(colName: string) {
  const [dbData, setDbData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, colName);
      setLoading(true);
      const res = await getDocs(colRef);

      res.forEach((doc) => {
        console.log(doc.data());
      });

      let data: T[] = [];

      if (typeof colName === "string") {
        data = res.docs.map((item: DocumentData) => {
          return {
            ...item.data(),
            id: item.id,
          };
        });
      }

      setDbData(data);
      setLoading(false);
    };

    fetchData();
  }, [colName]);

  return { dbData };
}
