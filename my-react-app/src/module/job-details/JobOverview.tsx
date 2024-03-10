import { useState } from "react";
import { JobData } from "../../../admin/shared/types";
import ApplicationModal from "../job/ApplicationModal";

const JobOverview = ({ jobData }: { jobData: JobData }) => {
  const [applyNowModal, setApplyNowModal] = useState(false);

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
      </ul>
      <div className="apply-btn2">
        <button className="btn" onClick={() => setApplyNowModal(true)}>
          Apply Now
        </button>
      </div>
      {applyNowModal && (
        <ApplicationModal setApplyNowModal={setApplyNowModal} applyJobData={{'job_id': jobData._id, 'category_id': jobData.category_id._id}} />
      )}
      
    </div>
  );
};

export default JobOverview;
