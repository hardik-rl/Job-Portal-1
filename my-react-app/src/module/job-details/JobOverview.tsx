const JobOverview = ({jobData}: any) => {
  return (
    <div className="post-details3  mb-50">
      <div className="small-section-tittle">
        <h4>Job Overview</h4>
      </div>
      <ul>
        <li>
          Posted date : <span>12 Aug 2019</span>
        </li>
        <li>
          Location : <span>{jobData?.job_location_id?.name}</span>
        </li>
        <li>
          Vacancy : <span>{jobData?.vacancy}</span>
        </li>
        <li>
          Job nature : <span>{jobData?.nature}</span>
        </li>
        <li>
          Salary : <span>${jobData?.annual_salary} yearly</span>
        </li>
        <li>
          Application date : <span>12 Sep 2020</span>
        </li>
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
