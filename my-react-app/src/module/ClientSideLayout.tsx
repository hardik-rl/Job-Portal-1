import "../../assets/css/bootstrap.min.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/price_rangs.css";
import "../../assets/css/slicknav.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/fontawesome-all.min.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import { Outlet } from "react-router-dom";

const ClientSideLayout = () => {
  return (
    <>
       <Outlet />
    </>
  )
}

export default ClientSideLayout