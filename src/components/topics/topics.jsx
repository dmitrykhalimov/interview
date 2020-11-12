import React from "react";
import PropTypes from "prop-types";

const Topics = () => {
  return (
    <section className="topics">
      <h2 className="visually-hidden">Технологии</h2>
      <form className="topics__form">
        <input className="topics__input" id="html-core" type="checkbox" name="html-core" value="html-core"/>
        <label className="topics__label" htmlFor="html-core">HTML Core</label>
        <input className="topics__input" id="html-semantic" type="checkbox" name="html-semantic" value="html-semantic"/>
        <label className="topics__label" htmlFor="html-semantic">Семантическая верстка</label>
        <input className="topics__input" id="html-BEM" type="checkbox" name="html-BEM" value="html-BEM"/>
        <label className="topics__label" htmlFor="html-BEM">БЭМ</label>
        <input className="topics__input" id="js-core" type="checkbox" name="js-core" value="js-core"/>
        <label className="topics__label" htmlFor="js-core">JavaScript-Core</label>
        <input className="topics__input" id="js-es5" type="checkbox" name="js-es5" value="js-es5"/>
        <label className="topics__label" htmlFor="js-es5">ES5</label>
        <input className="topics__input" id="js-es6" type="checkbox" name="js-es6" value="js-es6"/>
        <label className="topics__label" htmlFor="js-es6">ES2015+</label>
        <input className="topics__input" id="react-core" type="checkbox" name="react-core" value="react-core"/>
        <label className="topics__label" htmlFor="react-core">React-core</label>
        <input className="topics__input" id="react-router" type="checkbox" name="react-router" value="react-router"/>
        <label className="topics__label" htmlFor="react-router">React-router</label>
        <input className="topics__input" id="redux-core" type="checkbox" name="redux-core" value="redux-core"/>
        <label className="topics__label" htmlFor="redux-core">Redux-core</label>
      </form>
    </section>
  );
};

export default Topics;
