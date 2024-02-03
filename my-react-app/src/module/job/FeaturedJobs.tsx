const FeaturedJobs = () => {
  return (
    <section className="featured-job-area feature-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Recent Job</span>
              <h2>Featured Jobs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="job_details.html">
                    <img
                      src="../assets/img/icon/job-list1.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="job_details.html">
                    <h4>Production</h4>
                  </a>
                  <ul>
                    <li>Creative Agency</li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>Mumbai - HO
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-link f-right">
                <a href="job_details.html">Full Time</a>
                <span>7 hours ago</span>
              </div>
            </div>
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="job_details.html">
                    <img src="../../assets/img/icon/job-list2.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="job_details.html">
                    <h4>Human Resources </h4>
                  </a>
                  <ul>
                    <li>Creative Agency</li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>Panoli
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-link f-right">
                <a href="job_details.html">Full Time</a>
                <span>7 hours ago</span>
              </div>
            </div>
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="job_details.html">
                    <img src="../../assets/img/icon/job-list3.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="job_details.html">
                    <h4>Packaging</h4>
                  </a>
                  <ul>
                    <li>Creative Agency</li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>Dahej
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-link f-right">
                <a href="job_details.html">Full Time</a>
                <span>7 hours ago</span>
              </div>
            </div>
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="job_details.html">
                    <img src="../../assets/img/icon/job-list4.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="job_details.html">
                    <h4>Accounts & Finance</h4>
                  </a>
                  <ul>
                    <li>Creative Agency</li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>Ankhleshwar
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-link f-right">
                <a href="job_details.html">Full Time</a>
                <span>7 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
