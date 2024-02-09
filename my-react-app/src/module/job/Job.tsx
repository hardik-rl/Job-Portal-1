import { useState } from "react";
import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import HowItWorks from "./HowItWorks";
import OnlineResume from "./OnlineResume";

const Job = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Banner />
      <FeaturedJobs setShowModal={setShowModal} showModal={showModal}/>
      <OnlineResume setShowModal={setShowModal} showModal={showModal}/>
      <HowItWorks />
    </>
  );
};

export default Job;
