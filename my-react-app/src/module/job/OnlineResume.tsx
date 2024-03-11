type OnlineResumeProps = {
  setUploadYourCVModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const OnlineResume = ({ setUploadYourCVModal }: OnlineResumeProps) => {
  return (
    <>
      <div className="online-cv cv-bg section-overly pt-90 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="cv-caption text-center">
                <p className="pera1"> JOBS</p>
                <p className="pera2">
                  {" "}
                  Can't find your appropriate role, Don't worry upload your
                  resume here
                </p>
                <button
                  onClick={() => setUploadYourCVModal(true)}
                  className="border-btn2 border-btn4"
                >
                  Upload your cv
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineResume;
