import { Link } from "react-router-dom";

const View = () => {
  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <nav aria-label="breadcrumb bg-white mb-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/details">&lt; Back to Candidate List</Link>
              </li>
            </ol>
          </nav>

          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">Mark Jones - HR Candidate</h1>
            </div>
          </div>

          <div className="g-4 mb-4">
            <p><b>First Name :</b> Mark</p>
            <p><b>Last Name :</b> Jones</p>
            <p><b>Email :</b> <a href="mailto:mark@gmail.com">mark@gmail.com</a></p>
            <p><b>Pancard number :</b> QWRFJKKJKJJ</p>
            <p><b>Mobile number :</b> 9898989867</p>
            <p><b>Education :</b> BE</p>
            <p><b>CTC (In Lakh) :</b> 16</p>
            <p><b>Expected CTC :</b> 20</p>
            <p><b>Notice Period (Days) :</b> 120</p>
            <p><b>Total Work Experience :</b> 7 Year</p>
            <p><b>Gender :</b> Male</p>
            <p><b>State :</b> Gujrat</p>
            <p><b>Resume :</b> <a href="https://morth.nic.in/sites/default/files/dd12-13_0.pdf">Click Here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
