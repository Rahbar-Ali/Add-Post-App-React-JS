const LoadingSpinner = () => {
  return (
    <div className="text-center spinload">
      <div
        class="spinner-border text-danger"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
