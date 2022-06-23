import React, { Fragment, useRef, useEffect, useState } from 'react';

const ThemeSwitch = ({ preserveRasters = true, storeKey = 'ThemeSwitch' }) => {
  const cssString = `
        html {background-color: #333}
        * { background-color: inherit }
        .menu { background-color: #51432C;
        border-color: #222;
        }
        #iconeperfil, #redessociais {
          filter: invert(100%);
          background-color: transparent;
        }
        .bm-menu {
          background-color: #0F1233;
        }
        .bm-item {
          background-color: #0F1233;
          border-color: #2E281C;
        }
        #conteudo_cartCadas, #conteudo_cartLogin {background-color: #bbb;}
        .bm-burger-bars {
          background-color: #eee;
      }
        .navMenu ul li a {
          color: #eee;
        }
      
        #menu2 .bm-menu {
          background-color: transparent;
        }
        p, h3 {
          color: #eee;
        }
        #ergolist {
          color: #eee;
        }
        .bm-burger-bars-hover {
          background-color: #557780;
          transition: 0.5s;
      }
      img {
        background-color: transparent;
      }
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