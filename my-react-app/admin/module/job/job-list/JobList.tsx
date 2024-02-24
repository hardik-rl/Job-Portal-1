import { getAllJob } from "../api";
import { useQuery } from "@tanstack/react-query";
import JobEdit from "./JobEdit";
import JobDelete from "./JobDelete";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const navigate = useNavigate();
  const { data, refetch } = useQuery(["getAllJob"], getAllJob);
  const jobListData = data;
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");

  const handleEditClick = (id: any) => {
    navigate(`/admin/update-job/${id}`);
    setShowModal(true);
    setSelectedItemId(id);
  };
  const handleDeleteClick = (id: any) => {
    setDeleteModal(true);
    setSelectedItemId(id);
  };

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
                    <th scope="col">
                      Vacancy
                    </th>
                    <th scope="col">
                  Action
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
                          <div className="d-flex gap-2">
                          <button
                            className="ml-2 btn-primary text-white p-2"
                            onClick={() => handleEditClick(item._id)}
                          >
                            Edit
                          </button>
                          <button
                            className="ml-2 btn btn-danger p-2 text-white"
                            onClick={() => handleDeleteClick(item._id)}
                          >
                            Delete
                          </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <JobEdit
          refetch={refetch}
          selectedItemId={selectedItemId}
          setShowModal={setShowModal}
        />
      )}
      {deleteModal && (
        <JobDelete
          refetch={refetch}
          selectedItemId={selectedItemId}
          setDeleteModal={setDeleteModal}
        />
      )}
    </>
  );
};

export default JobList;
