const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="col-xl-10 col-lg-10">
      <div className="footer-copy-right">
        <p>
          Copyright &copy; <span>{currentYear}</span>
          <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colorlib
          </a>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
