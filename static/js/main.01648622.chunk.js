(this["webpackJsonpqieyun-autoderiver"]=this["webpackJsonpqieyun-autoderiver"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(14),c=n.n(i),s=(n(52),n(53),n(31)),o=n(22),l=n(5),u=n(30),p=n(3),h=n(10),d=n(11),j=n(13),m=n(12),f=n(6),b=n(43),O=n.n(b);n(57);var g={init:function(){var e=document.createElement("div");e.classList.add("large-tooltip-outer");var t=document.createElement("div");return t.classList.add("large-tooltip-inner"),e.appendChild(t),t.classList.add("large-tooltip-hidden"),document.body.appendChild(e),{addTooltip:function(e,n){function r(){var r=n.getBoundingClientRect(),a=r.top+window.pageYOffset,i=r.left+window.pageXOffset;c.a.render(e,t);var s=t.getBoundingClientRect(),o=s.height,l=s.width,u=a-o,p=i-l/2,h=parseFloat(getComputedStyle(document.body).fontSize);p=p<h?h:p;var d=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.documentElement.clientWidth)-h-l;p=p>d?d:p,t.style.top=u+"px",t.style.left=p+"px",t.classList.remove("large-tooltip-hidden")}function a(){t.classList.add("large-tooltip-hidden")}n.addEventListener("mouseenter",r,!1),n.addEventListener("touchstart",r,!1),n.addEventListener("mouseleave",a,!1),n.addEventListener("touchend",a,!1)}}}},v=n(0),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).props.entries.length&&(r.state={rubyClass:r.props.entries.length>1?"entry-multiple entry-unresolved":"",pronunciation:r.props.entries[0][0]}),r}return Object(d.a)(n,[{key:"handleClick",value:function(e){this.setState((function(t){return{pronunciation:e,rubyClass:t.rubyClass.replace(" entry-unresolved","")}}))}},{key:"render",value:function(){var e=this;if(!this.props.entries.length)return Object(v.jsx)(v.Fragment,{children:this.props.ch});var t=Object(v.jsx)("div",{className:"tooltip-items-wrapper",children:this.props.entries.map((function(t,n){var r=Object(l.a)(t,2),i=r[0],c=r[1];return Object(v.jsxs)("p",{className:"tooltip-item"+(e.props.entries.length>1&&i===e.state.pronunciation?" selected":""),onClick:function(){return e.handleClick(i)},children:[Object(v.jsx)("span",{className:"nowrap",lang:"och-Latn-fonipa",children:i.join(" / ")})," ",c.map((function(e,t){var n=e.\u5b57\u982d,r=e.\u89e3\u91cb,i=e.\u97f3\u97fb\u5730\u4f4d,c=i.\u53cd\u5207(n);return c=null==c?"":"".concat(c,"\u5207 "),Object(v.jsxs)(a.a.Fragment,{children:[0!==t&&Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"tooltip-ch",children:n})," ",i.\u63cf\u8ff0," ",c+r]},t)}))]},n)}))});return Object(v.jsx)("span",{className:"ruby-wrapper",ref:function(n){return n&&e.props.tooltip.addTooltip(t,n)},children:Object(v.jsxs)("ruby",{className:this.state.rubyClass,children:[this.props.ch,Object(v.jsx)("rp",{children:"("}),Object(v.jsx)("rt",{lang:"och-Latn-fonipa",children:Q(this.state.pronunciation)}),Object(v.jsx)("rp",{children:")"})]})})}}]),n}(a.a.Component),y=n(44),C=n(45),S=(n(78),n(79),n(80),n(81),n(82),n(83),n(84),n(86),n(87),n(88),n(89),n(90),n(91),n(92),n(93),n(94),n(95),n(96),n(97),n(1)),k=n(4),w=n.n(k),A=n(46),N=n.n(A),T=n(47),P=n.n(T);window.JSHINT=C.JSHINT;var F=f["\u97f3\u97fb\u5730\u4f4d"].from\u63cf\u8ff0("\u5e6b\u4e09\u51e1\u5165"),I=Object.getOwnPropertyNames(F).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(F)).slice(1)),L=["\u97f3\u97fb\u5730\u4f4d","\u5b57\u982d"],B=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var r;Object(h.a)(this,n);var a=(r=t.call(this,e)).setParameters(e.input);return a&&e.setSchemaState(Object(p.a)(Object(p.a)({},e),{},{parameters:a})),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadSchema()}},{key:"autocomplete",value:function(e,t){if(null===this||void 0===this?void 0:this.props.autocomplete){var n,r=e.getCursor(),a=e.getTokenAt(r),i=Object(S.Pos)(r.line,a.start),c=Object(S.Pos)(r.line,a.end),s=function(){return n=n.filter((function(e){return e.startsWith(a.string)&&e!==a.string}))};switch(e.getTokenAt(Object(S.Pos)(r.line,a.start-1)).string){case"\u97f3\u97fb\u5730\u4f4d":n=I;break;case"\u9078\u9805":n=Object.keys(this.props.parameters);break;default:return n=L.concat(Object.keys(this.props.parameters).length?["\u9078\u9805"]:[]),r.ch===a.end&&/[\s!-#%-/:-@[-^`{-~]$/.test(a.string)?i=c:s(),{list:n,from:i,to:c}}if("."===a.string)i=c;else{if("."!==e.getTokenAt(i).string)return;s()}return{list:n,from:i,to:c}}}},{key:"loadSchema",value:function(e){var t=this;e&&e.preventDefault(),G("https://raw.githubusercontent.com/uliloewi/qieyun-examples/main/".concat(this.props.name,".js"),(function(n){if(e&&t.props.input&&t.props.input!==t.props.original)w.a.fire({showClass:{popup:""},hideClass:{popup:""},title:"\u662f\u5426\u78ba\u5b9a\u8f09\u5165\uff1f",text:"\u60a8\u6703\u907a\u5931\u6240\u6709\u8b8a\u66f4\u3002",icon:"warning",showCancelButton:!0,confirmButtonText:"\u78ba\u5b9a",cancelButtonText:"\u53d6\u6d88"}).then((function(e){e.isConfirmed&&t.props.setSchemaState(Object(p.a)(Object(p.a)({},t.props),{},{input:n,original:n,parameters:t.setParameters(n)||{}}))}));else{var r=Object(p.a)(Object(p.a)({},t.props),{},{original:n});!e&&t.props.input||(r.input=n,r.parameters=t.setParameters(n)||{}),t.props.setSchemaState(r)}}))}},{key:"changeSchema",value:function(e){this.props.setSchemaState(Object(p.a)(Object(p.a)({},this.props),{},{name:e.target.value}))}},{key:"deleteSchema",value:function(){var e=this;this.props.input&&this.props.input!==this.props.original?w.a.fire({showClass:{popup:""},hideClass:{popup:""},title:"\u662f\u5426\u78ba\u5b9a\u522a\u9664\uff1f",text:"\u60a8\u6703\u907a\u5931\u6240\u6709\u8b8a\u66f4\u3002",icon:"warning",showCancelButton:!0,confirmButtonText:"\u78ba\u5b9a",cancelButtonText:"\u53d6\u6d88"}).then((function(t){t.isConfirmed&&e.props.deleteSchema(e.props)})):this.props.deleteSchema(this.props)}},{key:"setParameters",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.parameters;try{var n=Object.fromEntries(new Function("\u97f3\u97fb\u5730\u4f4d","\u5b57\u982d","\u9078\u9805",e)(null,null,null));return Object.keys(n).forEach((function(e){Array.isArray(n[e])?e in t&&Array.isArray(t[e])&&n[e].slice(1).includes(t[e][0])?n[e][0]=t[e][0]:"number"===typeof n[e][0]&&n[e][0]>=1&&n[e][0]<n[e].length?n[e][0]=n[e][n[e][0]]:n[e].slice(1).includes(n[e][0])||(n[e][0]=n[e][1]):e in t&&typeof t[e]===typeof n[e]&&(n[e]=t[e])})),n}catch(r){}}},{key:"resetParameters",value:function(){this.props.setSchemaState(Object(p.a)(Object(p.a)({},this.props),{},{parameters:this.setParameters(this.props.input,{})||{}}))}},{key:"render",value:function(){var e=this,t=function(t,n){Array.isArray(e.props.parameters[t])?e.props.parameters[t][0]=n:e.props.parameters[t]=n,e.props.setSchemaState(Object(p.a)({},e.props))},n=Object.entries(this.props.parameters).map((function(e,n){var r=Object(l.a)(e,2),a=r[0],i=r[1];if(Array.isArray(i))return Object(v.jsxs)("label",{children:[a,Object(v.jsx)("select",{onChange:function(e){return t(a,JSON.parse(e.target.value))},value:JSON.stringify(i[0]),children:i.slice(1).map((function(e,t){return Object(v.jsx)("option",{value:JSON.stringify(e),children:e+""},t+1)}))})]},n);switch(typeof i){case"boolean":return Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",checked:i,onChange:function(e){return t(a,e.target.checked)}}),a]},n);case"number":return Object(v.jsxs)("label",{children:[a,Object(v.jsx)("input",{type:"number",value:i,step:"any",onChange:function(e){return t(a,+e.target.value)}})]},n);case"string":return Object(v.jsxs)("label",{children:[a,Object(v.jsx)("input",{type:"text",value:i,onChange:function(e){return t(a,e.target.value)}})]},n);default:return null}})).filter((function(e){return e}));return n.push(n.length?Object(v.jsx)("input",{className:"pure-button",type:"button",value:"\u6062\u5fa9\u9810\u8a2d\u503c",onClick:function(){return e.resetParameters()}},"reset"):Object(v.jsx)("span",{className:"hint",children:"\u6b64\u63a8\u5c0e\u65b9\u6848\u7121\u53ef\u7528\u9078\u9805\uff0c\u8acb\u65bc\u63a8\u5c0e\u7a0b\u5f0f\u4e2d\u56de\u50b3 Object.entries() \u5f62\u5f0f\u7684\u9663\u5217\u4ee5\u4f7f\u7528\u300c\u9078\u9805\u300d\u529f\u80fd\u3002"},"hint")),Object(v.jsxs)("div",{className:"schema-editor",children:[Object(v.jsx)("form",{className:"delete-schema",children:Object(v.jsx)("input",{type:"button",title:"\u522a\u9664\u65b9\u6848",disabled:this.props.single,onClick:function(){return e.deleteSchema()}})}),Object(v.jsx)("form",{className:"pure-form",onSubmit:function(t){return e.loadSchema(t)},children:Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"\u9810\u8a2d\u63a8\u5c0e\u65b9\u6848\uff1a"}),Object.entries(z).map((function(t,n){var r=Object(l.a)(t,2),a=r[0],i=r[1];return Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"radio",name:"schema",value:a,checked:e.props.name===a,onChange:function(t){return e.changeSchema(t)},disabled:"langjin"!==a&&"kyonh"!==a}),i]},n)})),Object(v.jsx)("input",{className:"pure-button",type:"submit",value:"\u8f09\u5165"})]})}),Object(v.jsx)("div",{lang:"en-x-code",id:"schemaInput",children:Object(v.jsx)(y.Controlled,{value:this.props.input,options:{mode:"javascript",lineNumbers:!0,scrollbarStyle:"overlay",extraKeys:{F11:function(e){return e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){return e.setOption("fullScreen",!1)},F9:function(e){var t=e.getCursor(),n=e.getScrollInfo(),r=n.left,a=n.top,i=e.lineAtHeight(a,"local"),c=a-e.heightAtLine(i,"local"),s=N.a.formatWithCursor(e.getValue(),{cursorOffset:e.indexFromPos(t),parser:"babel",plugins:[P.a]}),o=s.formatted,l=s.cursorOffset;e.setValue(o);var u=e.posFromIndex(l);e.scrollTo(r,e.heightAtLine(u.line-t.line+i,"local")+c),e.setCursor(u)}},maxHighlightLength:1/0,viewportMargin:16,placeholder:"\u4ee5 JavaScript \u8f38\u5165\u63a8\u5c0e\u65b9\u6848\u2026\u2026",styleActiveLine:!0,autoCloseBrackets:!0,matchBrackets:!0,foldGutter:!0,lint:{esversion:1/0},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],hintOptions:{hint:this.autocomplete.bind(this),completeSingle:!1}},onBeforeChange:function(t,n,r){var a=Object(p.a)(Object(p.a)({},e.props),{},{input:r}),i=e.setParameters(r);i&&(a.parameters=i),e.props.setSchemaState(a)},onCursorActivity:function(e){return e.hasFocus()&&e.showHint()},onFocus:function(e){return setTimeout((function(){return e.showHint()}),100)}})}),Object(v.jsx)("form",{className:"pure-form",children:Object(v.jsxs)("p",{children:[Object(v.jsx)("b",{children:"\u9078\u9805\uff1a"}),n]})})]})}}]),n}(a.a.Component),E=n(23),J=n.n(E),M=J()(w.a);function V(e,t){(null===t||void 0===t?void 0:t.stack)?M.fire({showClass:{popup:""},hideClass:{popup:""},icon:"error",title:"\u932f\u8aa4",customClass:"error-with-stack",html:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:e}),Object(v.jsx)("pre",{lang:"en-x-code",children:t.stack.replace(/\n +at eval[^]+/,"")})]}),confirmButtonText:"\u78ba\u5b9a"}):w.a.fire({showClass:{popup:""},hideClass:{popup:""},icon:"error",title:"\u932f\u8aa4",text:e,confirmButtonText:"\u78ba\u5b9a"})}function W(){V("\u700f\u89bd\u5668\u4e0d\u652f\u63f4\u532f\u51fa\u81f3\u526a\u8cbc\u7c3f\uff0c\u64cd\u4f5c\u5931\u6557")}function H(){w.a.fire({showClass:{popup:""},hideClass:{popup:""},icon:"success",title:"\u6210\u529f",text:"\u5df2\u6210\u529f\u532f\u51fa\u81f3\u526a\u8cbc\u7c3f",confirmButtonText:"\u78ba\u5b9a"})}function q(e){var t=document.createElement("textarea");t.value=e,t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")?H():W()}catch(n){W()}document.body.removeChild(t)}var D,z={langjin:"\u63a8\u5c0e\u5357\u4eac\u97f3",kyonh:"\u53e4\u97fb\u7f85\u99ac\u5b57",baxter:"\u767d\u4e00\u5e73\u8f49\u5beb",blankego:"\u6709\u5973\u7f85\u99ac\u5b57",zyepheng:"\u968b\u62fc",panwuyun:"\u6f58\u609f\u96f2\u64ec\u97f3",unt_j:"unt \u5207\u97fb\u64ec\u97f3 J",msoeg_v8:"msoeg \u4e2d\u53e4\u62df\u97f3 V8",chiangxhua:"\u63a8\u5c0e\u300a\u8072\u97f3\u5531\u548c\u5716\u300b\u64ec\u97f3",fanwan:"\u63a8\u5c0e\u300a\u5206\u97fb\u64ae\u8981\u300b\u64ec\u97f3",putonghua:"\u63a8\u5c0e\u666e\u901a\u8a71",gwongzau:"\u63a8\u5c0e\u5ee3\u5dde\u97f3",zaonhe:"\u63a8\u5c0e\u4e0a\u6d77\u8a71",ayaka_v8:"\u7dbe\u9999\u601d\u8003\u97f3\u7cfb"},_={convertArticle:"\u5f9e\u8f38\u5165\u6846\u4e2d\u8b80\u53d6\u6587\u7ae0\uff0c\u4e26\u6ce8\u97f3",convertPresetArticle:"\u70ba\u9810\u8a2d\u6587\u7ae0\u6ce8\u97f3",exportAllSmallRhymes:"\u5c0e\u51fa\u6240\u6709\u5c0f\u97fb",exportAllSyllables:"\u5c0e\u51fa\u6240\u6709\u97f3\u7bc0",exportAllSyllablesWithCount:"\u5c0e\u51fa\u6240\u6709\u97f3\u7bc0\uff0c\u4e26\u8a08\u6578"};function G(e,t){fetch(e).then((function(e){return e.text()})).then(t).catch((function(e){return V("\u8f09\u5165\u6a94\u6848\u5931\u6557",e)}))}function R(){return{name:"langjin",input:"",original:"",parameters:{},id:+new Date}}function Q(e){return e.map((function(e,t){return Object(v.jsxs)(a.a.Fragment,{children:[0!==t&&Object(v.jsx)("br",{}),e]},t)}))}var K=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var r;Object(h.a)(this,n),(r=t.call(this,e)).largeTooltip=void 0,r.outputArea=void 0;var a=JSON.parse(localStorage.getItem("schemas")||"[]"),i=JSON.parse(localStorage.getItem("inputs")||"[]"),c=JSON.parse(localStorage.getItem("parameters")||"[]");return r.state={schemas:a.length?a.map((function(e,t){return{name:e,input:i[t],original:"",parameters:c[t],id:t}})):[R()],article:localStorage.getItem("article")||"\u9059\u895f\u752b\u66a2\uff0c\u9038\u8208\u9044\u98db\u3002\u723d\u7c5f\u767c\u800c\u6e05\u98a8\u751f\uff0c\u7e96\u6b4c\u51dd\u800c\u767d\u96f2\u904f\u3002\u7762\u5712\u7da0\u7af9\uff0c\u6c23\u51cc\u5f6d\u6fa4\u4e4b\u6a3d\uff1b\u9134\u6c34\u6731\u83ef\uff0c\u5149\u7167\u81e8\u5ddd\u4e4b\u7b46\u3002\u56db\u7f8e\u5177\uff0c\u4e8c\u96e3\u5e76\u3002\u7aae\u7747\u7704\u65bc\u4e2d\u5929\uff0c\u6975\u5a1b\u904a\u65bc\u6687\u65e5\u3002\u5929\u9ad8\u5730\u8fe5\uff0c\u89ba\u5b87\u5b99\u4e4b\u7121\u7aae\uff1b\u8208\u76e1\u60b2\u4f86\uff0c\u8b58\u76c8\u865b\u4e4b\u6709\u6578\u3002\u671b\u9577\u5b89\u65bc\u65e5\u4e0b\uff0c\u76ee\u5433\u6703\u65bc\u96f2\u9593\u3002\u5730\u52e2\u6975\u800c\u5357\u6e9f\u6df1\uff0c\u5929\u67f1\u9ad8\u800c\u5317\u8fb0\u9060\u3002\u95dc\u5c71\u96e3\u8d8a\uff0c\u8ab0\u60b2\u5931\u8def\u4e4b\u4eba\u3002\u840d\u6c34\u76f8\u9022\uff0c\u76e1\u662f\u4ed6\u9109\u4e4b\u5ba2\u3002\u61f7\u5e1d\u95bd\u800c\u4e0d\u898b\uff0c\u5949\u5ba3\u5ba4\u4ee5\u4f55\u5e74\uff1f",option:localStorage.getItem("option")||"convertArticle",convertVariant:"true"===localStorage.getItem("convertVariant"),autocomplete:"false"!==localStorage.getItem("autocomplete"),output:[],isApplied:!1},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.largeTooltip=g.init()}},{key:"handlePredefinedOptions",value:function(){var e,t=this,n=+new Date+":",r=this.state.schemas.map((function(e){var t=e.parameters,n=Object(p.a)({},t);return Object.keys(n).forEach((function(e){Array.isArray(n[e])&&(n[e]=n[e][0])})),n})),i=function(t,n){try{return e.map((function(e,a){return e(t,n,r[a])}))}catch(a){throw V(n?"\u63a8\u5c0e\u300c".concat(n,"\u300d\u5b57\uff08\u97f3\u97fb\u5730\u4f4d\uff1a").concat(t.\u63cf\u8ff0,"\uff09\u6642\u767c\u751f\u932f\u8aa4"):"\u63a8\u5c0e\u300c".concat(t.\u63cf\u8ff0,"\u300d\u97f3\u97fb\u5730\u4f4d\uff08\u5b57\u70ba null\uff09\u6642\u767c\u751f\u932f\u8aa4"),a),a}};if("convertPresetArticle"!==this.state.option||D){var c={convertArticle:function(){return Array.from(t.state.article).map((function(e,r){var a,c=[e].concat(t.state.convertVariant?O.a.get(e):[]),s=[],o=Object(u.a)(c);try{for(o.s();!(a=o.n()).done;){var l,p=a.value,h=Object(u.a)(Object(f["query\u5b57\u982d"])(p));try{var d=function(){var e=l.value,t=e.\u97f3\u97fb\u5730\u4f4d,n=e.\u89e3\u91cb,r=i(t,p),a=s.find((function(e){return e[0].every((function(e,t){return e===r[t]}))}));a?a[1].push({"\u5b57\u982d":p,"\u89e3\u91cb":n,"\u97f3\u97fb\u5730\u4f4d":t}):s.push([r,[{"\u5b57\u982d":p,"\u89e3\u91cb":n,"\u97f3\u97fb\u5730\u4f4d":t}]])};for(h.s();!(l=h.n()).done;)d()}catch(j){h.e(j)}finally{h.f()}}}catch(j){o.e(j)}finally{o.f()}return Object(v.jsx)(x,{ch:e,entries:s,tooltip:t.largeTooltip},n+r)}))},convertPresetArticle:function(){return D.split("\n\n").map((function(e,t){return Object(v.jsx)(a.a.Fragment,{children:e.split("\n").map((function(e,t){for(var r=[],c=Array.from(e),s=0;s<c.length;s++)if("("===c[s+1]){for(var o=s;")"!==c[++s]&&s<c.length;);var l=c[o],u=c.slice(o+2,s).join(""),p=f["\u97f3\u97fb\u5730\u4f4d"].from\u63cf\u8ff0(u),h=i(p,l);r.push(Object(v.jsxs)("ruby",{children:[l,Object(v.jsx)("rp",{children:"("}),Object(v.jsx)("rt",{lang:"och-Latn-fonipa",children:Q(h)}),Object(v.jsx)("rp",{children:")"})]},n+o))}else r.push(Object(v.jsx)(a.a.Fragment,{children:c[s]},n+s));return a.a.createElement(t?"p":"h3",{key:t},r)}))},t)}))},exportAllSmallRhymes:function(){return Array.from(Object(f["iter\u97f3\u97fb\u5730\u4f4d"])()).map((function(e,t){return Object(v.jsxs)("p",{children:[e.\u63cf\u8ff0," ",Object(v.jsx)("span",{lang:"och-Latn-fonipa",children:i(e,null).join(" / ")})," ",e.\u4ee3\u8868\u5b57]},n+t)}))},exportAllSyllables:function(){return[Object(v.jsx)("span",{lang:"och-Latn-fonipa",children:Array.from(new Set(Array.from(Object(f["iter\u97f3\u97fb\u5730\u4f4d"])()).map((function(e){return i(e,null).join(" / ")})))).join(", ")},n+0)]},exportAllSyllablesWithCount:function(){return[Object(v.jsx)("span",{lang:"och-Latn-fonipa",children:Array.from(Array.from(Object(f["iter\u97f3\u97fb\u5730\u4f4d"])()).reduce((function(e,t){var n=i(t,null).join(" / ");return e.set(n,-~e.get(n)),e}),new Map)).sort((function(e,t){return t[1]-e[1]})).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return"".concat(n," (").concat(r,")")})).join(", ")},n+0)]}};try{e=this.state.schemas.map((function(e){var t=e.input;return new Function("\u97f3\u97fb\u5730\u4f4d","\u5b57\u982d","\u9078\u9805",t)}))}catch(s){return void V("\u7a0b\u5f0f\u78bc\u932f\u8aa4",s)}try{this.setState({output:c[this.state.option](),isApplied:!0})}catch(s){}}else G("https://cdn.jsdelivr.net/gh/nk2028/qieyun-text-label@310b6a8/index.txt",(function(e){D=e,t.handlePredefinedOptions()}))}},{key:"handleCopy",value:function(){var e,t=null===(e=this.outputArea)||void 0===e?void 0:e.textContent;t?navigator.clipboard?navigator.clipboard.writeText(t).then(H,(function(){return q(t)})):q(t):V("\u8acb\u5148\u9032\u884c\u64cd\u4f5c\uff0c\u518d\u532f\u51fa\u7d50\u679c")}},{key:"scrollToOutput",value:function(e){this.outputArea=e,this.state.isApplied&&(e.scrollIntoView({behavior:"smooth",block:"nearest"}),this.setState({isApplied:!1}))}},{key:"render",value:function(){var e=this,t=function(t,n){e.setState(Object(o.a)({},t,n),(function(){localStorage.setItem(t,e.state[t]+"")}))},n=function(){localStorage.setItem("schemas",JSON.stringify(e.state.schemas.map((function(e){return e.name})))),localStorage.setItem("inputs",JSON.stringify(e.state.schemas.map((function(e){return e.input})))),localStorage.setItem("parameters",JSON.stringify(e.state.schemas.map((function(e){return e.parameters}))))},r=function(t){e.setState((function(e){var n=e.schemas;return(n=Object(s.a)(n)).splice(n.findIndex((function(e){return e.id===t}))+1,0,R()),{schemas:n}}),n)},i=function(t){e.setState((function(e){var n=e.schemas;return(n=Object(s.a)(n))[n.findIndex((function(e){return e.id===t.id}))]=t,{schemas:n}}),n)},c=function(t){e.setState((function(e){return{schemas:e.schemas.filter((function(e){return e.id!==t.id}))}}),n)};return Object(v.jsxs)("div",{className:"main-container",children:[Object(v.jsx)("form",{className:"add-schema",children:Object(v.jsx)("input",{type:"button",title:"\u65b0\u589e\u65b9\u6848",onClick:function(){return r(null)}})}),this.state.schemas.map((function(t,n,s){return Object(v.jsxs)(a.a.Fragment,{children:[Object(v.jsx)(B,{name:t.name,input:t.input,original:t.original,id:t.id,parameters:t.parameters,setSchemaState:i,deleteSchema:c,single:1===s.length,autocomplete:e.state.autocomplete}),Object(v.jsx)("form",{className:"add-schema",children:Object(v.jsx)("input",{type:"button",title:"\u65b0\u589e\u65b9\u6848",onClick:function(){return r(t.id)}})})]},t.id)})),Object(v.jsxs)("form",{className:"pure-form",children:[Object(v.jsx)("p",{children:Object(v.jsx)("textarea",{id:"articleInput",placeholder:"\u8f38\u5165\u6846",rows:5,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",required:!0,onChange:function(e){return t("article",e.target.value)},value:this.state.article})}),Object(v.jsxs)("p",{children:[Object(v.jsx)("label",{children:Object(v.jsx)("select",{onChange:function(e){return t("option",e.target.value)},value:this.state.option,children:Object.entries(_).map((function(e,t){var n=Object(l.a)(e,2),r=n[0],a=n[1];return Object(v.jsx)("option",{value:r,children:a},t)}))})}),Object(v.jsxs)("label",{className:"convertArticle"===this.state.option?"":"hidden",children:[Object(v.jsx)("input",{type:"checkbox",checked:this.state.convertVariant,onChange:function(e){return t("convertVariant",e.target.checked)}}),"\u8f49\u63db\u7570\u9ad4\u5b57"]}),Object(v.jsx)("input",{className:"pure-button pure-button-primary",type:"button",value:"\u9069\u7528",onClick:function(){return e.handlePredefinedOptions()}}),Object(v.jsx)("input",{className:"pure-button",type:"button",value:"\u532f\u51fa\u81f3\u526a\u8cbc\u7c3f",onClick:function(){return e.handleCopy()}}),Object(v.jsxs)("label",{children:[Object(v.jsx)("input",{type:"checkbox",checked:this.state.autocomplete,onChange:function(e){return t("autocomplete",e.target.checked)}}),"\u7de8\u8f2f\u63a8\u5c0e\u65b9\u6848\u6642\u986f\u793a\u81ea\u52d5\u5b8c\u6210"]})]})]}),Object(v.jsx)("output",{ref:function(t){return t&&e.scrollToOutput(t)},children:this.state.output})]})}}]),n}(a.a.Component),X=J()(w.a);function Y(){X.fire({showClass:{popup:""},hideClass:{popup:""},customClass:{container:"about-modal",htmlContainer:"about-modal-content"},width:"60vw",showCloseButton:!0,showConfirmButton:!1,html:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"\u95dc\u65bc"}),Object(v.jsxs)("p",{children:["\u5207\u97fb\u97f3\u7cfb\u81ea\u52d5\u63a8\u5c0e\u5668\uff08\u4e0b\u7a31\u300c\u672c\u9801\u9762\u300d\uff09\u7531 ",Object(v.jsx)("a",{href:"https://nk2028.shn.hk/",children:"nk2028"})," ","\u958b\u767c\u3002\u6211\u5011\u958b\u767c\u6709\u95dc\u8a9e\u8a00\u5b78\u7684\u9805\u76ee\uff0c\u5c24\u5176\u662f\u6709\u95dc\u6b77\u53f2\u6f22\u8a9e\u8a9e\u97f3\u5b78\uff0c\u7570\u9ad4\u5b57\u548c\u65e5\u8a9e\u8a9e\u8a00\u5b78\u7684\u9805\u76ee\u3002"]}),Object(v.jsxs)("p",{children:["\u6b61\u8fce\u52a0\u5165 QQ \u97f3\u97fb\u5b78\u7b54\u7591\u7fa3\uff08\u7fa3\u865f 526333751\uff09\u548c Telegram nk2028 \u793e\u7fa3\uff08",Object(v.jsx)("a",{href:"https://t.me/nk2028_discuss",children:"@nk2028_discuss"}),"\uff09\u3002"]}),Object(v.jsxs)("p",{children:["\u672c\u9801\u9762\u539f\u59cb\u78bc\u516c\u958b\u65bc ",Object(v.jsx)("a",{href:"https://github.com/nk2028/qieyun-autoderiver",children:"GitHub"}),"\u3002"]}),Object(v.jsx)("h2",{children:"\u79c1\u96b1\u6b0a\u653f\u7b56"}),Object(v.jsx)("p",{children:"\u672c\u9801\u9762\u662f\u4e00\u9805\u958b\u653e\u539f\u59cb\u78bc\u7684\u7db2\u7d61\u670d\u52d9\u3002\u4f5c\u70ba\u672c\u9801\u9762\u7684\u958b\u767c\u8005\uff0c\u6211\u5011\u5c0d\u60a8\u7684\u79c1\u96b1\u975e\u5e38\u91cd\u8996\u3002\u672c\u9801\u9762\u7684\u958b\u767c\u8005\u4e0d\u6703\u900f\u904e\u672c\u9801\u9762\u6536\u96c6\u60a8\u7684\u4efb\u4f55\u8cc7\u6599\u3002"}),Object(v.jsx)("p",{children:"\u4e0b\u9762\u5c07\u5177\u9ad4\u4ecb\u7d39\u672c\u9801\u9762\u80fd\u5728\u4f55\u7a2e\u7a0b\u5ea6\u4e0a\u4fdd\u969c\u60a8\u7684\u79c1\u96b1\u6b0a\u3002"}),Object(v.jsx)("b",{children:"\u60a8\u9375\u5165\u7684\u5167\u5bb9"}),Object(v.jsx)("p",{children:"\u672c\u9801\u9762\u7684\u958b\u767c\u8005\u4e0d\u6703\u6536\u96c6\u60a8\u5728\u672c\u9801\u9762\u4e2d\u9375\u5165\u7684\u4efb\u4f55\u5167\u5bb9\u3002\u4efb\u4f55\u8207\u60a8\u9375\u5165\u7684\u5167\u5bb9\u76f8\u95dc\u7684\u904b\u7b97\u5168\u90e8\u5728\u60a8\u7684\u7cfb\u7d71\u4e2d\u5b8c\u6210\u3002\u672c\u9801\u9762\u4e0d\u6703\u5c07\u5305\u62ec\u5f85\u6a19\u8a3b\u7684\u6587\u672c\u3001\u6a19\u8a3b\u7d50\u679c\u5728\u5167\u7684\u4efb\u4f55\u8cc7\u6599\u50b3\u9001\u81f3\u4efb\u4f55\u4f3a\u670d\u5668\u3002"}),Object(v.jsx)("b",{children:"\u60a8\u7684\u5176\u4ed6\u8cc7\u6599"}),Object(v.jsx)("p",{children:"\u672c\u9801\u9762\u4f7f\u7528\u7684\u5167\u5bb9\u8a17\u7ba1\u65bc\u4ee5\u4e0b\u7ad9\u9ede\uff1aGitHub Pages\u3001jsDelivr\u3001Google Fonts\u3002\u5728\u60a8\u8a2a\u554f\u672c\u9801\u9762\u6642\uff0c\u60a8\u7684\u700f\u89bd\u5668\u5c07\u8207\u9019\u4e9b\u7ad9\u9ede\u4ea4\u4e92\u3002\u672c\u9801\u9762\u7684\u958b\u767c\u8005\u4e26\u4e0d\u80fd\u8b80\u53d6\u60a8\u8a2a\u554f\u9019\u4e9b\u7ad9\u9ede\u6642\u7522\u751f\u7684\u8cc7\u6599\uff0c\u4ea6\u7121\u6cd5\u63a7\u5236\u9019\u4e9b\u7ad9\u9ede\u5982\u4f55\u4f7f\u7528\u60a8\u8a2a\u554f\u6642\u7522\u751f\u7684\u8cc7\u6599\u3002"})]})})}var $=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{children:Object(v.jsx)("nav",{children:Object(v.jsx)("h1",{children:Object(v.jsx)("span",{onClick:Y,children:"\u5207\u97fb\u97f3\u7cfb\u81ea\u52d5\u63a8\u5c0e\u5668"})})})}),Object(v.jsx)(K,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)($,{})}),document.getElementById("root")),U()},53:function(e,t,n){},57:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.01648622.chunk.js.map