import { useGetDocs } from "../../customHooks/useGetDocs";

interface TshirtProps {
  backLarge: string;
  backSmall: string;
  description: string[];
  frontLarge: string;
  frontSmall: string;
  isBestSeller: boolean;
  isStock: boolean;
  leuage: string;
  price: number;
  tshirtName: string;
  uid: string;
  id: string;
}

const LeaugeStore = () => {
  const { dbData } = useGetDocs<TshirtProps>("bundesliga");

  console.log(dbData);

  return (
    <div>
      Leauge Store
      {process.env.NEXT_FIREBASE_API_KEY}
    </div>
  );
};
export default LeaugeStore;
