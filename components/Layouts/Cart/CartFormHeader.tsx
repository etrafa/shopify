const CartFormHeader = () => {
  return (
    <>
      <div className="flex justify-between">
        <label className="w-4/12 text-left pl-4 text-[10px] opacity-50 tracking-widest uppercase">
          Product
        </label>
        <label className="w-8/12"></label>
        <label className="w-2/12 hidden md:block md:text-center text-[10px] opacity-50 tracking-widest uppercase">
          Quantity
        </label>
        <label className="w-4/12 text-right pr-4 text-[10px] opacity-50 tracking-widest uppercase">
          Total
        </label>
      </div>
      <hr className="mt-1 w-11/12 mx-auto md:w-full" />
    </>
  );
};
export default CartFormHeader;
