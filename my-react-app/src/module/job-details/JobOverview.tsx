import { JobData } from "../../../admin/shared/types";
// import moment from "moment";

const JobOverview = ({ jobData }: {jobData : JobData}) => {
  return (
    <div className="post-details3  mb-50">
      <div className="small-section-tittle">
        <h4>Job Overview</h4>
      </div>
      <ul>
        <li>
          Location : <span>{jobData?.job_location_id?.name}</span>
        </li>
        <li>
          Vacancy : <span>{jobData?.vacancy}</span>
        </li>
        <li>
          Job nature : <span>{jobData?.nature}</span>
        </li>
        {/* <li>
          Salary : <span>${jobData?.annual_salary} yearly</span>
        </li> */}
        {/* <li>
          Application date :{" "}
          <span>{moment(jobData?.created_at).format("DD MMM YYYY")}</span>
        </li> */}
      </ul>
      <div className="apply-btn2">
        <a href="#" className="btn">
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobOverview;
