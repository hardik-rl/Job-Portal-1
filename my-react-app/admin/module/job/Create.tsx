import FormControl from "../../shared/FormControl";

const Create = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-12 mb-3">
                <FormControl
                  id="exampleFormControlInput1"
                  type="text"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput1"
                  placeholder="Enter Job Title"
                />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Job Description"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Required Knowledge, Skills, and Abilities"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Education + Experience"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  id="exampleFormControlInput2"
                  type="text"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput2"
                  placeholder="Enter Job Location"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  id="exampleFormControlInput3"
                  type="text"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput3"
                  placeholder="Enter Total Number of Vacancy"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  id="exampleFormControlInput4"
                  type="text"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput4"
                  placeholder="Enter Job nature (Full-Time/Part-Time)"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  id="exampleFormControlInput5"
                  type="text"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput5"
                  placeholder="Enter Company Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Company Description"
                ></textarea>
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  id="exampleFormControlInput6"
                  type="text"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput6"
                  placeholder="Enter Company Website URL"
                />
              </div>

              <div className="col-md-6 mb-3">
                <FormControl
                  id="exampleFormControlInput7"
                  type="email"
                  onChange={() => console.log("hii")}
                  value=""
                  name="exampleFormControlInput7"
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
