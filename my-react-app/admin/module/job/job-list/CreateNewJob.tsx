import { useMutation, useQuery } from "@tanstack/react-query";
import FormControl from "../../../shared/FormControl";
import { addJob, getAllCategories, getAllLocations } from "../api";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ChangeEvent, useState } from "react";
import ReactSelect from "react-select";
import { JobFormType } from "../../../shared/types";
import { createJobSchema } from "../validation";
import FormError from "../../../shared/FormError";
import clsx from "clsx";
import Loader from "../../../shared/Loader";

const CreateNewJob = () => {
  const [categorySelect, setCategorySelect] = useState({
    value: "",
    label: "Any - All Categories",
  });
  const [locationSelect, setLocationSelect] = useState({
    value: "",
    label: "Any - All Locations",
  });
  const { mutate: jobListMutate } = useMutation({
    mutationFn: (data) => addJob(data),
    onSuccess: () => {
      toast.success("Job Application added successfully");
    },
  });

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

  const {
    handleSubmit,
    values,
    errors,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: "",
      description: "",
      education_description: "",
      knowledge_description: "",
      job_location_id: "",
      category_id: "",
      vacancy: 0,
      nature: "",
      company_name: "",
      company_description: "",
      company_website: "",
      company_email: "",
    },
    validateOnChange: false,
    validationSchema: createJobSchema,
    onSubmit: (values: JobFormType) => {
      values["category_id"] = categorySelect.value;
      values["job_location_id"] = locationSelect.value;
      jobListMutate(values as any);
      resetForm();
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

  if (jobCategoryDataIsLoading || jobLocationDataIsLoading) {
    return (
      <div className="py-4 banner-height d-flex justify-content-center">
        <Loader />
      </div>
    );
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
                  className={errors.title ? "is-error" : ""}
                  type="text"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                  placeholder="Enter Job Title"
                />
                <FormError error={errors.title} />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className={clsx(
                    errors.description ? "is-error" : "",
                    "form-control"
                  )}
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Enter Job Description"
                ></textarea>
                <FormError error={errors.description} />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className={clsx(
                    errors.knowledge_description ? "is-error" : "",
                    "form-control"
                  )}
                  id="knowledge_description"
                  name="knowledge_description"
                  value={values.knowledge_description}
                  onChange={handleChange}
                  placeholder="Enter Required Knowledge, Skills, and Abilities"
                ></textarea>
                <FormError error={errors.knowledge_description} />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className={clsx(
                    errors.education_description ? "is-error" : "",
                    "form-control"
                  )}
                  id="education_description"
                  name="education_description"
                  value={values.education_description}
                  onChange={handleChange}
                  placeholder="Enter Education + Experience"
                ></textarea>
                <FormError error={errors.education_description} />
              </div>
              <div className="col-md-6 mb-3">
                <textarea
                  className={clsx(
                    errors.company_description ? "is-error" : "",
                    "form-control"
                  )}
                  value={values.company_description}
                  id="company_description"
                  name="company_description"
                  onChange={handleChange}
                  placeholder="Enter Company Job Description"
                ></textarea>
                <FormError error={errors.company_description} />
              </div>
              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={values.company_name}
                  className={errors.company_name ? "is-error" : ""}
                  id="company_name"
                  name="company_name"
                  onChange={handleChange}
                  placeholder="Enter Company Name"
                />
                <FormError error={errors.company_name} />
              </div>
              <div className="col-md-6 mb-3">
                <FormControl
                  type="email"
                  value={values.company_email}
                  className={errors.company_email ? "is-error" : ""}
                  id="company_email"
                  name="company_email"
                  onChange={handleChange}
                  placeholder="Enter Company Email"
                />
                <FormError error={errors.company_email} />
              </div>
              <div className="col-md-6 mb-3">
                <div className="">
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
                <ReactSelect
                  name="job-location"
                  onChange={handleLocationChange}
                  value={locationSelect}
                  options={jobLocationOptions}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  className={errors.vacancy ? "is-error" : ""}
                  value={values.vacancy}
                  id="vacancy"
                  name="vacancy"
                  onChange={handleSelectOnChangeEvent}
                  type="text"
                  placeholder="Enter Total Number of Vacancy"
                />
                <FormError error={errors.vacancy} />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  className={errors.nature ? "is-error" : ""}
                  value={values.nature}
                  id="nature"
                  name="nature"
                  onChange={handleChange}
                  placeholder="Enter Job nature (Full-Time/Part-Time)"
                />
                <FormError error={errors.nature} />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={values.company_website}
                  id="company_website"
                  name="company_website"
                  onChange={handleChange}
                  className={errors.company_website ? "is-error" : ""}
                  placeholder="Enter Company Website URL"
                />
                <FormError error={errors.company_website} />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary w-auto text-white p-3 m-auto mt-5"
                >
                  Create New Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewJob;
