interface SingleProductDetailsProps {
  description: string[];
}

const SingleProductDetails = ({ description }: SingleProductDetailsProps) => {
  return (
    <div>
      <h2 className="my-8 text-sm text-button-text font-bold pl-4 tracking-widest">
        Product Details
      </h2>

      <ul className="list-disc  list-inside">
        {description &&
          description.map((description) => (
            <>
              <li key={description} className="text-sm px-4 py-2">
                {description}
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};
export default SingleProductDetails;
