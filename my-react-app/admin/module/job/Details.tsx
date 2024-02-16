import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <nav aria-label="breadcrumb bg-white mb-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/list">&lt; Back to Candidates List</Link>
              </li>
            </ol>
          </nav>

          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">HR Candidates List</h1>
            </div>
          </div>

          <div className="g-4 mb-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Candidates Name</th>
                  <th scope="col">Candidates Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark Jones</td>
                  <td>
                    <Link to="/admin/view">View Candidate Detail</Link>
                  </td>
                </tr>
                <tr>
                  <td>Jacob Dev</td>
                  <td>
                    <Link to="/admin/view">View Candidate Detail</Link>
                  </td>
                </tr>
                <tr>
                  <td>Kelly Dev</td>
                  <td>
                    <Link to="/admin/view">View Candidate Detail</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
