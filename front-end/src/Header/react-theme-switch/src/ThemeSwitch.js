import React, { Fragment, useRef, useEffect, useState } from 'react';

const ThemeSwitch = ({ preserveRasters = true, storeKey = 'ThemeSwitch' }) => {
  const cssString = `
        html { filter: invert(100%); background-color: #bbb}
        * { background-color: inherit }
        .menu { background-color: #eee}
        img { background-color: }
        .bm-menu {
          background-color: #;
        }
        .bm-item {
          background-color: #2a90ab;
        }
        #conteudo_cartCadas {background-color: #ccc;}
      `;

  const isDeclarationSupported = (property, value) => {
    const prop = property + ':',
      el = document.createElement('test'),
      mStyle = el.style;
    el.style.cssText = prop + value;
    return mStyle[property];
  };

  const supported = useRef(!!isDeclarationSupported('filter', 'invert(100%)'));

  const [css, setCss] = useState(cssString);
  const [active, setActive] = useState(
    localStorage.getItem(storeKey) === 'true' || (!localStorage.getItem(storeKey) && matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (preserveRasters) {
      setCss(`${cssString}`);
    }
    return () => {
      setCss(cssString);
    };
  }, [preserveRasters]);

  useEffect(() => {
    localStorage.setItem(storeKey, active);
  }, [active, storeKey]);

  const toggle = () => {
    setActive(a => !a);
  };

  return (
    supported.current && (
      <Fragment>
        <label class="switch">

          <span aria-pressed={active} onClick={toggle}>
            <input type="checkbox" aria-pressed={active} onClick={toggle} />
            <span class="slider round" aria-hidden="true"></span></span>
          <style media={active ? 'none' : 'screen'}>
            {active ? css.trim() : css}
          </style>
        </label>

      </Fragment>
    )
  );
};

export default ThemeSwitch;