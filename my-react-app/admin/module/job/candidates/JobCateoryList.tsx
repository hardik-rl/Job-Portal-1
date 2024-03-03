/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { categoryCard } from "../api";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { JobDataItem } from "../../../shared/types";
import Loader from "../../../shared/Loader";

import useJobCategories from "../../../shared/store/useJobCategories";

const JobCategoryList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { setJobCategoriesTitle } = useJobCategories();

  const { data: jobCategoryData, refetch } = useQuery<JobDataItem[]>(
    ["job-category-list", selectedCategory],
    () => categoryCard(selectedCategory),
    {
      enabled: false,
      onSuccess: () => {
        setLoading(false);
      },
    }
  );

  const options =
    jobCategoryData?.map((job: any) => ({
      value: job.category,
      label: job.category,
    })) || [];

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption?.value || "");
  };

  useEffect(() => {
    refetch();
    setLoading(true);
  }, [selectedCategory, refetch]);

  if (loading) {
    return (
      <div className="py-4 banner-height d-flex justify-content-center">
        <Loader />
      </div>
    );
  }
  const cardOnClick = (category: any) => {
    setJobCategoriesTitle(category.category);
    navigate(`/admin/job-category-user/${category._id}`);
  };

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">All Jobs Categories</h1>
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
            {jobCategoryData &&
              jobCategoryData.map((category: any, index: any) => (
                <div key={index} className="col-6 col-lg-3">
                  <div className="app-card app-card-stat shadow-sm h-100 d-block">
                    {category.applicationCount > 0 ? (
                      <button
                        onClick={() => cardOnClick(category)}
                        className="app-card-body p-3 p-lg-4 border-0 bg-white"
                      >
                        <h4 className="stats-type mb-1">{category.category}</h4>
                        <div className="stats-figure">
                          {category.applicationCount}
                        </div>
                      </button>
                    ) : (
                      <div className="app-card-body p-3 p-lg-4">
                        <h4 className="stats-type mb-1">{category.category}</h4>
                        <div className="stats-figure">
                          {category.applicationCount}
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

export default JobCategoryList;
