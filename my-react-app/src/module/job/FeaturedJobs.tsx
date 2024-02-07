import Pagination from "./Pagination";
import SingleJobList from "./SingleJobList";

const FeaturedJobs = () => {
  return (
    <section className="featured-job-area feature-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <h2>Recent Openings</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <SingleJobList title="Human Resources" location="Mumbai - HO" />
            <SingleJobList title="Packaging" location="Mumbai - HO" />
            <SingleJobList title="Accounts & Finance" location="Mumbai - HO" />
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default FeaturedJobs;
