interface SingleJobProps {
  img: string;
  title: string;
  location: string;
}

const SingleJobList = ({ img, title, location }: SingleJobProps) => {
  return (
    <div className="single-job-items mb-30">
      <div className="job-items">
        <div className="company-img">
          <a href="/job-details">
            <img src={img} alt="" />
          </a>
        </div>
        <div className="job-tittle">
          <a href="/job-details">
            <h4>{title}</h4>
          </a>
          <ul>
            <li>Creative Agency</li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              {location}
            </li>
          </ul>
        </div>
      </div>
      <div className="items-link f-right">
        <a href="/job-details">Full Time</a>
        <span>7 hours ago</span>
      </div>
    </div>
  );
};

export default SingleJobList;
