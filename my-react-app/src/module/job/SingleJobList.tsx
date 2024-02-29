type SingleJobProps = {
  id: string;
  title: string;
  location: string;
  setApplyNowModal: React.Dispatch<React.SetStateAction<boolean>>;
  companyName: string;
  description: string;
  categoryId: string;
  setApplyJobData: React.Dispatch<React.SetStateAction<{
    job_id: string;
    category_id: string;
  }>>
}

const SingleJobList = ({
  id,
  title,
  categoryId,
  setApplyNowModal,
  companyName,
  location,
  description,
  setApplyJobData,
}: SingleJobProps) => {
  const onClickApply = () => {
    setApplyJobData({job_id: id, category_id: categoryId})
    setApplyNowModal(true);
  }

  return (
    <>
      <div className="single-job-items mb-30">
        <div className="job-items">
          <div className="job-tittle">
            <a href={`/job-details/${id}`}>
              <h4>{title}</h4>
            </a>
            <p>{description}</p>
            <ul>
              {companyName && <li>{companyName}</li>}
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {location}
              </li>
            </ul>
          </div>
        </div>
        <div className="items-link f-right">
          <a href={`/job-details/${id}`}>Explore</a>
          <button type="button" onClick={onClickApply}>
            Apply Now
          </button>
          {/* <ApplicationModel showModal={showModal} setShowModal={setShowModal} /> */}
        </div>
      </div>
    </>
  );
};

export default SingleJobList;
