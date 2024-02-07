import JobModel from "./JobModel";

interface SingleJobProps {
  title: string;
  location: string;
}

const SingleJobList = ({ title, location }: SingleJobProps) => {
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
        <JobModel />
      </div>
    </div>
  );
};

export default SingleJobList;
