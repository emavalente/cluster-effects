import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Warning! Error 404</h1>
      <p>this route can't show you anything</p>
      <p>{error.error.message}</p>
    </div>
  );
};

export default ErrorPage;
