import React from "react";
import PropTypes from "prop-types";

const Answers = () => {
  return (
    <section className="answer">
      <div className="answer__container">
        <article>
          <p>Метод «arr.map(callback[, thisArg])» используется для трансформации массива.</p>
          <p>Он создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.</p>
          <pre><code className="javascript first">
              var names = ['HTML', 'CSS', 'JavaScript'];
          </code></pre>
          <p>Его реализация может выглядеть следующим образом</p>
          <pre><code className="javascript">
                sdfsdf function
          </code></pre>
          <h3>Источники: </h3>
          <ul>
            <li>
              <a href="https://learn.javascript.ru/">1. https://learn.javascript.ru/</a>
            </li>
          </ul>
          <h3>Материалы: </h3>
          <ul>
            <li>
              <a href="https://learn.javascript.ru/">1. https://learn.javascript.ru/</a>
            </li>
            <li>
              <a href="https://learn.javascript.ru/">2. https://learn.javascript.ru/</a>
            </li>
            <li>
              <a href="https://learn.javascript.ru/">3. https://learn.javascript.ru/</a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Answers;
