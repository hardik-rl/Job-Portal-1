import { getAllApplication } from "../api";
import { useQuery } from "@tanstack/react-query";
import * as XLSX from "xlsx";

import Loader from "../../../shared/Loader";
import { DownloadIcon } from "../../../shared/Icon";
import { useNavigate } from "react-router-dom";

const ApplicationList = () => {
  const navigate = useNavigate();
  const { data: applicationListData, isLoading: applicationListIsLoading } =
    useQuery(["getAllApplication"], getAllApplication);

  const handleViewApplication = (applicationId: number) => {
    navigate(`/admin/job-category-user-application/${applicationId}`)
  }

  const generateUserExcelArray = () => {
    return applicationListData.map((application: any, index: number) => ({
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
    const userData = generateUserExcelArray();
    const ws = XLSX.utils.json_to_sheet(userData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, "job-applications.xlsx");
  };

  if (applicationListIsLoading) {
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
            <div className="row g-3 mb-4 align-items-center justify-content-between">
              <div className="d-flex flex-wrap align-items-center">
                <h1 className="app-page-title mb-0">All Job Applications</h1>
                <button
                  className="btn btn-primary d-flex align-items-center text-white ms-auto"
                  onClick={downloadXL}
                >
                  Export &nbsp;
                  <DownloadIcon />
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
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!applicationListData ||
                      (applicationListData.length === 0 && (
                        <tr>
                          <td colSpan={8}>
                            <h3 className="text-center my-5">No Data Found</h3>
                          </td>
                        </tr>
                      ))}
                    {applicationListData &&
                      applicationListData.map(
                        (application: any, index: number) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{application?.job_id?.title || '-'}</td>
                            <td>{application?.first_name || '-'}</td>
                            <td>{application?.ctc || '-'}</td>
                            <td>{application?.expected_ctc || '-'}</td>
                            <td>{application?.notice_period || '-'}</td>
                            <td>{application?.total_work_experience || '-'}</td>
                            <td>{application?.gender || '-'}</td>
                            <td>
                            <button
                              className="ml-2 btn btn-secondary p-2 text-white"
                              onClick={() => handleViewApplication(application._id)}
                            >
                              View
                            </button>
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationList;
