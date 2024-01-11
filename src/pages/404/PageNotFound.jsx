import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import bgImg from "../../assets/notFoud-bg.webp";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        {/* <Img src={bgImg} className="notbg" /> */}
        <div className="texts">
          <div className="wrap">
          <span className="bigText">404</span>
          <span className="smallText">Page not found!</span>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
