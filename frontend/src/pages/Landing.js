import React, { Fragment } from "react";
import CtaTop from "../components/ctaTop/CtaTop";
import Header from "../components/header/Header";
import CourseSlider from "../components/courseSlider/CourseSlider";

function Landing() {
  return (
    <Fragment>
      <CtaTop />
      <CourseSlider />
    </Fragment>
  );
}

export default Landing;
