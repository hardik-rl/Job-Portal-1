const Banner = ({ jobTitle }: { jobTitle: string }) => {
  return (
    <div className="slider-area ">
      <div className="section-overly slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap text-center">
                <h2>{jobTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
