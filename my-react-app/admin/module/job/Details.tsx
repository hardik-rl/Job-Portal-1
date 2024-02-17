import { Link } from "react-router-dom";

const Details = () => {
  const data = [
    {
      name: "Mark Jones",
      detailLink: "/admin/view",
      details: {
        firstName: "Mark",
        lastName: "Jones",
        email: "mark@gmail.com",
        pancardNumber: "QWRFJKKJKJJ",
        mobileNumber: "9898989867",
        education: "BE",
        ctc: 16,
        expectedCTC: 20,
        noticePeriod: 120,
        totalWorkExperience: "7 Years",
        gender: "Male",
        state: "Gujarat",
        resumeLink: "https://morth.nic.in/sites/default/files/dd12-13_0.pdf",
      },
    },
    {
      name: "Kelly Dev",
      detailLink: "/admin/view",
      details: {
        firstName: "Kelly",
        lastName: "Dev",
        email: "kelly@gmail.com",
        pancardNumber: "PQR456789",
        mobileNumber: "9876549876",
        education: "B.Tech",
        ctc: 15,
        expectedCTC: 18,
        noticePeriod: 60,
        totalWorkExperience: "8 Years",
        gender: "Female",
        state: "Karnataka",
        resumeLink: "https://example.com/kelly_resume.pdf",
      },
    },
  ];

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
                {data.map((candidate, index) => (
                  <tr key={index}>
                    <td>{candidate.name}</td>
                    <td>
                      <Link to={candidate.detailLink}>
                        View Candidate Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
