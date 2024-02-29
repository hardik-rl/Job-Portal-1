import { JobData } from "../../../admin/shared/types";
import JobOverview from "./JobOverview";
import JobPostDetails from "./JobPostDetails";

type JobPostProps = {
  jobData: JobData
  
}
const JobPost = ({ jobData }: JobPostProps) => {
  return (
    <div className="job-post-company pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="job-post-details">
              <div className="post-details1 mb-50">
                <div className="small-section-tittle">
                  <h4>Job Description</h4>
                </div>
                <p>{jobData?.description}</p>
              </div>
              <div className="post-details2  mb-50">
                <div className="small-section-tittle">
                  <h4>Required Knowledge, Skills, and Abilities</h4>
                </div>
                <ul>
                <li>{jobData?.knowledge_description}</li>
                </ul>
              </div>
              <div className="post-details2  mb-50">
                <div className="small-section-tittle">
                  <h4>Education + Experience</h4>
                </div>
                <ul>
                  <li>{jobData?.education_description}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <JobOverview jobData={jobData} />
            <JobPostDetails jobData={jobData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
