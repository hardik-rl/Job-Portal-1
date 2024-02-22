import axios from "axios";
import SingleJobList from "./SingleJobList";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { JobData, ModalProps } from "./type";

const FeaturedJobs = ({ setShowModal, setApplyJobData }: ModalProps) => {
  const [page, setPage] = useState(1);

  const fetchJobs = async (page: number) => {
    const response = await axios.get(`http://localhost:3000/jobs?page=${page}`);
    return response.data;
  };

  const { data: jobsData, isLoading: isLoadingJobsData } = useQuery({
    queryKey: ["all-job-data", page],
    queryFn: () => fetchJobs(page),
    select: (res) => {
      return res.jobs;
    }
  });

  useEffect(() => {
    if (!jobsData) return;
  }, [jobsData]);

  if (isLoadingJobsData) {
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
            {jobsData?.length > 0 && !isLoadingJobsData && (
              <>
                {jobsData?.map((job: JobData, index: number) => (
                  <span key={index}>
                    <SingleJobList
                      setShowModal={setShowModal}
                      id={job?._id}
                      title={job?.category_id?.name}
                      categoryId={job?.category_id?._id}
                      description={job?.description}
                      location={job?.job_location_id?.name}
                      companyName={job?.company_id?.name}
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
