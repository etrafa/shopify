interface SingleProductHeaderProps {
  tshirtName: string;
  price: number;
}

const SingleProductHeader = ({
  tshirtName,
  price,
}: SingleProductHeaderProps) => {
  return (
    <div>
      <header>
        <h1 className="text-border text-center mt-8 font-bold">{tshirtName}</h1>{" "}
      </header>
      <p className="italic mt-4 px-5 font-semibold text-button-text tracking-widest">
        ${price.toFixed(2)}
      </p>
    </div>
  );
};
export default SingleProductHeader;
