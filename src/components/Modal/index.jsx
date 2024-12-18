import { useEffect } from "react";
import { getDetails } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Head from "./Head";
import Gallery from "./Gallery";
import Airport from "./Airport";
import Time from "./Time";
import Aircraft from "./Aircraft";

const Modal = ({ id, close }) => {
  const { isLoading, error, info } = useSelector((store) => store.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [id]);
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        {isLoading
          ? "Loader"
          : error
          ? "Error"
          : info && (
              <div className="info-wrapper">
                <Head info={info} close={close} />
                <div className="details">
                  <Gallery data={info.aircraft.images} />
                  <Airport data={info.airport} />
                  <Time data={info.time} />
                  <Aircraft data={info.aircraft} />
                </div>
              </div>
            )}
      </div>
    </div>
  );
};

export default Modal;
