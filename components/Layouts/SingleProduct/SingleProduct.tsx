import { IProduct } from "../../../interfaces/ProductInterface";
import SingleProductPreviews from "./SingleProductPreviews";

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
    </div>
  );
};
export default SingleProduct;
