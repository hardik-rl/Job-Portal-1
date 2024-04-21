import { getApplicationBasedOnJob } from "../api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../../shared/Loader";
import { useNavigate } from "react-router-dom";
import { DownloadIcon } from "../../../shared/Icon";
import * as XLSX from "xlsx";
import clsx from "clsx";
import { useState } from "react";

const JobListApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [genderFilter, setGenderFilter] = useState("");

  const { data: jobListApplicationData, isLoading: jobListApplicationIsLoading } = useQuery({
    queryKey: ["get-application-based-on-job-id", genderFilter],
    queryFn: () => getApplicationBasedOnJob(jobId, genderFilter),
  });

  const generateJobListApplicationArray = () => {
    return jobListApplicationData.map((application: any, index: number) => ({
      "Sr. No": index + 1 || "-",
      "Job Title": application?.job_id?.title || "-",
      "Category Name": application?.category_id?.name || "-",
      "Applicant Name": application?.first_name || "-",
      "Applicant Email": application?.email || "-",
      "Applicant Education": application?.education || "-",
      "Applicant Pan Number": application?.pan_number || "-",
      "Applicant CTC": application?.ctc || "-",
      "Applicant Expected CTC": application?.expected_ctc || "-",
      "Notice Period": application?.notice_period || "-",
      "Total Work Exp.": application?.total_work_experience || "-",
      "State": application?.state || "-",
      "Gender": application?.gender || "-",
    }));
  };

  const downloadXL = () => {
    const userData = generateJobListApplicationArray();
    const ws = XLSX.utils.json_to_sheet(userData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, "job-list-applications.xlsx");
  };

  const onGenderFilter = (event:any) => {
    setGenderFilter(event.target.value)
  }

  const onClickResetFilter = () => {
    setGenderFilter("");
  }

  if (jobListApplicationIsLoading) {
    return (
      <div className="py-4 banner-height d-flex justify-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
          <nav aria-label="breadcrumb mb-5">
            <ol className="breadcrumb bg-transparent p-0">
              <li className="breadcrumb-item ">
                <button className="bg-transparent border-0 textgreen" onClick={()=> navigate(-1)}>
                &#x2190; Job List
                </button>
              </li>
            </ol>
          </nav>
            <div className="d-flex flex-wrap align-items-center mb-3">
              <h1 className="app-page-title mb-0">Job Applications</h1>
              <button
                className="btn btn-primary d-flex align-items-center text-white ms-auto"
                onClick={downloadXL}
              >
                Export &nbsp;
                <DownloadIcon />
              </button>
            </div>
            <div className="d-flex gap-3 align-items-center mb-3">
              <select
                className={"form-control appearance-auto w-auto"}
                id="inputgender"
                value={genderFilter}
                name="gender"
                onChange={onGenderFilter}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <button
                type="button"
                className="btn-primary text-white"
                onClick={onClickResetFilter}
              >
                Reset
              </button>
            </div>
            <div className="g-4 mb-4 overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Sr. No</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Applicant Name</th>
                    <th scope="col">Applicant CTC</th>
                    <th scope="col">Expected CTC</th>
                    <th scope="col">Notice Period</th>
                    <th scope="col">Total Work Exp.</th>
                    <th scope="col">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {jobListApplicationData?.length === 0 && (
                    <tr><td colSpan={8}>No Data Found.</td></tr>
                  )}
                  {jobListApplicationData && jobListApplicationData?.length > 0 &&
                    jobListApplicationData.map((application: any, index: number) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{application.job_id.title}</td>
                        <td>{application.first_name }</td>
                        <td>{application.ctc }</td>
                        <td>{application.expected_ctc}</td>
                        <td>{application.notice_period}</td>
                        <td>{application.total_work_experience}</td>
                        <td>{application.gender}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListApplication;
