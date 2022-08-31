import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hotelImg from "../img/food_visual_03.jpg";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../Redux/OrderSlice";
import ToastNotification from "./ToastNoatification";
import { toast } from "react-toastify";

const CustomerDashboard = ({ totalRestauran }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [totalRes, setTotalRes] = useState(totalRestauran);
  const [toFilter, setToFilter] = useState({
    rangeValue: [],
    selectedRestaurant: "",
  });
  console.log(`toFilter`, toFilter);
  const totalRestaurant = useSelector((state) => state.restaurantDetail.value);
  console.log(`totalRestaurant`, totalRestaurant);

  useEffect(() => {
    if (
      totalRestaurant &&
      toFilter.rangeValue.length > 0 &&
      toFilter.selectedRestaurant
    ) {
      console.log(`inside if`);
      setTotalRes(
        totalRestaurant.filter(
          (item) =>
            item.price <= toFilter.rangeValue[1] &&
            item.price >= toFilter.rangeValue[0] &&
            item.Restaurant === toFilter.selectedRestaurant
        )
      );
    }
  }, [toFilter]);

  const dispatch = useDispatch();

  const handleOrder = (e, item) => {
    console.log(`inside handleOrder`, item);
    dispatch(placeOrder(item));
    toast.success("Hurray!  Your order has been placed");
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          {totalRes.length > 0 && (
            <h3 className="my-5">All RESTAURANTS ACCEPTING ORDER!</h3>
          )}
          {totalRes && totalRes.length > 0 ? (
            totalRes?.map((item) => {
              return (
                <>
                  <div className="col-sm-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={hotelImg}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          style={{ textDecoration: "none" }}
                        >
                          {item.Restaurant}
                        </h5>
                        <p className="card-title">{item.foodType}</p>
                        <p className="card-title">{item.food}</p>
                        <p className="card-text">{item.price}</p>
                        <button
                          onClick={(e) => handleOrder(e, item)}
                          className="btn btn-dark"
                        >
                          Create Order!
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <h1>Oops... Sorry, We can't Find any Restaurant of your match!</h1>
          )}
        </div>
        <div className="row">
          <h5 className="text-center text-muted mt-5">
            {totalRes.length > 0
              ? "Not Able to Choose? Try out this"
              : "Wanna Try Again?"}
            <a
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => setModalOpen(true)}
            >
              {totalRes.length > 0 ? " Filter " : " Click "}
            </a>{" "}
            Now.
          </h5>
          {modalOpen && (
            <Modal
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
              setToFilter={setToFilter}
              totalRes={totalRes}
            />
          )}
        </div>
      </div>
      <ToastNotification />
    </>
  );
};

export default CustomerDashboard;
