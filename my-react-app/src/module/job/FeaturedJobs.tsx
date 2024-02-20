import axios from "axios";
import SingleJobList from "./SingleJobList";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { JobData, ModalProps } from "./type";

const FeaturedJobs = ({ setShowModal, showModal }: ModalProps) => {
  const [page, setPage] = useState(1);

  const fetchJobs = async (page: number) => {
    const response = await axios.get(`http://localhost:3000/jobs?page=${page}`);
    return response.data;
  };

  const { data: jobsData, isLoading: isLoadingJobsData } = useQuery({
    queryKey: ["jobData", page],
    queryFn: () => fetchJobs(page),
  });

  useEffect(() => {
    if (!jobsData) return;

    console.log(jobsData);
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
            {jobsData?.jobs.length > 0 && !isLoadingJobsData && (
              <>
                {jobsData?.jobs.map((data: JobData, index: number) => (
                  <span key={index}>
                    <SingleJobList
                      setShowModal={setShowModal}
                      showModal={showModal}
                      id={data?._id}
                      title={data?.category_id?.name}
                      description={data?.description}
                      location={data?.job_location_id?.name}
                      companyName={data?.company_id?.name}
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
          // pageCount={jobsData.totalPages}
          pageCount={6}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default FeaturedJobs;
