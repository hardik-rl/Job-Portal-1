/* eslint-disable @typescript-eslint/no-explicit-any */
import FormControl from "../../components/FormControl";
import FormLabel from "../../components/FormLabel";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { ModelProps } from "../../shared/components/type";

const ApplicationModal = ({ showModal, setShowModal }: ModelProps) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addJobApplication = async (data: any) => {
    const response = await axios.post(`http://localhost:3000/apply`, data);
    return response.data;
  };
  const { mutate: applyJobMutate, isLoading: applyJobIsLoading } = useMutation({
    mutationFn: (data) => addJobApplication(data),
    onSuccess: () => {
      toast.success("Application added successfully");
    },
  });

  const formik = useFormik({
    initialValues: {
      job_id: "65d3b0997aadf0d1c0a84656",
      category_id: "65d3afb700fb52fa58d4aad7",
      first_name: "",
      last_name: "",
      email: "",
      pan_number: "",
      mobile_number: "",
      education: "",
      ctc: "",
      expected_ctc: "",
      notice_period: "",
      total_work_experience: "",
      gender: "",
      state: "",
      resume_file: "",
    },
    onSubmit: (values: any) => {
      applyJobMutate(values);
    },
  });

  const handleOnChangeEvent = (event: any) => {
    formik.setFieldValue(event?.target.name, Number(event.target.value));
  };

  const handleSelectOnChangeEvent = (event: any) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  const handleSubmitEvent = () => {
    applyJobMutate(formik.values);
    formik.resetForm();
    handleCloseModal();
  };

  if (applyJobIsLoading) {
    return <h1>Loading</h1>;
  }

  const statesDataList = [
    { value: "SelectState", label: "Select State" },
    { value: "Andra Pradesh", label: "Andra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madya Pradesh", label: "Madya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Orissa", label: "Orissa" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttaranchal", label: "Uttaranchal" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "West Bengal", label: "West Bengal" },
    {
      value: "Andaman and Nicobar Islands",
      label: "Andaman and Nicobar Islands",
    },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Dadar and Nagar Haveli", label: "Dadar and Nagar Haveli" },
    { value: "Daman and Diu", label: "Daman and Diu" },
    { value: "Delhi", label: "Delhi" },
    { value: "Lakshadeep", label: "Lakshadeep" },
    { value: "Pondicherry", label: "Pondicherry" },
  ];

  return (
    <>
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
                    Accounts & Finance
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <FormLabel name="First Name" htmlFor="htmlFor" />
                        <FormControl
                          onChange={formik.handleChange}
                          value={formik.values.first_name}
                          id="first_name"
                          type="text"
                          name="first_name"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <FormLabel name="Last Name" htmlFor="lastname" />
                        <FormControl
                          onChange={formik.handleChange}
                          value={formik.values.last_name}
                          id="last_name"
                          type="text"
                          name="last_name"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Email" htmlFor="youremail" />
                        <FormControl
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          id="email"
                          type="text"
                          name="email"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Pancard number" htmlFor="pan_number" />
                        <FormControl
                          onChange={(event: any) => handleOnChangeEvent(event)}
                          value={formik.values.pan_number}
                          id="pan_number"
                          type="text"
                          name="pan_number"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Mobile number"
                          htmlFor="mobilenumber"
                        />
                        <FormControl
                          onChange={(event: any) => handleOnChangeEvent(event)}
                          value={formik.values.mobile_number}
                          id="mobile_number"
                          type="number"
                          name="mobile_number"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Education" htmlFor="education" />
                        <FormControl
                          onChange={formik.handleChange}
                          value={formik.values.education}
                          id="education"
                          type="text"
                          name="education"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="ctc">CTC (In Laksh)</label>
                        <FormLabel name="" htmlFor="ctc" />
                        <FormControl
                          onChange={(event: any) => handleOnChangeEvent(event)}
                          value={formik.values.ctc}
                          id="ctc"
                          type="number"
                          name="ctc"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Expected CTC" htmlFor="expctc" />
                        <FormControl
                          onChange={(event: any) => handleOnChangeEvent(event)}
                          value={formik.values.expected_ctc}
                          id="expctc"
                          type="number"
                          name="expected_ctc"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Notice Period"
                          htmlFor="notice_period"
                        />
                        <FormControl
                          onChange={(event: any) => handleOnChangeEvent(event)}
                          value={formik.values.notice_period}
                          id="notice_period"
                          type="text"
                          name="notice_period"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Total Work Experience"
                          htmlFor="workexperience"
                        />
                        <FormControl
                          onChange={(event: any) => handleOnChangeEvent(event)}
                          value={formik.values.total_work_experience}
                          id="workexperience"
                          type="text"
                          name="total_work_experience"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Gender" htmlFor="gendar" />
                        <FormControl
                          onChange={formik.handleChange}
                          value={formik.values.gender}
                          id="gendar"
                          type="text"
                          name="gender"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select
                          className="form-control"
                          id="inputState"
                          value={formik.values.state}
                          name="state"
                          onChange={handleSelectOnChangeEvent}
                        >
                          {statesDataList.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="resume">Add Resume</label>
                        <input
                          type="file"
                          className="form-control"
                          id="resume"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitEvent}
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
    </>
  );
};

export default ApplicationModal;
