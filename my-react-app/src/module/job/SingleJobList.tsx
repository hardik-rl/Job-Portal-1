import JobModel from "./JobModel";

interface SingleJobProps {
  id: string;
  img: string;
  title: string;
  location: string;
  companyName: string;
  description:string;
}

const SingleJobList = ({ id, img, title, location, companyName, description }: SingleJobProps) => {
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
          <p>
            {description}
          </p>
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
        <JobModel />
      </div>
    </div>
  );
};

export default SingleJobList;
