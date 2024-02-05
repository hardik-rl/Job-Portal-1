const Banner = () => {
  return (
    <div className="slider-area">
      <div className="slider-active">
        <div
          className="single-slider slider-height d-flex align-items-center"
        >
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
                      <select name="select" id="select1">
                        <option value="">Any - All Locations</option>
                        <option value="">Mumbai - HO</option>
                        <option value="">Akkalkot Road-Solapur</option>
                        <option value="">Chincholi - Solapur</option>
                        <option value="">Ankhleshwar</option>
                        <option value="">Panoli</option>
                        <option value="">Indore</option>
                        <option value="">Dahej</option>
                      </select>
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
