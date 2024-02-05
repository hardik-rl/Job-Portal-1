import SingleJobList from "./SingleJobList";

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
            <SingleJobList
              title="Human Resources"
              location="Mumbai - HO"
              img="../assets/img/icon/job-list1.png"
            />
            <SingleJobList
              title="Packaging"
              location="Mumbai - HO"
              img="../../assets/img/icon/job-list2.png"
            />
            <SingleJobList
              title="Accounts & Finance"
              location="Mumbai - HO"
              img="../../assets/img/icon/job-list3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
