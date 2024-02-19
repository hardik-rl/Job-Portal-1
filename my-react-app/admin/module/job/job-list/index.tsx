import { Link } from "react-router-dom";
import { getAllJob } from "../api";
import { useQuery } from "@tanstack/react-query";

const Create = () => {
  const { data } = useQuery(["getAllJob"], getAllJob);
  const jobListData = data;
  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">All Jobs</h1>
            </div>
          </div>

          <div className="g-4 mb-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Company Email</th>
                  <th scope="col">Company Description</th>
                  <th scope="col">Education Description</th>
                  <th scope="col">Job Nature</th>
                  <th scope="col" colSpan={2}>
                    Vacancy
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobListData &&
                  jobListData.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.company_name}</td>
                      <td>{item.company_email}</td>
                      <td>{item.company_description}</td>
                      <td>{item.education_description}</td>
                      <td>{item.nature}</td>
                      <td>{item.vacancy}</td>
                      <td>
                        <Link to="#0" className="ml-2 btn-primary p-2">
                          Edit
                        </Link>
                        <Link to="#0" className="ml-2 btn-danger p-2">
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
