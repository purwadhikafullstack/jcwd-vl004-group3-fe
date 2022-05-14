import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/admin", { replace: true });
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h2>Taking you to the admin page...</h2>
    </>
  );
};

export default Landing;
