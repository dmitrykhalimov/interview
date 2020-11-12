import React from "react";
import PropTypes from "prop-types";
import Technologies from "../technologies/technologies";
import Topics from "../topics/topics";
import Qusetions from "../questions/questions";
import Answers from "../answers/answers";

const PageMain = () => {
  return (
    <main className="page-main">
      <Technologies/>
      <Topics/>
      <Qusetions/>
      <Answers/>
    </main>
  );
};

PageMain.propTypes = {};

export default PageMain;
