import { Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import Job from "./module/job/Job";

import JobDetails from "./module/job-details/JobDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../admin/module/auth/Login";
import AdminLayout from "../admin/AdminLayout";
import JobCategoryList from "../admin/module/job/candidates/JobCateoryList";
import JobList from "../admin/module/job/job-list";
import JobCategoryUserApplication from "../admin/module/job/candidates/JobCategoryUserApplication";
import JobListView from "../admin/module/job/job-list/View";
import withAuthenticationRequired from "./shared/utils/withAuthenticationRequired";
import withoutAuthenticationRequired from "./shared/utils/withoutAuthenticationRequired";
import NotFound from "./shared/components/NotFound";
import CreateNewJob from "../admin/module/job/job-list/CreateNewJob";
import JobCategoryUser from "../admin/module/job/candidates/JobCategoryUser";
import ClientSideLayout from "./module/ClientSideLayout";

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
        <Route path="/" element={<ClientSideLayout />}>
          <Route path="/" element={<Job />} />
          <Route path="job-details/:id" element={<JobDetails />} />
        </Route>
        <Route
          path="admin/login"
          element={withoutAuthenticationRequired(Login)}
        />
        <Route path="admin/*" element={withAuthenticationRequired(AdminLayout)}>
          <Route path="job-category-list" element={<JobCategoryList />} />
          <Route
            path="job-category-user/:categoryId"
            element={<JobCategoryUser />}
          />
          <Route
            path="job-category-user-application/:categoryId"
            element={<JobCategoryUserApplication />}
          />

          <Route path="create-new-job" element={<CreateNewJob />} />

          <Route path="job-list" element={<JobList />} />
          <Route path="job-list/view/33" element={<JobListView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
