const LoadMore = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center mt-2">
      <button onClick={handleClick}>Daha Fazla</button>
    </div>
  );
};

export default LoadMore;
