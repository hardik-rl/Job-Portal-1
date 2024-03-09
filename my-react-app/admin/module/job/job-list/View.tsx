import { useNavigate } from "react-router-dom";

const categoryViewData = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
  pan_number: "ABCDE1234F",
  mobile_number: "1234567890",
  education: "Bachelor's Degree",
  ctc: "10",
  expected_ctc: "12",
  notice_period: "30",
  total_work_experience: "5",
  gender: "Male",
  state: "California",
  resume_url: "https://example.com/resume.pdf",
};

const View = () => {
  const navigate = useNavigate();
  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <nav aria-label="breadcrumb mb-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <button
                  className="bg-transparent border-0 textgreen"
                  onClick={() => navigate(-1)}
                >
                  &#x2190; Candidate Job List
                </button>
              </li>
            </ol>
          </nav>

          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="d-flex gap-2">
              <div className="mr-auto">
                <h1 className="app-page-title mb-0">
                  Mark Jones - HR Candidate
                </h1>
              </div>
            </div>
          </div>

          <div className="g-4 mb-4">
            <p>
              <b>First Name :</b> {categoryViewData?.first_name}
            </p>
            <p>
              <b>Last Name :</b> {categoryViewData?.last_name}
            </p>
            <p>
              <b>Email :</b>{" "}
              <a href="mailto:mark@gmail.com">{categoryViewData?.email}</a>
            </p>
            <p>
              <b>Pancard number :</b> {categoryViewData?.pan_number}
            </p>
            <p>
              <b>Mobile number :</b> {categoryViewData?.mobile_number}
            </p>
            <p>
              <b>Education :</b> {categoryViewData?.education}
            </p>
            <p>
              <b>CTC (In Lakh) :</b> {categoryViewData?.ctc}
            </p>
            <p>
              <b>Expected CTC :</b> {categoryViewData?.expected_ctc}
            </p>
            <p>
              <b>Notice Period (Days) :</b> {categoryViewData?.notice_period}
            </p>
            <p>
              <b>Total Work Experience :</b>{" "}
              {categoryViewData?.total_work_experience}
            </p>
            <p>
              <b>Gender :</b> {categoryViewData?.gender}
            </p>
            <p>
              <b>State :</b> {categoryViewData?.state}
            </p>
            <p>
              <b>Resume :</b>{" "}
              <a href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf">
                Click Here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
