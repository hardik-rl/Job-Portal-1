import { JobDetails } from "../job/type";

const JobPostDetails = ({ jobData }: JobDetails) => {
  return (
    <div className="post-details4  mb-50">
      <div className="small-section-tittle">
        <h4>Company Information</h4>
      </div>
      <span>{jobData?.company_id?.name}</span>
      <p>{jobData?.company_id?.description}</p>
      <ul>
        <li>
          Name: <span>{jobData?.company_id?.name} </span>
        </li>
        <li>
          Web : <span> {jobData?.company_id?.website}</span>
        </li>
        <li>
          Email: <span>{jobData?.company_id?.email_id}</span>
        </li>
      </ul>
    </div>
  );
};

export default JobPostDetails;
