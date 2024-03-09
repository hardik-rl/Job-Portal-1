import { useMutation, useQuery } from "@tanstack/react-query";
import FormControl from "../../../shared/FormControl";
import { addJob, getAllCategories, getAllLocations } from "../api";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useState } from "react";
import ReactSelect from "react-select";
import { JobFormType } from "../../../shared/types";
import { createJobSchema } from "../validation";
import FormError from "../../../shared/FormError";
import clsx from "clsx";
import Loader from "../../../shared/Loader";
import FormLabel from "../../../../src/components/FormLabel";

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
      vacancy: "",
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
      setCategorySelect({
        value: "",
        label: "Any - All Categories",
      });
      setLocationSelect({
        value: "",
        label: "Any - All Locations",
      });
    },
  });

  const handleCategoryChange = (event: any) => {
    setCategorySelect(event);
  };

  const handleLocationChange = (event: any) => {
    setLocationSelect(event);
  };

  // const handleSelectOnChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFieldValue(name, Number(value));
  // };

  const handleOnChangeEvent = (event: any) => {
    const value = event?.target.value.replace(/[^\d]/g, '');
    setFieldValue(event?.target.name, value.slice(0, 10));

    // setFieldValue(event?.target.name, Number(event.target.value));
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
                <FormLabel name="Enter Job Title" htmlFor="title" />
                <FormControl
                  className={errors.title ? "is-error" : ""}
                  type="text"
                  id="title"
                  onChange={handleChange}
                  value={values.title}
                  name="title"
                />
                <FormError error={errors.title} />
              </div>

              <div className="col-md-6 mb-3">
                <FormLabel name="Enter Job Description" htmlFor="description" />
                <textarea
                  className={clsx(
                    errors.description ? "is-error" : "",
                    "form-control"
                  )}
                  id="description"
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                ></textarea>
                <FormError error={errors.description} />
              </div>

              <div className="col-md-6 mb-3">
                <FormLabel
                  name="Enter Required Knowledge, Skills, and Abilities"
                  htmlFor="knowledge_description"
                />
                <textarea
                  className={clsx(
                    errors.knowledge_description ? "is-error" : "",
                    "form-control"
                  )}
                  id="knowledge_description"
                  name="knowledge_description"
                  value={values.knowledge_description}
                  onChange={handleChange}
                ></textarea>
                <FormError error={errors.knowledge_description} />
              </div>

              <div className="col-md-6 mb-3">
                <FormLabel
                  name="Enter Education + Experience"
                  htmlFor="education_description"
                />
                <textarea
                  className={clsx(
                    errors.education_description ? "is-error" : "",
                    "form-control"
                  )}
                  id="education_description"
                  name="education_description"
                  value={values.education_description}
                  onChange={handleChange}
                ></textarea>
                <FormError error={errors.education_description} />
              </div>
              <div className="col-md-6 mb-3">
                <FormLabel
                  name="Enter Company Job Description"
                  htmlFor="company_description"
                />
                <textarea
                  className={clsx(
                    errors.company_description ? "is-error" : "",
                    "form-control"
                  )}
                  value={values.company_description}
                  id="company_description"
                  name="company_description"
                  onChange={handleChange}
                ></textarea>
                <FormError error={errors.company_description} />
              </div>
              <div className="col-md-6 mb-3">
                <FormLabel name="Enter Company Name" htmlFor="company_name" />
                <FormControl
                  type="text"
                  value={values.company_name}
                  className={errors.company_name ? "is-error" : ""}
                  id="company_name"
                  name="company_name"
                  onChange={handleChange}
                />
                <FormError error={errors.company_name} />
              </div>
              <div className="col-md-6 mb-3">
                <FormLabel name="Enter Company Email" htmlFor="email" />
                <FormControl
                  type="email"
                  value={values.company_email}
                  className={errors.company_email ? "is-error" : ""}
                  id="company_email"
                  name="company_email"
                  onChange={handleChange}
                />
                <FormError error={errors.company_email} />
              </div>
              <div className="col-md-6 mb-3">
                <FormLabel
                  name="Enter Job Categories"
                  htmlFor="job-categories"
                />
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
                <FormLabel name="Enter Job Location" htmlFor="job-location" />
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
                <FormLabel
                  name="Enter Total Number of Vacancy"
                  htmlFor="vacancy"
                />
                <FormControl
                  className={errors.vacancy ? "is-error" : ""}
                  value={values.vacancy}
                  id="vacancy"
                  name="vacancy"
                  onChange={handleOnChangeEvent}
                  type="number"
                />
                <FormError error={errors.vacancy} />
              </div>

              <div className="col-md-6 mb-3">
                <FormLabel
                  name="Enter Job nature (Full-Time/Part-Time)"
                  htmlFor="nature"
                />
                
                <select
                  className={clsx(
                    errors.nature ? "is-error" : "",
                    "form-control"
                  )}
                  id="nature"
                  value={values.nature}
                  name="nature"
                  onChange={handleChange}
                >
                  <option value="select">Select Nature</option>
                  <option value="male">Part time</option>
                  <option value="female">Full time</option>
                </select>
                {/* <FormControl
                  type="text"
                  className={errors.nature ? "is-error" : ""}
                  value={values.nature}
                  id="nature"
                  name="nature"
                  onChange={handleChange}
                /> */}
                <FormError error={errors.nature} />
              </div>

              <div className="col-md-6 mb-3">
                <FormLabel
                  name="Enter Company Website URL"
                  htmlFor="company_website"
                />
                <FormControl
                  type="text"
                  value={values.company_website}
                  id="company_website"
                  name="company_website"
                  onChange={handleChange}
                  className={errors.company_website ? "is-error" : ""}
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
