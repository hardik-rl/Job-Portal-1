import { useState } from "react";

const JobModel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <div className=" mb-30">
      <div className="items-link f-right">
        <button type="button" onClick={handleOpenModal}>
          Apply Now
        </button>
      </div>

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
                        <label htmlFor="firstname">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="youremail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="youremail"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="pancard">Pancard number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="pancard"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="mobilenumber">Mobile number</label>
                        <input
                          type="number"
                          className="form-control"
                          id="mobilenumber"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="education">Education</label>
                        <input
                          type="text"
                          className="form-control"
                          id="education"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="ctc">CTC (In Laksh)</label>
                        <input type="text" className="form-control" id="ctc" />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="expctc">Expected CTC</label>
                        <input
                          type="text"
                          className="form-control"
                          id="expctc"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="noticeperiod">Notice Period</label>
                        <input
                          type="text"
                          className="form-control"
                          id="noticeperiod"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="workexperience">
                          Total Work Experience
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="workexperience"
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <label htmlFor="gendar">Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          id="gendar"
                        />
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
                            style={{backgroundColor:"#aaa", color:"#fff"}}
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
                        {/* <div className="nice-select form-control" tabIndex={0}>
                          <span className="current">Select State</span>
                          <ul className="list">
                            <li
                              data-value="SelectState"
                              className="option selected"
                            >
                              Select State
                            </li>
                            <li data-value="Andra Pradesh" className="option">
                              Andra Pradesh
                            </li>
                            <li
                              data-value="Arunachal Pradesh"
                              className="option"
                            >
                              Arunachal Pradesh
                            </li>
                            <li data-value="Assam" className="option">
                              Assam
                            </li>
                            <li data-value="Bihar" className="option">
                              Bihar
                            </li>
                            <li data-value="Chhattisgarh" className="option">
                              Chhattisgarh
                            </li>
                            <li data-value="Goa" className="option">
                              Goa
                            </li>
                            <li data-value="Gujarat" className="option">
                              Gujarat
                            </li>
                            <li data-value="Haryana" className="option">
                              Haryana
                            </li>
                            <li
                              data-value="Himachal Pradesh"
                              className="option"
                            >
                              Himachal Pradesh
                            </li>
                            <li
                              data-value="Jammu and Kashmir"
                              className="option"
                            >
                              Jammu and Kashmir
                            </li>
                            <li data-value="Jharkhand" className="option">
                              Jharkhand
                            </li>
                            <li data-value="Karnataka" className="option">
                              Karnataka
                            </li>
                            <li data-value="Kerala" className="option">
                              Kerala
                            </li>
                            <li data-value="Madya Pradesh" className="option">
                              Madya Pradesh
                            </li>
                            <li data-value="Maharashtra" className="option">
                              Maharashtra
                            </li>
                            <li data-value="Manipur" className="option">
                              Manipur
                            </li>
                            <li data-value="Meghalaya" className="option">
                              Meghalaya
                            </li>
                            <li data-value="Mizoram" className="option">
                              Mizoram
                            </li>
                            <li data-value="Nagaland" className="option">
                              Nagaland
                            </li>
                            <li data-value="Orissa" className="option">
                              Orissa
                            </li>
                            <li data-value="Punjab" className="option">
                              Punjab
                            </li>
                            <li data-value="Rajasthan" className="option">
                              Rajasthan
                            </li>
                            <li data-value="Sikkim" className="option">
                              Sikkim
                            </li>
                            <li data-value="Tamil Nadu" className="option">
                              Tamil Nadu
                            </li>
                            <li data-value="Telangana" className="option">
                              Telangana
                            </li>
                            <li data-value="Tripura" className="option">
                              Tripura
                            </li>
                            <li data-value="Uttaranchal" className="option">
                              Uttaranchal
                            </li>
                            <li data-value="Uttar Pradesh" className="option">
                              Uttar Pradesh
                            </li>
                            <li data-value="West Bengal" className="option">
                              West Bengal
                            </li>
                            <li
                              data-value="UNION Territories"
                              className="option disabled"
                            >
                              UNION Territories
                            </li>
                            <li
                              data-value="Andaman and Nicobar Islands"
                              className="option"
                            >
                              Andaman and Nicobar Islands
                            </li>
                            <li data-value="Chandigarh" className="option">
                              Chandigarh
                            </li>
                            <li
                              data-value="Dadar and Nagar Haveli"
                              className="option"
                            >
                              Dadar and Nagar Haveli
                            </li>
                            <li data-value="Daman and Diu" className="option">
                              Daman and Diu
                            </li>
                            <li data-value="Delhi" className="option">
                              Delhi
                            </li>
                            <li data-value="Lakshadeep" className="option">
                              Lakshadeep
                            </li>
                            <li data-value="Pondicherry" className="option">
                              Pondicherry
                            </li>
                          </ul>
                        </div> */}
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
    </div>
  );
};

export default JobModel;
