import Pagination from "./Pagination";
import axios from "axios";
import SingleJobList from "./SingleJobList";
import { useQuery } from "@tanstack/react-query";

const FeaturedJobs = () => {

  const fetchJobs = async () => {
    const response = await axios.get('http://localhost:3000/jobs');
    return response.data;
  };

  const { data: jobsData, isLoading: isLoadingJobsData } = useQuery({
    queryKey: ['jobData'],
    queryFn: () => fetchJobs(),
  })


  if(isLoadingJobsData) {
    return <h1>Loading</h1>
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
              {jobsData?.map((data:any, index: any) => (
                <span key={index}>
                  <SingleJobList
                    id={data?._id}
                    title={data?.category_id?.name}
                    description={data?.description}
                    location={data?.job_location_id?.name}
                    img={data?.company_id?.logo_url}
                    companyName={data?.company_id?.name}
                  />
                </span>
              ))}
            </>
          )}
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default FeaturedJobs;
