import JobSelect from "./JobSelect";

const Banner = () => {
  return (
    <div className="slider-area">
      <div className="slider-active">
        <div className="single-slider slider-height d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 col-md-10">
                <div className="hero__caption">
                  <h1>Find the most exciting jobs opportunities</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <form action="#" className="search-box">
                  <div className="input-form">
                    <input type="text" placeholder="Please Search Job" />
                  </div>
                  <div className="select-form">
                    <div className="select-itms">
                      <JobSelect />
                    </div>
                  </div>
                  <div className="search-form">
                    <a href="#">Find job</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
