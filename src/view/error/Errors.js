const Errors = ({ errors }) => {
  return (
    <ul className="error-messages" data-testid="errors">
      {errors.map((error) => (
        <li key={error.code}>{error.message}</li>
      ))}
    </ul>
  );
};

export default Errors;
