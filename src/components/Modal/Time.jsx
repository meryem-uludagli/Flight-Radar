import t from "../../utils/fotmatDate";
import c from "../../utils/nullCheck";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>SCHEDULE</span>
        <span>{c(t(data.scheduled?.departure))}</span>
      </div>

      <div>
        <span>SCHEDULE</span>
        <span>{c(t(data.scheduled?.arrival))}</span>
      </div>

      <div>
        <span>ACTUAL</span>
        <span>{c(t(data.real?.departure))}</span>
      </div>

      <div>
        <span>ESTIMATED</span>
        <span>{c(t(data.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
