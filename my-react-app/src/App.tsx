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
import "react-toastify/dist/ReactToastify.css";
import Login from "../admin/module/auth/Login";
import AdminLayout from "../admin/AdminLayout";
import CandidatesList from "../admin/module/job/candidates";
import JobList from "../admin/module/job/job-list";
import Details from "../admin/module/job/candidates/Details";
import View from "../admin/module/job/candidates/View";
import JobListView from "../admin/module/job/job-list/View";

import withAuthenticationRequired from "./shared/utils/withAuthenticationRequired";
import withoutAuthenticationRequired from "./shared/utils/withoutAuthenticationRequired";
import NotFound from "./shared/components/NotFound";
import CreateJob from "../admin/module/job/job-list/Create";

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
        <Route path="job-details/:id" element={<JobDetails />} />
        <Route
          path="admin/login"
          element={withoutAuthenticationRequired(Login)}
        />
        <Route path="admin/*" element={withAuthenticationRequired(AdminLayout)}>
          <Route path="candidates-list" element={<CandidatesList />} />
          <Route path="job-list" element={<JobList />} />
          <Route path="job-list/view/33" element={<JobListView />} />
          <Route path="create-job" element={<CreateJob />} />
          <Route path="details/:categoryId" element={<Details />} />
          <Route path="view/:viewId" element={<View />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
