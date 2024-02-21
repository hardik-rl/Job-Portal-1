import { useMutation, useQuery } from "@tanstack/react-query";
import FormControl from "../../../shared/FormControl";
import { addJob, getAllCategories, getAllLocations } from "../api";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { JobFormType } from "../types";
import { ChangeEvent } from "react";
import ReactSelect from "react-select";

const CreateNewJob = () => {
  const { mutate: jobListMutate } = useMutation({
    mutationFn: (data) => addJob(data),
    onSuccess: () => {
      toast.success("Job Application added successfully");
    },
  });

  const { data: jobCategoryData, isLoading: jobCategoryDataIsLoading } = useQuery(["job-category-list"], () =>
    getAllCategories()
  );

  const jobCategoryOptions =
    jobCategoryData?.map((category: any) => ({
      value: category._id,
      label: category.name,
    })) || [];

  const { data: jobLocationData, isLoading: jobLocationDataIsLoading } = useQuery(["job-location-list"], () =>
    getAllLocations()
  );

  const jobLocationOptions =
    jobLocationData?.map((location: any) => ({
      value: location._ic,
      label: location.name,
    })) || [];

  const { handleSubmit, values, handleChange, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        education_description: "",
        knowledge_description: "",
        job_location_id: "65d3afcff0172be9bbc186f9",
        category_id: "65d3afb700fb52fa58d4aad7",
        vacancy: 0,
        nature: "",
        company_name: "",
        company_description: "",
        company_website: "",
        company_email: "",
      },
      onSubmit: async (values: JobFormType) => {
        jobListMutate(values);
        resetForm();
      },
    });

  const handleCategoryChange = (event:any) => {
    setFieldValue('category_id', event.value);
  }

  const handleLocationChange = (event: any) => {
    setFieldValue('location_id', event.value);
  }

  const handleSelectOnChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFieldValue(name, Number(value));
  };

  if (jobCategoryDataIsLoading || jobLocationDataIsLoading) {
    return <h1>Loading</h1>
  }

  return (
    <div className="app-wrapper">
      <div className="app-content pt-3 p-md-3 p-lg-4">
        <div className="container-xl">
          <div className="row g-3 mb-4 align-items-center justify-content-between">
            <div className="col-auto">
              <h1 className="app-page-title mb-0">Create New Jobs</h1>
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
                {/* <JobLocation /> */}
                <ReactSelect
                  options={jobLocationOptions}
                  defaultInputValue="Any - All Locations"
                  // value={{value: values.job_location_id, label: "Any - All Locations"}}
                  onChange={handleLocationChange}
                />
                <div className="mt-2">
                  {/* <JobCategories /> */}
                  <ReactSelect
                    options={jobCategoryOptions}
                    defaultInputValue="Any - All Jobs"
                    // inputValue=""
                    // value={{value: values.job_location_id, label: "Any - All Jobs"}}
                    onChange={handleCategoryChange}
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
                Create New Job
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewJob;
