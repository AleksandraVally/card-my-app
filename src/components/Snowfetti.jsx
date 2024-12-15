import React, { useEffect } from 'react';

function Snowfetti({ el, opt_properties }) {
  useEffect(() => {
    function randInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function baseEncode(vall = document.querySelector("#usrInput").value) {
      let usrVal = vall.replace(/\s\s+/g, ` `);
      let btoa = window.btoa(usrVal);
      let res = encodeURI(vall);
      if (res.indexOf("xmlns=") == -1) res = res.replace(`%3Csvg`, `%3Csvg xmlns=%22http://www.w3.org/2000/svg%22`);
      res = res.replaceAll(`#`, `%23`).replaceAll(`%22`, `'`).replaceAll(`%0A`, ``).replaceAll(`%09`, ``).replaceAll(`%20`, ` `).replace(/\s\s+/g, ` `);
      let baseEncodedSVG = `data:image/svg+xml,${res}`;
      let bgIm = `background-image: url("${baseEncodedSVG}");`;
      return [`data:image/svg+xml;base64,${btoa}`, baseEncodedSVG];
    }

    function snowfetti(el = document.body, opt_properties) {
      if (!el) {
        console.error("Must have element to populate the confetti!");
        return;
      }
      const defaultProperties = {
        addBlur: true,
        angle: 0,
        beginStart: false,
        drop: 400,
        fadeout: true,
        fixedSize: false,
        flakes: 100,
        scale: 1,
        speed: 5000,
        spread: 400,
        spin: true,
        zSpin: true
      };
      const c = { ...defaultProperties, ...opt_properties };
      const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      const baseEncode = (vall = document.querySelector("#usrInput").value) => {
        let usrVal = vall.replace(/\s\s+/g, ` `);
        let btoa = window.btoa(usrVal);
        let res = encodeURI(vall);
        if (res.indexOf("xmlns=") == -1) res = res.replace(`%3Csvg`, `%3Csvg xmlns=%22http://www.w3.org/2000/svg%22`);
        res = res.replaceAll(`#`, `%23`).replaceAll(`%22`, `'`).replaceAll(`%0A`, ``).replaceAll(`%09`, ``).replaceAll(`%20`, ` `).replace(/\s\s+/g, ` `);
        let baseEncodedSVG = `data:image/svg+xml,${res}`;
        let bgIm = `background-image: url("${baseEncodedSVG}");`;
        return [`data:image/svg+xml;base64,${btoa}`, baseEncodedSVG];
      };
      const oo = randInt(80,100)/100;
      const hh = c.drop;
      const ww = c.spread;
      const randomBlur = () => {
        if (c.addBlur) return randInt(1, 2);
        else return 1;
      };
      const overlayId = `conf${randInt(0, 1000)}etti${randInt(0, 1000)}ver${randInt(0, 1000)}lay`;
      let animatedConfetti = ``;
      
      if (!c.flakes || Number.isNaN(c.flakes * 1)) {
        c.flakes = 100;
      }
      for (let i = 0; i < c.flakes; i++) {
        const conId = `con${randInt(0, 1000)}fet${randInt(0, 1000)}ti${randInt(0, 1000)}`;
        const confettiDur = `${randInt(c.speed / 2, c.speed)}`;
        let confettiSpin = ``;
        let confettiType = ``;
        if (c.spin) {
          confettiSpin = `<animateTransform attributeName="transform" type="rotate" values="0 0 0; ${(Math.random() < 0.5 ? -1 : 1) * 360} 0 0" dur="${randInt(c.speed / 6, c.speed / 2)}ms" begin="0s" fill="freeze" />`;
          confettiType = `<circle cx="0" cy="0" r="${randInt(1, 3)}" fill="white" opacity="${randInt(10, 100) / 100}" style="mix-blend-mode: screen;" />`;
        } else {
          confettiType = `<circle cx="0" cy="0" r="${randInt(1, 3)}" fill="white" opacity="${randInt(10, 100) / 100}" style="mix-blend-mode: screen;" />`;
        }
        animatedConfetti += `<div id="${conId}" style="position: absolute; top: -${randInt(0, hh)}px; left: ${randInt(0, ww)}px; animation: snow ${confettiDur}ms linear infinite;${confettiSpin}${confettiType}</div>`;
      }
      el.innerHTML += animatedConfetti;
    }

    snowfetti(el, opt_properties);
  }, [el, opt_properties]);

  return null;
}

export default Snowfetti;
