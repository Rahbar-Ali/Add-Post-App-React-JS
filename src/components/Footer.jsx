const Footer = () => {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <p className="text-body-secondary">© 2024</p>
        </div>

        <div className="col mb-3"></div>
      </footer>
    </div>
  );
};

export default Footer;
