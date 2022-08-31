import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import CreateRestaurantPopup from "./components/CreateRestaurantPopup";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllRestaurant from "./components/AllRestaurant";
import TotalOrder from "./components/TotalOrder";

function App() {
  const checkvalue = useSelector((state) => state.userDetail.users);
  const totalRestaurant = useSelector((state) => state.restaurantDetail.value);
  const totalOrder = useSelector((state) => state.orderList.value);

  console.log(`checkValue`, checkvalue);
  console.log(`totalOrder`, totalOrder);

  let { params } = useParams();
  console.log(`params`, params);

  const [auth, setAuth] = useState({
    admin: false,
    customer: false,
  });

  useEffect(() => {
    setAuth(() => {
      if (checkvalue?.role?.role === "admin") {
        return {
          admin: true,
          customer: false,
        };
      } else if (checkvalue?.role?.role === "customer") {
        return {
          admin: false,
          customer: true,
        };
      } else {
        return {
          admin: false,
          customer: false,
        };
      }
    });
  }, [checkvalue]);

  console.log("auth", auth);

  return (
    <>
      <div className="App">
        <Router>
          <Header
            {...auth}
            totalRestaurant={totalRestaurant}
            totalOrder={totalOrder}
          />
          <Routes>
            <Route exact path="/login" element={<Login />} />

            {auth.admin && (
              <Route exact path="login/admin" element={<AdminDashboard />} />
            )}
            {auth.customer && (
              <Route
                exact
                path="login/customer"
                element={<CustomerDashboard totalRestauran={totalRestaurant} />}
              />
            )}
            <Route exact path="/allRestaurant" element={<AllRestaurant />} />
            <Route
              exact
              path="/createRestaurant"
              element={<CreateRestaurantPopup />}
            />
            <Route exact path="/totalOrder" element={<TotalOrder />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
