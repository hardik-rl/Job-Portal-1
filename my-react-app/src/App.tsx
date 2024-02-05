import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Preloader from "./components/Preloader";
import Job from "./module/job/Job";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/price_rangs.css";
import "../assets/css/slicknav.css";
import "../assets/css/animate.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/slick.css";
import "../assets/css/nice-select.css";
import "../assets/css/style.css";
import JobDetails from "./module/job-details/JobDetails";

function App() {
  return (
    <Router>
      <Preloader />
      <Routes>
        <Route path="/" element={<Job />} />
        <Route path="/job-details" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
