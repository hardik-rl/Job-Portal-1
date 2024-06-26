const HowItWorks = () => {
  return (
    <div className="apply-process-area apply-bg pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Apply process</span>
              <h2> How it works</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span className="flaticon-search"></span>
              </div>
              <div className="process-cap">
                <h5>1. Search a job</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span className="flaticon-curriculum-vitae"></span>
              </div>
              <div className="process-cap">
                <h5>2. Apply for job</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span className="flaticon-tour"></span>
              </div>
              <div className="process-cap">
                <h5>3. Get your job</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
