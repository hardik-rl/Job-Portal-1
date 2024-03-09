import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const onClickApply = () => {
    setApplyJobData({ job_id: id, category_id: categoryId });
    setApplyNowModal(true);
    setJobTitle(title);
  };
  const onClickDetailPage = (id: string) => {
    setJobTitle(title);
    navigate(`/job-details/${id}`);
  };
  return (
    <>
      <div className="single-job-items mb-30">
        <div className="job-items">
          <div className="job-tittle">
            <button
              className="border-0 px-0 cursor-pointer bg-transparent"
              type="button"
              onClick={() => onClickDetailPage(id)}
            >
              <h4>{title}</h4>
            </button>
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
          <button
              className="btn-outline"
              type="button"
              onClick={() => onClickDetailPage(id)}
            >
              Explore
            </button>
          <button type="button" onClick={onClickApply}>
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleJobList;
