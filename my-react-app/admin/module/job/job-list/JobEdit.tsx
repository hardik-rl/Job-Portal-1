import FormControl from "../../../../src/components/FormControl";
import FormLabel from "../../../../src/components/FormLabel";

const JobEdit = ({ showModal, setShowModal }: any) => {
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
                    Accounts & Finance
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
                        <FormLabel name="First Name" htmlFor="htmlFor" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.first_name}
                          id="first_name"
                          value="first name"
                          type="text"
                          name="first_name"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <FormLabel name="Last Name" htmlFor="lastname" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.last_name}
                          id="last_name"
                          type="text"
                          value="last name"
                          name="last_name"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Email" htmlFor="youremail" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.email}
                          id="email"
                          type="text"
                          value="email"
                          name="email"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Pancard number" htmlFor="pan_number" />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.pan_number}
                          id="pan_number"
                          type="text"
                          value="pan"
                          name="pan_number"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Mobile number"
                          htmlFor="mobilenumber"
                        />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.mobile_number}
                          id="mobile_number"
                          type="number"
                          value="mobile_number"
                          name="mobile_number"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Education" htmlFor="education" />
                        <FormControl
                          onChange={() => {}}
                          // value={formik.values.education}
                          id="education"
                          type="text"
                          value="education"
                          name="education"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="ctc">CTC (In Laksh)</label>
                        <FormLabel name="" htmlFor="ctc" />
                        <FormControl
                          onChange={() => {}}
                          // onChange={(event: any) => handleOnChangeEvent(event)}
                          // value={formik.values.ctc}
                          id="ctc"
                          type="number"
                          name="ctc"
                          value="ctc"
                        />
                      </div>

                      <div className="form-group col-md-4">
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
                      </div>

                      <div className="form-group col-md-4">
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
                      </div>

                      <div className="form-group col-md-4">
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
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Gender" htmlFor="gendar" />
                        <FormControl
                          onChange={() => {}}
                          value="male"
                          // value={formik.values.gender}
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
                          // value={formik.values.state}
                          name="state"
                          // onChange={handleSelectOnChangeEvent}
                        >
                          <option>State</option>
                          {/* {statesDataList.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.label}
                            </option>
                          ))} */}
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
                    className="btn-primary px-2 py-1 border-0"
                    // onClick={handleSubmitEvent}
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
