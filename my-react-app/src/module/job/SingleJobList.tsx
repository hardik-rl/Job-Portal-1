import ApplicationModel from "./ApplicationModel";
import { SingleJobProps } from "./type";

const SingleJobList = ({
  id,
  title,
  showModal,
  setShowModal,
  location,
  description,
}: SingleJobProps) => {
  return (
    <div className="single-job-items mb-30">
      <div className="job-items">
        <div className="job-tittle">
          <a href={`/job-details/${id}`}>
            <h4>{title}</h4>
          </a>
          <p>{description}</p>
          <ul>
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
