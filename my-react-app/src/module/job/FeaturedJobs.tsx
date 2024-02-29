import SingleJobList from "./SingleJobList";
import ReactPaginate from "react-paginate";
import { JobData } from "./type";

type FeaturedJobsProps = {
  setApplyNowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setApplyJobData: React.Dispatch<React.SetStateAction<{
    job_id: string;
    category_id: string;
  }>>;
  jobsData: any;
  jobsDataIsLoading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;

}

const FeaturedJobs = ({ setApplyNowModal, setApplyJobData, jobsData, jobsDataIsLoading, setPage }: FeaturedJobsProps) => {

  if (jobsDataIsLoading) {
    return <h1>Loading</h1>;
  }

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
            {jobsData?.jobs?.length > 0 && !jobsDataIsLoading && (
              <>
                {jobsData?.jobs?.map((job: JobData, index: number) => (
                  <span key={index}>
                    <SingleJobList
                      setApplyNowModal={setApplyNowModal}
                      id={job?._id}
                      title={job?.category_id?.name}
                      categoryId={job?.category_id?._id}
                      description={job?.description}
                      location={job?.job_location_id?.name}
                      companyName={job?.company_name}
                      setApplyJobData={setApplyJobData}
                    />
                  </span>
                ))}
              </>
            )}
          </div>
        </div>
        <ReactPaginate
          className="custom-pagination "
          activeClassName="paginate-active"
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(event) => setPage(event.selected + 1)}
          pageRangeDisplayed={5}
          pageCount={jobsData.totalPages}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default FeaturedJobs;
