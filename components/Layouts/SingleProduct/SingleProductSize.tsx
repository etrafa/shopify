const SingleProductSize = () => {
  return (
    <div>
      <p className="text-button-text text-sm mt-8 pl-4">Size</p>
      <ul className="flex gap-x-4 p-4">
        <li className="h-7 w-7 border text-center">
          <label className="text-sm">
            S
            <input type="radio" value="S" className="hidden" />
          </label>
        </li>
        <li className="h-7 w-7 border text-center">
          <label className="text-sm">
            M
            <input type="radio" value="M" className="hidden" />
          </label>
        </li>
        <li className="h-7 w-7 border text-center">
          <label className="text-sm">
            L
            <input type="radio" value="L" className="hidden" />
          </label>
        </li>
        <li className="h-7 w-7 border text-center">
          <label className="text-sm">
            XL
            <input type="radio" value="XL" className="hidden" />
          </label>
        </li>
      </ul>
    </div>
  );
};
export default SingleProductSize;
