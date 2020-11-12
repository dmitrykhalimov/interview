import React from "react";
import PropTypes from "prop-types";

const PageMain = () => {
  return (
    <React.Fragment>
      <main className="page-main">
        <section className="tech">
          <h2 className="visually-hidden">Технологии</h2>
          <form className="tech__form">
            <input id="html" type="checkbox" name="html" value="html"/>
            <label htmlFor="html">
              <svg className="tech__icon" width="50" height="57">
                <use xlinkHref="img/icons/sprite.svg#icon-html"></use>
              </svg>
              <span>HTML</span>
            </label>
            <input id="css" type="checkbox" name="css" value="css"/>
            <label htmlFor="css">
              <svg className="tech__icon" width="50" height="57">
                <path d="M45.3121 51.4578L24.9999 57L4.68729 51.4578L0 0H50L45.3121 51.4578Z" fill="#2062AF"/>
                <path d="M24.9997 4.16803V52.5797L25.0457 52.5924L41.4835 48.107L45.2777 4.16803H24.9997Z" fill="#3C9CD7"/>
                <path d="M24.9817 17.0346L10.4435 23.1701L10.9257 29.2447L24.9817 23.1546L39.9336 16.6767L40.5536 10.4626L24.9817 17.0346Z" fill="white"/>
                <path d="M10.4434 23.17L10.9255 29.2446L24.9815 23.1546V17.0345L10.4434 23.17Z" fill="url(#paint0_linear)"/>
                <path d="M40.5535 10.4628L24.9817 17.0345V23.1546L39.9336 16.6767L40.5535 10.4628Z" fill="url(#paint1_linear)"/>
                <path d="M10.4658 23.17L10.9481 29.2446L32.5153 29.3143L32.0329 37.4137L24.936 39.4383L18.1138 37.6928L17.7005 32.6655H11.3614L12.1883 42.3708L25.0049 46.2109L37.752 42.4405L39.4058 23.17H10.4658Z" fill="url(#paint2_linear)"/>
                <path opacity="0.05" d="M24.9817 23.17H10.4435L10.9257 29.2446L24.9817 29.2901V23.17ZM24.9817 39.4189L24.9128 39.4384L18.0916 37.6929L17.6782 32.6657H11.3393L12.1661 42.3709L24.9817 46.211V39.4189Z" fill="black"/>
                <path d="M9.13419 10.4628H40.5537L39.9338 16.6768H9.89204L9.13419 10.4628Z" fill="url(#paint3_linear)"/>
                <path opacity="0.05" d="M24.9818 10.4628H9.13419L9.89204 16.6768H24.9818V10.4628Z" fill="black"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="17.7125" y1="29.2447" x2="17.7125" y2="17.0347" gradientUnits="userSpaceOnUse">
                    <stop offset="0.387" stopColor="#D1D3D4" stopOpacity="0"/>
                    <stop offset="1" stopColor="#D1D3D4"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="32.7675" y1="23.1547" x2="32.7675" y2="10.4629" gradientUnits="userSpaceOnUse">
                    <stop offset="0.387" stopColor="#D1D3D4" stopOpacity="0"/>
                    <stop offset="1" stopColor="#D1D3D4"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="10.4658" y1="34.6906" x2="39.4057" y2="34.6906" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E8E7E5"/>
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear" x1="9.13419" y1="13.5698" x2="40.5535" y2="13.5698" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E8E7E5"/>
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>CSS</span>
            </label>
            <input id="js" type="checkbox" name="js" value="js"/>
            <label htmlFor="js">
              <svg className="tech__icon" width="50" height="57">
                <use xlinkHref="img/icons/sprite.svg#icon-js"></use>
              </svg>
              <span>JavaScript</span>
            </label>
            <input id="react" type="checkbox" name="react" value="react"/>
            <label htmlFor="react">
              <svg className="tech__icon" width="70" height="63">
                <use xlinkHref="img/icons/sprite.svg#icon-react"></use>
              </svg>
              <span>React</span>
            </label>
            <input id="redux" type="checkbox" name="redux" value="redux"/>
            <label htmlFor="redux">
              <svg className="tech__icon" width="52" height="50">
                <use xlinkHref="img/icons/sprite.svg#icon-redux"></use>
              </svg>
              <span>Redux</span>
            </label>
            <input id="jest" type="checkbox" name="jest" value="jest"/>
            <label htmlFor="jest">
              <svg className="tech__icon" width="50" height="56">
                <use xlinkHref="img/icons/sprite.svg#icon-jest"></use>
              </svg>
              <span>Jest</span>
            </label>
            <input id="gulp" type="checkbox" name="gulp" value="gulp"/>
            <label htmlFor="gulp">
              <svg className="tech__icon" width="35" height="75">
                <use xlinkHref="img/icons/sprite.svg#icon-gulp"></use>
              </svg>
              <span>Gulp</span>
            </label>
            <input id="webpack" type="checkbox" name="webpack" value="webpack"/>
            <label htmlFor="webpack">
              <svg className="tech__icon" width="60" height="60">
                <use xlinkHref="img/icons/sprite.svg#icon-webpack"></use>
              </svg>
              <span>Webpack</span>
            </label>
            <input id="git" type="checkbox" name="git" value="git"/>
            <label htmlFor="git">
              <svg className="tech__icon" width="50" height="50">
                <use xlinkHref="img/icons/sprite.svg#icon-git"></use>
              </svg>
              <span>Git</span>
            </label>
            <input id="tasks" type="checkbox" name="tasks" value="tasks"/>
            <label htmlFor="tasks">
              <svg className="tech__icon" width="61" height="54">
                <use xlinkHref="img/icons/sprite.svg#icon-tasks"></use>
              </svg>
              <span>Задачи</span>
            </label>
          </form>
        </section>
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
      </main>
    </React.Fragment>
  );
};

PageMain.propTypes = {};

export default PageMain;
