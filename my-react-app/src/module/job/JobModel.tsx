import FormControl from "../../components/FormControl";
import FormLabel from "../../components/FormLabel";

interface ModelProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const JobModel = ({ showModal, setShowModal }: ModelProps) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      {showModal && (
        <>
          <div
            className="modal fade modal-toggle"
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
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <FormLabel name="First Name" htmlFor="htmlFor" />
                        <FormControl id="firstname" type="text" />
                      </div>
                      <div className="form-group col-md-4">
                        <FormLabel name="Last Name" htmlFor="lastname" />
                        <FormControl id="lastname" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Email" htmlFor="youremail" />
                        <FormControl id="youremail" type="email" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Pancard number" htmlFor="pancard" />
                        <FormControl id="pancard" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Mobile number"
                          htmlFor="mobilenumber"
                        />
                        <FormControl id="mobilenumber" type="number" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Education" htmlFor="education" />
                        <FormControl id="education" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="ctc">CTC (In Laksh)</label>
                        <FormLabel name="First Name" htmlFor="htmlFor" />
                        <FormControl id="ctc" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Expected CTC" htmlFor="expctc" />
                        <FormControl id="expctc" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Notice Period"
                          htmlFor="noticeperiod"
                        />
                        <FormControl id="noticeperiod" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel
                          name="Total Work Experience"
                          htmlFor="workexperience"
                        />
                        <FormControl id="workexperience" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <FormLabel name="Gender" htmlFor="gendar" />
                        <FormControl id="gendar" type="text" />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select
                          className="form-control"
                          id="inputState"
                          // style={{display: "none"}}
                        >
                          <option value="SelectState">Select State</option>
                          <option value="Andra Pradesh">Andra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madya Pradesh">Madya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Orissa">Orissa</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttaranchal">Uttaranchal</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="West Bengal">West Bengal</option>
                          <option
                            // disabled=""
                            style={{ backgroundColor: "#aaa", color: "#fff" }}
                          >
                            UNION Territories
                          </option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadar and Nagar Haveli">
                            Dadar and Nagar Haveli
                          </option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadeep">Lakshadeep</option>
                          <option value="Pondicherry">Pondicherry</option>
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
                  <button type="button" className="btn btn-primary">
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

export default JobModel;
