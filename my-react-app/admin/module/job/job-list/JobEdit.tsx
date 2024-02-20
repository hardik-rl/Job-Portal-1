import { useMutation } from "@tanstack/react-query";
import FormControl from "../../../../src/components/FormControl";
import FormLabel from "../../../../src/components/FormLabel";
import { updateJob } from "../api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const JobEdit = ({ showModal, setShowModal, selectedItemId }: any) => {
  const { mutate: updateJobFn } = useMutation(() => updateJob(selectedItemId), {
    onSuccess: () => {
      toast.success("Job Edited Successfully.");
      // refetch();
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast(error.response?.data.message, {
        type: "error",
      });
    },
  });

  const updateJobOnClick = () => {
    setShowModal(false);
    updateJobFn();
  };
  return (
    <div>
      {showModal && (
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
                    Job Edit
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <FormLabel name="Company  Name" htmlFor="htmlFor" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.first_name}
                          id="company_name"
                          value="company name"
                          type="text"
                          name="company name"
                        />
                      </div>
                      {/* <div className="form-group col-md-4">
                        <FormLabel name="Last Name" htmlFor="lastname" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.last_name}
                          id="last_name"
                          type="text"
                          value="last name"
                          name="last_name"
                        />
                      </div> */}

                      <div className="form-group col-md-4">
                        <FormLabel name="Company Email" htmlFor="youremail" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.email}
                          id="company_email"
                          type="email"
                          value="email"
                          name="company_email"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Company Description" htmlFor="pan_number" />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.pan_number}
                          id="company_description"
                          type="text"
                          value="Company Description"
                          name="Company Description"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Education Description"
                          htmlFor="mobilenumber"
                        />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.mobile_number}
                          id="Education Description"
                          type="number"
                          value="Education Description"
                          name="Education Description"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Job Nature" htmlFor="education" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.education}
                          id="Job Nature"
                          type="text"
                          value="Job Nature"
                          name="Job Nature"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        {/* <label htmlFor="Vacancy">CTC (In Laksh)</label> */}
                        <FormLabel name="Vacancy" htmlFor="ctc" />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.ctc}
                          id="Vacancy"
                          type="number"
                          name="Vacancy"
                          value="Vacancy"
                        />
                      </div>

                      {/* <div className="form-group col-md-4">
                        <FormLabel name="Expected CTC" htmlFor="expctc" />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.expected_ctc}
                          id="expctc"
                          type="number"
                          value="expected_ctc"
                          name="expected_ctc"
                        />
                      </div> */}

                      {/* <div className="form-group col-md-4">
                        <FormLabel
                          name="Notice Period"
                          htmlFor="notice_period"
                        />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.notice_period}
                          id="notice_period"
                          value="notice period"
                          type="text"
                          name="notice_period"
                        />
                      </div> */}

                      {/* <div className="form-group col-md-4">
                        <FormLabel
                          name="Total Work Experience"
                          htmlFor="workexperience"
                        />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.total_work_experience}
                          id="workexperience"
                          type="text"
                          value="workexp"
                          name="total_work_experience"
                        />
                      </div> */}

                      {/* <div className="form-group col-md-4">
                        <FormLabel name="Gender" htmlFor="gendar" />
                        <FormControl
                          onChange={() => {}}
                          value="male"
                          // value={formik.values.gender}
                          id="gendar"
                          type="text"
                          name="gender"
                        />
                      </div> */}

                      {/* <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select
                          className="form-control"
                          id="inputState"
                          // value={formik.values.state}
                          name="state"
                          // onChange={handleSelectOnChangeEvent}
                        >
                          <option>State</option>

                        </select>
                      </div> */}

                      {/* <div className="form-group col-md-4">
                        <label htmlFor="resume">Add Resume</label>
                        <input
                          type="file"
                          className="form-control"
                          id="resume"
                        />
                      </div> */}
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn-primary px-2 py-1 border-0"
                    onClick={updateJobOnClick}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
};

export default JobEdit;
