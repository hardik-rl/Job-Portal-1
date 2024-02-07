import { useParams } from "react-router-dom"
import Banner from "./Banner"
import JobPost from "./JobPost"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const JobDetails = () => {
  const { id } = useParams();

  const fetchJob = async (id:any) => {
    const response = await axios.get(`http://localhost:3000/job/${id}`);
    return response.data;
  };

  const { data: jobData, isLoading: isLoadingJobData } = useQuery({
    queryKey: ['jobData', id],
    queryFn: () => fetchJob(id),
  })

  if(isLoadingJobData) {
    return <h1>Loading</h1>
  }

  return (
    <div>
        <Banner />
        <JobPost jobData={jobData}/>
    </div>
  )
}

export default JobDetails   