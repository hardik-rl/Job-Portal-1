import { useMutation } from "@tanstack/react-query";
import FormControl from "../../../shared/FormControl";
import { addJob } from "../api";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { JobFormType } from "../types";
import JobLocation from "./JobLocation";
import { ChangeEvent } from "react";
import JobCategories from "./JobCategories";

const Create = () => {
  const { mutate: jobListMutate } = useMutation({
    mutationFn: (data) => addJob(data),
    onSuccess: () => {
      toast.success("Job Application added successfully");
    },
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      education_description: "",
      knowledge_description: "",
      job_location_id: "65c27c87c2db50470bcd4f18",
      vacancy: "",
      nature: "",
      company_name: "",
      company_description: "",
      company_website: "",
      company_email: "",
    },
    onSubmit: async (values: JobFormType) => {
      jobListMutate(values);
      formik.resetForm();
    },
  });

  const handleSelectOnChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

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
            <form className="row" onSubmit={formik.handleSubmit}>
              <div className="col-12 mb-3">
                <FormControl
                  type="text"
                  id="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  name="title"
                  placeholder="Enter Job Title"
                />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder="Enter Job Description"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="knowledge_description"
                  name="knowledge_description"
                  value={formik.values.knowledge_description}
                  onChange={formik.handleChange}
                  placeholder="Enter Required Knowledge, Skills, and Abilities"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="education_description"
                  name="education_description"
                  value={formik.values.education_description}
                  onChange={formik.handleChange}
                  placeholder="Enter Education + Experience"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <JobLocation />
                <div className="mt-2">
                  <JobCategories />
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  value={formik.values.vacancy}
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
                  value={formik.values.nature}
                  id="nature"
                  name="nature"
                  onChange={formik.handleChange}
                  placeholder="Enter Job nature (Full-Time/Part-Time)"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={formik.values.company_name}
                  id="company_name"
                  name="company_name"
                  onChange={formik.handleChange}
                  placeholder="Enter Company Name"
                />
              </div>
              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  value={formik.values.company_description}
                  id="company_description"
                  name="company_description"
                  onChange={formik.handleChange}
                  placeholder="Enter Company Job Description"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="text"
                  value={formik.values.company_website}
                  id="company_website"
                  name="company_website"
                  onChange={formik.handleChange}
                  placeholder="Enter Company Website URL"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  type="email"
                  value={formik.values.company_email}
                  id="company_email"
                  name="company_email"
                  onChange={formik.handleChange}
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

export default Create;
