const Errors = ({ error = {} }) => {
  if (error.details) {
    return (
      <ul className="error-messages" data-testid="errors">
        {error.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    );
  }
  if (error.message) {
    return (
      <ul className="error-messages" data-testid="errors">
        <li>{error.message}</li>
      </ul>
    );
  }
  return <></>;
};

export default Errors;
