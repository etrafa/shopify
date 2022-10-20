import Head from "next/head";
import { useEffect } from "react";
import { IProduct } from "../../../interfaces/ProductInterface";
import { setDefaultValue } from "../../../src/features/cartSlicer";
import { useAppDispatch, useAppSelector } from "../../../src/store";
import AddItemToCartModal from "./AddItemToCartModal";
import SingleProductButton from "./SingleProductButton";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductHeader from "./SingleProductHeader";
import SingleProductPreviews from "./SingleProductPreviews";
import SingleProductQuantity from "./SingleProductQuantity";
import SingleProductSize from "./SingleProductSize";

const SingleProduct = (props: IProduct) => {
  const { value } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setDefaultValue());
    };
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>
          {props.tshirtName
            ?.split(" ")
            ?.map(
              (char) =>
                char.substring(0, 1).toUpperCase() +
                char.substring(1).toLowerCase()
            )
            .join(" ")}
          - EL FOOTBALL STORE
        </title>
        <meta property="og:title" content={props.tshirtName} key="title" />
      </Head>
      <div className="md:flex md:justify-center">
        <SingleProductPreviews
          backLarge={props.backLarge}
          backSmall={props.backSmall}
          frontLarge={props.frontLarge}
          frontSmall={props.frontSmall}
          tshirtName={props.tshirtName}
        />
        <div className="md:mt-16 lg:mx-12 max-w-sm">
          <SingleProductHeader
            tshirtName={props.tshirtName}
            price={props.price}
          />
          <SingleProductSize />
          <SingleProductQuantity amount={value.amount} />
          <SingleProductButton
            id={props.id}
            tshirtName={props.tshirtName}
            leauge={props.leauge}
            price={props.price}
            frontLarge={props.frontLarge}
            amount={value.amount}
            size={value.size}
          />
          <SingleProductDetails description={props.description} />
        </div>
      </div>

      <AddItemToCartModal
        frontLarge={props.frontLarge}
        size={value.size}
        tshirtName={props.tshirtName}
      />
    </div>
  );
};
export default SingleProduct;
