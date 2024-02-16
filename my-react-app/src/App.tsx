import { Route, Routes } from "react-router-dom";

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
import "../assets/css/style.css";
import JobDetails from "./module/job-details/JobDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Login from "../admin/module/auth/Login";
import CreateNewJob from "../admin/module/CreateNewJob";
import AdminLayout from "../admin/AdminLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Routes>
        <Route path="/" element={<Job />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/admin/*" element={<AdminLayout />}>
        <Route index element={<Login />} />
        <Route path="create-new-job" element={<CreateNewJob />} />
      </Route>
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
