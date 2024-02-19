/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { JobDataItem } from "../types";
import { categoryCard } from "../api";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";

const List = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: jobData, refetch } = useQuery<JobDataItem[]>(
    ["jobData", selectedCategory],
    () => categoryCard(selectedCategory),
    {
      enabled: false,
    }
  );

  const options =
    jobData?.map((option: any) => ({
      value: option.category,
      label: option.category,
    })) || [];

  const handleCategoryChange = (selectedOption: any) => {
    const newCategory = selectedOption?.value || "";
    setSelectedCategory(newCategory);
  };

  useEffect(() => {
    refetch();
  }, [selectedCategory, refetch]);

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
                    <ReactSelect
                      options={options}
                      value={{
                        value: selectedCategory,
                        label: selectedCategory || "Any - All Jobs",
                      }}
                      onChange={handleCategoryChange}
                      isClearable
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mb-4">
            {jobData &&
              jobData.map((item: any, index: any) => (
                <div key={index} className="col-6 col-lg-3">
                  <div className="app-card app-card-stat shadow-sm h-100 d-block">
                    {item.applicationCount > 0 ? (
                      <Link
                        to={`/admin/details/${item._id}`}
                        className="app-card-body p-3 p-lg-4"
                      >
                        <h4 className="stats-type mb-1">{item.category}</h4>
                        <div className="stats-figure">
                          {item.applicationCount}
                        </div>
                      </Link>
                    ) : (
                      <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">{item.category}</h4>
                        <div className="stats-figure">
                          {item.applicationCount}
                        </div>
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
