/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { deleteJob } from "../api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const JobDelete = ({
  selectedItemId,
  setDeleteModal,
  refetch,
}: any) => {
  const { mutate: deleteJobFn } = useMutation(() => deleteJob(selectedItemId), {
    onSuccess: () => {
      toast.success("Job Deleted Successfully.");
      refetch();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message, {
        type: "error",
      });
    },
  });

  const deleteJobOnClick = () => {
    setDeleteModal(false);
    deleteJobFn();
  };

  return (
    <>
      <div
        className="modal fade modal-toggle show"
        id="exampleModal"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Job
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setDeleteModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <p className="fs-5 text-dark">Are You Sure Want to Delete</p>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                onClick={deleteJobOnClick}
                className="btn btn-danger text-white"
              >
                Delete
              </button>
              <button
                type="submit"
                onClick={()=> setDeleteModal(false)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default JobDelete;
