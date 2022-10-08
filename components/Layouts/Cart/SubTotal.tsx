const SubTotal = () => {
  return (
    <div>
      <div className="w-full max-w-5xl mt-12 mb-12 md:mb-24 text-center md:mx-auto md:text-right md:px-4 md:relative">
        <h3 className="inline opacity-70 text-sm tracking-wider font-bold">
          Subtotal
        </h3>
        <p className="inline tracking-widest pl-6 opacity-95">$940.00 USD</p>
        <button
          type="submit"
          className="border w-80 mx-auto mt-8 block md:absolute md:right-4 md:text-center h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text opacity-90 rounded-md font-bold"
        >
          Checkout
        </button>
      </div>
      {/* <div className="w-full max-w-md md:ml-auto bg-red-200 "> */}.
      {/* <button
          type="submit"
          className="border w-full  block mx-auto h-12 bg-light-gray text-sm tracking-widest hover:scale-105 ease-in-out text-button-text opacity-90 rounded-md font-bold"
        >
          Checkout
        </button> */}
      {/* </div> */}
      {/* <div className="w-full max-w-5xl  text-center md:mx-auto md:text-right md:px-4 bg-red-200">
        <button className="border">Create</button>
      </div> */}
    </div>
  );
};
export default SubTotal;
