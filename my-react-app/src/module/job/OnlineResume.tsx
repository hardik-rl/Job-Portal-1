import { ModelProps } from "../../shared/components/type";
import ApplicationModel from "./ApplicationModel";

const OnlineResume = ({ showModal, setShowModal }: ModelProps) => {
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
                  Can't find your approeriate role, Don't worry upload your
                  resume here
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="border-btn2 border-btn4"
                >
                  Upload your cv
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApplicationModel showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default OnlineResume;
