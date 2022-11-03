import { IOrderHistory } from "../../../interfaces/IOrderHistory";

const HistoryDetails = (props: IOrderHistory) => {
  const newDate = new Date(props?.createdAt?.seconds * 1000)
    ?.toDateString()
    ?.slice(3);

  return (
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
  );
};
export default HistoryDetails;
