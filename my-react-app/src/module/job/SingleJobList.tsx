import { useState } from "react";
import ApplicationModel from "./ApplicationModel";

interface SingleJobProps {
  id: string;
  img: string;
  title: string;
  location: string;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  companyName: string;
  description: string;
}

const SingleJobList = ({
  id,
  img,
  title,
  location,
  companyName,
  description,
}: SingleJobProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="single-job-items mb-30">
      <div className="job-items">
        <div className="company-img">
          <a href={`/job-details/${id}`}>
            <img src={img} alt="" />
          </a>
        </div>
        <div className="job-tittle">
          <a href={`/job-details/${id}`}>
            <h4>{title}</h4>
          </a>
          <p>{description}</p>
          <ul>
            <li>{companyName}</li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {location}
            </li>
          </ul>
        </div>
      </div>
      <div className="items-link f-right">
        <a href={`/job-details/${id}`}>Explore</a>
        <button type="button" onClick={() => setShowModal(true)}>
          Apply Now
        </button>
        <ApplicationModel showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default SingleJobList;
