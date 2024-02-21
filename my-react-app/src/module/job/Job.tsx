import { useState } from "react";
import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import HowItWorks from "./HowItWorks";
import OnlineResume from "./OnlineResume";
import ApplicationModel from "./ApplicationModel";

const Job = () => {
  const [showModal, setShowModal] = useState(false);
  const [applyJobData, setApplyJobData] = useState({job_id:"", category_id: ""});

  return (
    <>
      <Banner />
      <FeaturedJobs setShowModal={setShowModal} setApplyJobData={setApplyJobData}/>
      <OnlineResume setShowModal={setShowModal} />
      <HowItWorks />
      {showModal && (
        <ApplicationModel setShowModal={setShowModal} applyJobData={applyJobData}/>

      )}
    </>
  );
};

export default Job;
