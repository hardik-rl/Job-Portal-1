import useStore from "../../shared/store/useStore";

type SingleJobProps = {
  id: string;
  title: string;
  location: string;
  setApplyNowModal: React.Dispatch<React.SetStateAction<boolean>>;
  companyName: string;
  description: string;
  categoryId: string;
  setApplyJobData: React.Dispatch<
    React.SetStateAction<{
      job_id: string;
      category_id: string;
    }>
  >;
};

const SingleJobList = ({
  id,
  title,
  categoryId,
  setApplyNowModal,
  location,
  description,
  setApplyJobData,
}: SingleJobProps) => {
  const { setJobTitle } = useStore();
  const onClickApply = () => {
    setApplyJobData({ job_id: id, category_id: categoryId });
    setApplyNowModal(true);
    setJobTitle(title);
  };
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
              <li>
                {location && <i className="fas fa-map-marker-alt"></i>}
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
        </div>
      </div>
    </>
  );
};

export default SingleJobList;
