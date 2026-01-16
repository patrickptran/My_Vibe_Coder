"use client";

const ErrorPage = ({ error }: { error: Error }) => {
  return <div> Global Root Error: {error.message}</div>;
};

export default ErrorPage;
