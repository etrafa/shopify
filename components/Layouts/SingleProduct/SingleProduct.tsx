import { IProduct } from "../../../interfaces/ProductInterface";
import SingleProductHeader from "./SingleProductHeader";
import SingleProductPreviews from "./SingleProductPreviews";
import SingleProductSize from "./SingleProductSize";

const SingleProduct = (props: IProduct) => {
  return (
    <div>
      <SingleProductPreviews
        backLarge={props.backLarge}
        backSmall={props.backSmall}
        frontLarge={props.frontLarge}
        frontSmall={props.frontSmall}
        tshirtName={props.tshirtName}
      />
      <SingleProductHeader tshirtName={props.tshirtName} price={props.price} />
      <SingleProductSize />
    </div>
  );
};
export default SingleProduct;
