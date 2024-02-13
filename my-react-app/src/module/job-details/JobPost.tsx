import { JobDetails } from "../job/type";
import JobOverview from "./JobOverview";
import JobPostDetails from "./JobPostDetails";

const JobPost = ({ jobData }: JobDetails) => {
  return (
    <div className="job-post-company pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-7 col-lg-8">
            <div className="single-job-items mb-50">
              <div className="job-items">
                <div className="company-img company-img-details">
                  <a href="#">
                    <img src="assets/img/icon/job-list1.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>{jobData?.position.name}</h4>
                  </a>
                  <ul>
                    <li>{jobData?.company_id?.name}</li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>{jobData?.job_location_id?.name}
                    </li>
                    <li>{jobData?.position?.salary_range}</li>
                  </ul>
                </div>
              </div>
            </div>
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
                  {jobData?.knowledge_description?.map(
                    (knowledgeData: string, index: number) => (
                      <li key={index}>{knowledgeData}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="post-details2  mb-50">
                <div className="small-section-tittle">
                  <h4>Education + Experience</h4>
                </div>
                <ul>
                  {jobData?.education_description?.map(
                    (educationData: string, index: number) => (
                      <li key={index}>{educationData}</li>
                    )
                  )}
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
