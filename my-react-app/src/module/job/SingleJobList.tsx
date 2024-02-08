import JobModel from "./JobModel";

interface SingleJobProps {
  title: string;
  location: string;
  showModal: string;
  setShowModal: (show: boolean) => void;
}

const SingleJobList = ({
  title,
  location,
  showModal,
  setShowModal,
}: SingleJobProps) => {
  return (
    <div className="single-job-items mb-30">
      <div className="job-items">
        <div className="job-tittle">
          <a href="/job-details">
            <h4>{title}</h4>
          </a>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {location}
            </li>
          </ul>
        </div>
      </div>
      <div className="items-link f-right">
        <a href="/job-details">Explore</a>

        <div className="items-link f-right">
          <button type="button" onClick={() => setShowModal(true)}>
            Apply Now
          </button>
        </div>
        <JobModel showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default SingleJobList;
