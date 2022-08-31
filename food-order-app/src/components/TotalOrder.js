import "../Style/restaurant.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AllRestaurant = () => {
  const [isLoaded, setLoaded] = useState(true);

  const orderList = useSelector((state) => state.orderList.value);
  console.log(`orderList`, orderList);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => {
        setLoaded(false);
      }, 3000);
    }
  }, []);

  return (
    <>
      {isLoaded ? (
        <h1 className="d-flex mt-5" style={{ justifyContent: "center" }}>
          Please Wait Loading......
        </h1>
      ) : (
        <div className="container">
          <div className="d-flex" style={{ justifyContent: "center" }}>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Restaurant Name</th>
                  <th>Food Type</th>
                  <th>Dish</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orderList?.map((order, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{order.Restaurant}</td>
                      <td>{order.foodType}</td>
                      <td>{order.food}</td>
                      <td>{order.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
export default AllRestaurant;
