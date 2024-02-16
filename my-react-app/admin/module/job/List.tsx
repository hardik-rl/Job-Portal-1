import { Link } from "react-router-dom";

const List = () => {
  const jobData = [
    { category: "All Candidates", value: 120 },
    { category: "HR", value: 10, link: "/admin/details" },
    { category: "Marketing", value: 8, link: "/admin/details" },
    { category: "Productions", value: 4, link: "/admin/details" },
    { category: "R & D", value: 2, link: "/admin/details" },
    { category: "Logistics", value: 50, link: "/admin/details" },
    { category: "Others", value: 100, link: "/admin/details" },
  ];
  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">All Jobs Candidates</h1>
            </div>
            <div className="col-auto">
              <div className="page-utilities">
                <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                  <div className="col-auto">
                    <select className="form-select" name="select" id="select1">
                      <option value="">Any - All Jobs</option>
                      <option value="">Accounts &amp; Finance</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-4">
            {jobData.map((item, index) => (
              <div key={index} className="col-6 col-lg-3">
                <div className="app-card app-card-stat shadow-sm h-100 d-block">
                  {item.link ? (
                    <Link to={item.link} className="app-card-body p-3 p-lg-4">
                      <h4 className="stats-type mb-1">{item.category}</h4>
                      <div className="stats-figure">{item.value}</div>
                    </Link>
                  ) : (
                    <div className="app-card-body p-3 p-lg-4">
                      <h4 className="stats-type mb-1">{item.category}</h4>
                      <div className="stats-figure">{item.value}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
