import { Link, useParams } from "react-router-dom";
import { categoryList } from "../api";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
  const { categoryId } = useParams();
  const { data } = useQuery(["categoryList"], ()=> categoryList(categoryId));

  const categoryData = data && data.category_applications;

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <nav aria-label="breadcrumb bg-white mb-5">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/admin/candidates-list">&lt; Back to Candidates List</Link>
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
                {categoryData &&
                  categoryData.map((item, index: any) => (
                    <tr key={index}>
                      <td>{item.first_name}</td>
                      <td>
                        <Link to={`/admin/view/${item._id}`}>
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
