const SingleProductQuantity = () => {
  return (
    <div>
      <p className="text-button-text text-sm mt-8 pl-4">Quantity</p>
      <div className="w-4/12 max-w-xs h-10 border flex items-center mx-4 my-2">
        <button className="w-3/12 h-10 text-button-text font-bold text-xl">
          -
        </button>
        <input
          className="w-6/12 text-center"
          type="number"
          name="quantity"
          min={1}
          value={1}
        />
        <button className="w-3/12 h-10 text-button-text font-bold">+</button>
      </div>
    </div>
  );
};
export default SingleProductQuantity;
