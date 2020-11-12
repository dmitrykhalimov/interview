import React from "react";
import PropTypes from "prop-types";

const Qusetions = () => {
  return (
    <section className="questions">
      <div className="questions__container">
        <h2>Вопрос</h2>
        <article className="questions__question">
          <h3>Javascript</h3>
          <h4>Javascript Core</h4>
          <article>
            <p>Как работает метод map? Как бы вы реализовали Array.prototype.map?</p>
          </article>
        </article>
        <div className="questions__buttons">
          <button className="questions__button">Показать ответ</button>
          <button className="questions__button">Следующий вопрос</button>
        </div>
      </div>
    </section>
  );
};

export default Qusetions;
