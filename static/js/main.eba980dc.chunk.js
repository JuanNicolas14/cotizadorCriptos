(this.webpackJsonpcriptomonedas=this.webpackJsonpcriptomonedas||[]).push([[0],{25:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,d,l,u,b,j,p,f=t(1),m=t.n(f),O=t(18),x=t.n(O),h=(t(25),t(6)),g=t.n(h),v=t(7),k=t(4),y=t(2),w=t(3),S=t.p+"static/media/cryptomonedas.51f1d2ed.png",C=t(0),N=w.a.p(a||(a=Object(y.a)(['\n  background-color: #b7322c;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  font-family: "Bebas Neue", cursive;\n']))),E=function(e){var n=e.mensaje;return Object(C.jsx)(N,{children:n})},z=w.a.label(c||(c=Object(y.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n']))),D=w.a.select(r||(r=Object(y.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]))),I=function(e,n,t){var a=Object(f.useState)(n),c=Object(k.a)(a,2),r=c[0],o=c[1];return[r,function(){return Object(C.jsxs)(f.Fragment,{children:[Object(C.jsx)(z,{children:e}),Object(C.jsxs)(D,{onChange:function(e){return o(e.target.value)},value:r,children:[Object(C.jsx)("option",{value:"",children:"-- Seleccione --"}),t.map((function(e){return Object(C.jsx)("option",{value:e.codigo,children:e.nombre},e.codigo)}))]})]})},o]},P=w.a.label(o||(o=Object(y.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n']))),U=w.a.select(i||(i=Object(y.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  -webkit-appearance: none;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]))),A=function(e,n,t){var a=Object(f.useState)(n),c=Object(k.a)(a,2),r=c[0],o=c[1];return[r,function(){return Object(C.jsxs)(f.Fragment,{children:[Object(C.jsx)(P,{children:e}),Object(C.jsxs)(U,{onChange:function(e){return o(e.target.value)},value:r,children:[Object(C.jsx)("option",{value:"",children:"-- Seleccione --"}),t.map((function(e){return Object(C.jsx)("option",{value:e.CoinInfo.Name,children:e.CoinInfo.FullName},e.CoinInfo.Id)}))]})]})},o]},B=t(8),F=t.n(B),T=w.a.input(s||(s=Object(y.a)(["\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2fe;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #326ac0;\n    cursor: pointer;\n  }\n"]))),L=function(e){var n=e.guardarMoneda,t=e.guardarCriptomoneda,a=Object(f.useState)([]),c=Object(k.a)(a,2),r=c[0],o=c[1],i=Object(f.useState)(!1),s=Object(k.a)(i,2),d=s[0],l=s[1],u=I("Elige tu Moneda","",[{codigo:"USD",nombre:"Dolar de Estados Unidos"},{codigo:"MXN",nombre:"Peso Mexicano"},{codigo:"EUR",nombre:"Euro"},{codigo:"GBP",nombre:"Libra Esterlina"}]),b=Object(k.a)(u,2),j=b[0],p=b[1],m=A("Elige tu Criptomoneda","",r),O=Object(k.a)(m,2),x=O[0],h=O[1];Object(f.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,F.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:n=e.sent,o(n.data.Data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==j&&""!==x?(l(!1),n(j),t(x)):l(!0)},children:[d?Object(C.jsx)(E,{mensaje:"Todos los campos son obligatorios"}):null,Object(C.jsx)(p,{}),Object(C.jsx)(h,{}),Object(C.jsx)(T,{type:"submit",value:"Calcular"})]})},M=w.a.div(d||(d=Object(y.a)(["\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n"]))),H=w.a.p(l||(l=Object(y.a)(["\n  font-size: 18px;\n\n  span {\n    font-weight: bold;\n  }\n"]))),G=w.a.p(u||(u=Object(y.a)(["\n  font-size: 30px;\n\n  span {\n    font-weight: bold;\n  }\n"]))),R=function(e){var n=e.resultado;return 0===Object.keys(n).length?null:Object(C.jsxs)(M,{children:[Object(C.jsxs)(G,{children:["El precio es: ",Object(C.jsx)("span",{children:n.PRICE})]}),Object(C.jsxs)(H,{children:["Precio mas alto del dia: ",Object(C.jsx)("span",{children:n.HIGHDAY})]}),Object(C.jsxs)(H,{children:["Precio mas bajo del dia: ",Object(C.jsx)("span",{children:n.LOWDAY})]}),Object(C.jsxs)(H,{children:["Variacion ultimas 24 horas: ",Object(C.jsx)("span",{children:n.CHANGEPCT24HOUR})]}),Object(C.jsxs)(H,{children:["Ultima actualizacion: ",Object(C.jsx)("span",{children:n.LASTUPDATE})]})]})},Y=(t(49),function(){return Object(C.jsxs)("div",{className:"sk-chase",children:[Object(C.jsx)("div",{className:"sk-chase-dot"}),Object(C.jsx)("div",{className:"sk-chase-dot"}),Object(C.jsx)("div",{className:"sk-chase-dot"}),Object(C.jsx)("div",{className:"sk-chase-dot"}),Object(C.jsx)("div",{className:"sk-chase-dot"}),Object(C.jsx)("div",{className:"sk-chase-dot"})]})}),J=w.a.div(b||(b=Object(y.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n  @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]))),V=w.a.img(j||(j=Object(y.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]))),W=w.a.h1(p||(p=Object(y.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  font-size: 50px;\n  margin-bottom: 50px;\n  margin-top: 80px;\n\n  &::after {\n    content: "";\n    width: 100px;\n    height: 6px;\n    background-color: #66a2fe;\n    display: block;\n  }\n'])));var X=function(){var e=Object(f.useState)(""),n=Object(k.a)(e,2),t=n[0],a=n[1],c=Object(f.useState)(""),r=Object(k.a)(c,2),o=r[0],i=r[1],s=Object(f.useState)({}),d=Object(k.a)(s,2),l=d[0],u=d[1],b=Object(f.useState)(!1),j=Object(k.a)(b,2),p=j[0],m=j[1];Object(f.useEffect)((function(){(function(){var e=Object(v.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return n="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(o,"&tsyms=").concat(t),e.next=5,F.a.get(n);case 5:a=e.sent,m(!0),setTimeout((function(){m(!1),u(a.data.DISPLAY[o][t])}),3e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,o]);var O=p?Object(C.jsx)(Y,{}):Object(C.jsx)(R,{resultado:l});return Object(C.jsxs)(J,{children:[Object(C.jsx)("div",{children:Object(C.jsx)(V,{src:S,alt:"imagen cripto"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)(W,{children:"Cotiza Criptomonedas al Instante"}),Object(C.jsx)(L,{guardarMoneda:a,guardarCriptomoneda:i}),O]})]})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};x.a.render(Object(C.jsx)(m.a.StrictMode,{children:Object(C.jsx)(X,{})}),document.getElementById("root")),q()}},[[50,1,2]]]);
//# sourceMappingURL=main.eba980dc.chunk.js.map