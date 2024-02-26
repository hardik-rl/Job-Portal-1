import { JobData } from "../../../admin/shared/types";

type JobPostDetailsProps = {
  jobData: JobData;
}

const JobPostDetails = ({ jobData }: JobPostDetailsProps) => {
  return (
    <div className="post-details4  mb-50">
      <div className="small-section-tittle">
        <h4>Company Information</h4>
      </div>
      <span>{jobData?.company_name}</span>
      <p>{jobData?.company_description}</p>
      <ul>
        <li>
          Name: <span>{jobData?.company_name} </span>
        </li>
        <li>
          Web : <span> {jobData?.company_website}</span>
        </li>
        <li>
          Email: <span>{jobData?.company_email}</span>
        </li>
      </ul>
    </div>
  );
};

export default JobPostDetails;
