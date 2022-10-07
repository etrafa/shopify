import { collection, DocumentData, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CartFormBody from "../../components/Layouts/Cart/CartFormBody";
import CartFormHeader from "../../components/Layouts/Cart/CartFormHeader";
import CartHeader from "../../components/Layouts/Cart/CartHeader";
import { db, useAuth } from "../../firebase/firabaseConfig";
import { ISingleProductForCart } from "../../interfaces/SingleProductForCart";

const Cart = () => {
  const currentUser = useAuth();
  const [userCartItems, setUserCartItems] = useState<
    ISingleProductForCart[] | null
  >(null);

  useEffect(() => {
    const getUserCartItems = async () => {
      const cartRef = collection(db, "users", `${currentUser?.uid}`, "cart");
      const res = await getDocs(cartRef);
      const data = res.docs.map((product: DocumentData) => {
        return { ...product.data(), id: product.id };
      });

      setUserCartItems(data);
    };

    getUserCartItems();
  }, [currentUser?.uid]);

  return (
    <div className="w-full mt-14 min-h-[50vh]">
      <CartHeader />
      <form className="mt-12 max-w-screen-lg md:mx-auto">
        <CartFormHeader />
        {userCartItems &&
          userCartItems.map((item) => {
            return <CartFormBody key={item.id} {...item} />;
          })}
      </form>
    </div>
  );
};
export default Cart;
