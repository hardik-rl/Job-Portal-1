import { getAllJob } from "../api";
import { useQuery } from "@tanstack/react-query";
import JobEdit from "./JobEdit";
import JobDelete from "../job-list/JobDelete";

import { useState } from "react";

const Create = () => {
  const { data } = useQuery(["getAllJob"], getAllJob);
  const jobListData = data;
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
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
                        <td className="d-flex">
                          <button
                            className="ml-2 btn-primary p-2"
                            onClick={() => setShowModal(true)}
                          >
                            Edit
                          </button>
                          <button
                            className="ml-2 btn-danger p-2"
                            onClick={() => setDeleteModal(true)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <JobEdit setShowModal={setShowModal} showModal={showModal} />
      <JobDelete setDeleteModal={setDeleteModal} deleteModal={deleteModal} />
    </>
  );
};

export default Create;
