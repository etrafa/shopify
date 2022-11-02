import Image from "next/image";
import { useEffect, useState } from "react";
import { IOrderHistory } from "../../interfaces/IOrderHistory";
import { ArrowDownIcon, ArrowUpIcon } from "../../Utilities/Icons/Icons";

type AllOrderHistoryProps = IOrderHistory;

const AllOrderHistory = (props: AllOrderHistoryProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const newDate = new Date(props?.createdAt?.seconds * 1000)
    ?.toDateString()
    ?.slice(3);

  let total = 0;
  if (props) {
    props.cartItems.map((item) => (total += item.amount * item.price));
  }

  if (!props) {
    return (
      <h2 className="flex items-center justify-center font-bold text-2xl">
        No order yet...
      </h2>
    );
  }

  if (props) {
    return (
      <div className="w-11/12 max-w-screen-lg border mx-auto rounded-md my-6 shadow-sm">
        <div className="flex justify-center lg:justify-between items-center px-2 md:px-4 h-20 my-4">
          <section className="w-32 hidden md:block">
            {props.cartItems.map((item) => (
              <span
                className="inline-block h-full border rounded-full"
                key={item.id}
              >
                <Image
                  src={item.frontLarge}
                  alt="item preview"
                  width={20}
                  height={20}
                />
              </span>
            ))}
          </section>

          <section className="flex flex-col gap-y-2">
            <div>
              <small className="text-xs">Order no</small>
              <b className="pl-2 text-sm tracking-wide opacity-90">
                {props.id?.slice(0, 9)}
              </b>
            </div>
            <div>
              <b className="pl1 opacity-40 text-sm tracking-wide">{newDate}</b>
            </div>
          </section>

          <section className="lg:ml-20">
            <span>✅</span>
            <span className="pl-2 opacity-40 text-md tracking-wide">
              Order completed
            </span>
          </section>

          <section className="lg:ml-auto">
            {props.boughtCurrency === "USD" && (
              <p className="font-bold opacity-90 py-2">${total}</p>
            )}
            {props.boughtCurrency === "CAD" && (
              <p className="font-bold opacity-90 py-2">${total * 1.38} CAD</p>
            )}
            {props.boughtCurrency === "EUR" && (
              <p className="font-bold opacity-90 py-2">{total * 1.04} €</p>
            )}
            <p className="text-sm opacity-40 tracking-wide">Cash on deliver</p>
          </section>
          <section className="w-8 h-8 bg-[#F0F0F0] rounded-full p-[4px] cursor-pointer">
            {isDropdownOpen ? (
              <ArrowUpIcon clickHandler={() => setIsDropdownOpen(false)} />
            ) : (
              <ArrowDownIcon clickHandler={() => setIsDropdownOpen(true)} />
            )}
          </section>
        </div>
        {isDropdownOpen && (
          <div className="w-full border-black my-12">
            <section className="overflow-x-auto">
              <h1 className="font-bold text-lg text-button-text px-8 my-4">
                Order Details
              </h1>
              {props?.cartItems.map((item) => (
                <div className="flex items-center" key={item.id}>
                  <span className="text-sm px-4 py-2 font-bold">
                    {item.amount}x
                  </span>
                  <span className="text-sm px-4 py-2">{item.tshirtName}</span>
                  <span className="text-sm px-4 py-2 font-bold">
                    ${item.amount * item.price}
                  </span>
                </div>
              ))}
            </section>
            <section className="flex flex-col md:flex-row w-full gap-x-2 mt-12">
              <article className="w-full md:w-6/12 mt-2">
                <div>
                  <h2 className="font-bold text-lg text-button-text px-8 my-4">
                    Shipping Information
                  </h2>
                  <summary className="list-none py-2 px-8 text-sm text-button-text">
                    {props?.address?.firstName} {props?.address?.lastName}
                  </summary>
                  <summary className="list-none py-2 px-8 text-sm text-button-text">
                    {props?.address?.address} {props?.address?.city}
                  </summary>
                  <summary className="list-none py-2 px-8 text-sm text-button-text">
                    {props?.address?.country}
                  </summary>
                  <summary className="list-none py-2 px-8 text-sm text-button-text">
                    {props?.address?.phone}
                  </summary>
                </div>
                <div className="pt-4">
                  <h2 className="font-bold text-lg text-button-text px-8 my-4">
                    Invoice Information
                  </h2>
                  <summary className="list-none py-2 px-8 text-xs text-button-text">
                    {props?.address?.firstName} {props?.address?.lastName}
                  </summary>
                  <summary className="list-none py-2 px-8 text-xs text-button-text">
                    {props?.address?.address} {props?.address?.city}
                  </summary>
                  <summary className="list-none py-2 px-8 text-xs text-button-text">
                    {props?.address?.country}
                  </summary>
                  <summary className="list-none py-2 px-8 text-xs text-button-text">
                    {props?.address?.phone}
                  </summary>
                </div>
              </article>
              <article className="w-full lg:w-6/12 mt-2">
                <h2 className="font-bold text-lg text-button-text px-8 my-4 text-center lg:text-right">
                  Billing Information
                </h2>
                <div className="flex px-6 gap-x-4 py-4 justify-center lg:justify-end">
                  <p className="px-8 text-xs text-button-text w-24">Subtotal</p>

                  {props.boughtCurrency === "USD" && (
                    <p className="text-button-text opacity-110 font-bold">
                      ${total}
                    </p>
                  )}
                  {props.boughtCurrency === "CAD" && (
                    <p className="text-button-text opacity-110 font-bold">
                      ${(total * 1.38).toFixed(2)} CAD
                    </p>
                  )}
                  {props.boughtCurrency === "EUR" && (
                    <p className="text-button-text opacity-110 font-bold">
                      {(total * 1.04).toFixed(2)} €
                    </p>
                  )}
                </div>
                <div className="flex px-6 gap-x-4 py-4 justify-center lg:justify-end">
                  <p className="px-8 text-xs text-button-text w-24">Discount</p>
                  {props.boughtCurrency === "USD" && (
                    <p className="line-through text-button-text opacity-110 font-bold">
                      ${props.discount || 0}
                    </p>
                  )}
                  {props.boughtCurrency === "CAD" && (
                    <p className="line-through text-button-text opacity-110 font-bold">
                      ${(props.discount * 1.38).toFixed(2) || 0} CAD
                    </p>
                  )}
                  {props.boughtCurrency === "EUR" && (
                    <p className="line-through text-button-text opacity-110 font-bold">
                      {(props.discount * 1.04).toFixed(2) || 0} €
                    </p>
                  )}
                </div>
                <hr />
                <div className="flex px-6 gap-x-4 py-4 justify-center lg:justify-end">
                  <p className="px-8 text-sm text-button-text w-24">Total</p>

                  {props.boughtCurrency === "USD" && (
                    <p className="font-bold">${total - props.discount}</p>
                  )}
                  {props.boughtCurrency === "CAD" && (
                    <p className="font-bold">
                      ${total * 1.38 - props.discount} CAD
                    </p>
                  )}
                  {props.boughtCurrency === "EUR" && (
                    <p className="font-bold">
                      {total * 1.04 - props.discount}€
                    </p>
                  )}
                </div>
              </article>
            </section>
          </div>
        )}
      </div>
    );
  }
};
export default AllOrderHistory;
