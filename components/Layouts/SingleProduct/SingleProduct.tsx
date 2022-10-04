import { IProduct } from "../../../interfaces/ProductInterface";
import { useAppSelector } from "../../../src/store";
import SingleProductButton from "./SingleProductButton";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductHeader from "./SingleProductHeader";
import SingleProductPreviews from "./SingleProductPreviews";
import SingleProductQuantity from "./SingleProductQuantity";
import SingleProductSize from "./SingleProductSize";

const SingleProduct = (props: IProduct) => {
  const { value } = useAppSelector((store) => store.cart);

  return (
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
        <SingleProductQuantity />
        <SingleProductButton
          id={props.id}
          tshirtName={props.tshirtName}
          leauge={props.leauge}
          price={props.price}
          frontSmall={props.frontSmall}
          amount={value.amount}
          size={value.size}
        />
        <SingleProductDetails description={props.description} />
      </div>
    </div>
  );
};
export default SingleProduct;
