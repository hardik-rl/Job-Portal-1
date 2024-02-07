import JobOverview from "./JobOverview";
import JobPostDetails from "./JobPostDetails";

const JobPost = () => {
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
                <p>
                  It is a long established fact that a reader will beff
                  distracted by vbthe creadable content of a page when looking
                  at its layout. The pointf of using Lorem Ipsum is that it has
                  ahf mcore or-lgess normal distribution of letters, as opposed
                  to using, Content here content here making it look like
                  readable.
                </p>
              </div>
              <div className="post-details2  mb-50">
                <div className="small-section-tittle">
                  <h4>Required Knowledge, Skills, and Abilities</h4>
                </div>
                <ul>
                  <li>System Software Development</li>
                  <li>
                    Mobile Applicationin iOS/Android/Tizen or other platform
                  </li>
                  <li>Research and code , libraries, APIs and frameworks</li>
                  <li>Strong knowledge on software development life cycle</li>
                  <li>Strong problem solving and debugging skills</li>
                </ul>
              </div>
              <div className="post-details2  mb-50">
                <div className="small-section-tittle">
                  <h4>Education + Experience</h4>
                </div>
                <ul>
                  <li>3 or more years of professional design experience</li>
                  <li>Direct response email experience</li>
                  <li>Ecommerce website design experience</li>
                  <li>Familiarity with mobile and web apps preferred</li>
                  <li>Experience using Invision a plus</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <JobOverview />
            <JobPostDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
