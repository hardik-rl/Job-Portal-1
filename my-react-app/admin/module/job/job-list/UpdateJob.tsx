import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import FormControl from "../../../shared/FormControl";
import {
  getAllCategories,
  getAllLocations,
  getSpecificJob,
  updateJob,
} from "../api";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ChangeEvent, useEffect, useState } from "react";
import ReactSelect from "react-select";
import { AxiosError } from "axios";
import { JobFormType } from "../../../shared/types";

const UpdateJob = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [categorySelect, setCategorySelect] = useState({
    value: "",
    label: "Any - All Categories",
  });
  const [locationSelect, setLocationSelect] = useState({
    value: "",
    label: "Any - All Locations",
  });

  const { data: jobData, isLoading: jobDataIsLoading } = useQuery({
    queryKey: ["get-specific-job"],
    queryFn: () => getSpecificJob(jobId),
  });

  const { mutate: updateJobFn } = useMutation(
    (data) => updateJob(jobId, data),
    {
      onSuccess: () => {
        navigate("/admin/job-list");
        toast.success("Job Edited Successfully.");
        // refetch();
      },
      onError: (error: AxiosError<{ message: string }>) => {
        toast(error.response?.data.message, {
          type: "error",
        });
      },
    }
  );

  const { data: jobCategoryData, isLoading: jobCategoryDataIsLoading } =
    useQuery(["job-category-list"], () => getAllCategories());

  const jobCategoryOptions =
    jobCategoryData?.map((category: any) => ({
      value: category._id,
      label: category.name,
    })) || [];

  const { data: jobLocationData, isLoading: jobLocationDataIsLoading } =
    useQuery(["job-location-list"], () => getAllLocations());

  const jobLocationOptions =
    jobLocationData?.map((location: any) => ({
      value: location._id,
      label: location.name,
    })) || [];

  const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
    initialValues: {
      title: jobData?.title,
      description: jobData?.description,
      education_description: jobData?.education_description,
      knowledge_description: jobData?.knowledge_description,
      job_location_id: jobData?.job_location_id,
      category_id: jobData?.category_id,
      vacancy: jobData?.vacancy,
      nature: jobData?.nature,
      company_name: jobData?.company_name,
      company_description: jobData?.company_description,
      company_website: jobData?.company_website,
      company_email: jobData?.company_email,
    },
    onSubmit: async (values: JobFormType) => {
      values["category_id"] = categorySelect.value;
      values["job_location_id"] = locationSelect.value;
      updateJobFn(values);
    },
  });

  const handleCategoryChange = (event: any) => {
    setCategorySelect(event);
  };

  const handleLocationChange = (event: any) => {
    setLocationSelect(event);
  };

  const handleSelectOnChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFieldValue(name, Number(value));
  };

  useEffect(() => {
    if (jobData) {
      // Update form values with data fetched from the API
      setFieldValue("title", jobData.title);
      setFieldValue("description", jobData.description);
      setFieldValue("education_description", jobData.education_description);
      setFieldValue("knowledge_description", jobData.knowledge_description);
      setFieldValue("job_location_id", jobData.job_location_id);
      setFieldValue("category_id", jobData.category_id);
      setFieldValue("vacancy", jobData.vacancy);
      setFieldValue("nature", jobData.nature);
      setFieldValue("company_name", jobData.company_name);
      setFieldValue("company_description", jobData.company_description);
      setFieldValue("company_website", jobData.company_website);
      setFieldValue("company_email", jobData.company_email);

      const categoryLabel = jobCategoryData?.find(
        (category: any) => category._id === jobData.category_id
      );
      const locationLabel = jobLocationData?.find(
        (location: any) => location._id === jobData.job_location_id
      );

      setCategorySelect({
        value: jobData.category_id,
        label: categoryLabel?.name,
      });
      setLocationSelect({
        value: jobData.job_location_id,
        label: locationLabel?.name,
      });
    }
  }, [jobData, jobCategoryData, setFieldValue, jobLocationData]);

  if (
    jobCategoryDataIsLoading ||
    jobLocationDataIsLoading ||
    jobDataIsLoading
  ) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">Edit Jobs</h1>
            </div>
          </div>
          <div className="g-4 mb-4">
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-12 mb-3">
                <FormControl
                  type="text"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                  placeholder="Enter Job Title"
                />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Enter Job Description"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="knowledge_description"
                  name="knowledge_description"
                  value={values.knowledge_description}
                  onChange={handleChange}
                  placeholder="Enter Required Knowledge, Skills, and Abilities"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="education_description"
                  name="education_description"
                  value={values.education_description}
                  onChange={handleChange}
                  placeholder="Enter Education + Experience"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <ReactSelect
                  name="job-location"
                  onChange={handleLocationChange}
                  value={locationSelect}
                  options={jobLocationOptions}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />
                <div className="mt-2">
                  <ReactSelect
                    name="job-categories"
                    onChange={handleCategoryChange}
                    value={categorySelect}
                    options={jobCategoryOptions}
                    components={{
                      IndicatorSeparator: () => null,
                    }}
                  />
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  value={values.vacancy}
                  id="vacancy"
                  name="vacancy"
                  onChange={handleSelectOnChangeEvent}
                  type="text"
                  placeholder="Enter Total Number of Vacancy"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={values.nature}
                  id="nature"
                  name="nature"
                  onChange={handleChange}
                  placeholder="Enter Job nature (Full-Time/Part-Time)"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={values.company_name}
                  id="company_name"
                  name="company_name"
                  onChange={handleChange}
                  placeholder="Enter Company Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  value={values.company_description}
                  id="company_description"
                  name="company_description"
                  onChange={handleChange}
                  placeholder="Enter Company Job Description"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={values.company_website}
                  id="company_website"
                  name="company_website"
                  onChange={handleChange}
                  placeholder="Enter Company Website URL"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="email"
                  value={values.company_email}
                  id="company_email"
                  name="company_email"
                  onChange={handleChange}
                  placeholder="Enter Company Email"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-auto text-white p-3 m-auto mt-5"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateJob;
