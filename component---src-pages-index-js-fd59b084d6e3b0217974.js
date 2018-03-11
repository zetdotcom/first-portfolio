webpackJsonp([35783957827783],{67:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),i=a(l),s=n(9);a(s);n(94);var o=function(){return i.default.createElement("div",{className:"wrapper"},i.default.createElement("div",{className:"about"},i.default.createElement("div",{className:"title"},i.default.createElement("h1",null,"About Me")),i.default.createElement("div",{className:"info"},i.default.createElement("div",{className:"aboutMe"},i.default.createElement("div",null,i.default.createElement("h2",null,"Front-End / React/ Javascript developer"),i.default.createElement("p",null,"Really passionate about web development, problem solving, and a good and accessible design."),i.default.createElement("p",null,"Focusing on front end development technologies, feeling confident with html, css and javascript, now on route to master React, Redux, testing and all other associated technologies."),i.default.createElement("p",null,"Currently during career path change - from becoming professional Accountant I have decided to become a successful Web Developer. Even though I have a degree in accountancy, and was close to becoming Chartered Accountant I do not regret my decision."),i.default.createElement("p",null,"Spending many of my evenings developing my Front-End skills or working on side projects I am really serious about my career change decision and the plan for future is to become Front-End Senior/ Engineer/ Architect of even Fullstack or Software Developer in the future. With passion and ambitions I believe this will happen."))),i.default.createElement("div",{className:"photo"},i.default.createElement("div",{className:"myImage"})))))};t.default=o,e.exports=t.default},94:function(e,t){},68:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),r=a(o),c=n(9);a(c);n(95);var u=function(e){function t(){return l(this,t),i(this,e.call(this))}return s(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"floats"},r.default.createElement("div",{style:{left:"9%",animationDuration:"9s",animationTimingFunction:"linear"}},"html5"),r.default.createElement("div",{style:{left:"18%",animationDuration:"15s",animationTimingFunction:"ease-in-out"}},"react"),r.default.createElement("div",{style:{left:"27%",animationDuration:"16s",animationTimingFunction:"ease-out"}},"javascript"),r.default.createElement("div",{style:{left:"36%",animationDuration:"7s",animationTimingFunction:"ease-in"}},"css3"),r.default.createElement("div",{style:{left:"45%",animationDuration:"10s",animationTimingFunction:"linear"}},"es6"),r.default.createElement("div",{style:{left:"54%",animationDuration:"9s",animationTimingFunction:"ease-out"}},"json"),r.default.createElement("div",{style:{left:"63%",animationDuration:"10s",animationTimingFunction:"ease-in"}},"git"),r.default.createElement("div",{style:{left:"72%",animationDuration:"11s",animationTimingFunction:"ease-in-out"}},"front-end developer"),r.default.createElement("div",{style:{left:"81%",animationDuration:"8s",animationTimingFunction:"linear"}},"passion"),r.default.createElement("div",{style:{left:"90%",animationDuration:"15s",animationTimingFunction:"ease"}},"sass"))},t}(r.default.Component);t.default=u,e.exports=t.default},95:function(e,t){},190:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),i=a(l),s=n(9),o=a(s),r=n(68);a(r);n(325);var c=function(){return i.default.createElement("div",{className:"homepage"},i.default.createElement("div",{className:"names"},i.default.createElement("h1",null,i.default.createElement("span",{className:"initials"},"M"),i.default.createElement("span",null,"i"),i.default.createElement("span",null,"c"),i.default.createElement("span",null,"h"),i.default.createElement("span",null,"a"),i.default.createElement("span",null,"l")," ",i.default.createElement("span",{className:"initials"},"Z"),i.default.createElement("span",null,"a"),i.default.createElement("span",null,"d"),i.default.createElement("span",null,"a"),i.default.createElement("span",null,"r"),i.default.createElement("span",null,"n"),i.default.createElement("span",null,"o"),i.default.createElement("span",null,"w"),i.default.createElement("span",null,"s"),i.default.createElement("span",null,"k"),i.default.createElement("span",null,"i")),i.default.createElement("h3",null,i.default.createElement("span",null,"Front End")," /",i.default.createElement("span",null," Web Apps")," / ",i.default.createElement("span",null,"Javascript Developer"))),i.default.createElement("div",{className:"links"},i.default.createElement("div",{className:"row1"},i.default.createElement(o.default,{to:"/projects/",className:"linkBox"},i.default.createElement("div",null,"Projects")),i.default.createElement("a",{href:"/about/",className:"linkBox"},i.default.createElement("div",null,"About Me"))),i.default.createElement("div",{className:"row2"},i.default.createElement("a",{href:"/CVMZFrontEnd.pdf",className:"linkBox"},i.default.createElement("div",null,"Have a look at my CV")),i.default.createElement("a",{href:"/contact/",className:"linkBox"},i.default.createElement("div",null,"Contact")))))};t.default=c,e.exports=t.default},325:function(e,t){},69:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),i=a(l),s=n(9);a(s);n(96);var o=n(93),r=a(o),c=function(){return r.default.map(function(e,t){var n=function(){return""===e.git?i.default.createElement("button",null,"Private repo"):i.default.createElement("a",{href:e.git,target:"blank"},i.default.createElement("button",null,"Git repo"))},a=function(){return e.skills.map(function(e,t){return i.default.createElement("div",{key:t},e)})};return i.default.createElement("div",{className:"project",key:t},i.default.createElement("div",{className:"projectTitle"},e.title),i.default.createElement("div",{className:"info"},i.default.createElement("div",{className:"thumbnail"},i.default.createElement("img",{src:e.img})),i.default.createElement("div",{className:"description"},i.default.createElement("div",{className:"descText"},e.desc),i.default.createElement("div",{className:"links"},i.default.createElement("a",{href:e.link,target:"blank"},i.default.createElement("button",null,"Visit Website")),n()))),i.default.createElement("div",{className:"projectSkills"},a()))})},u=function(){return i.default.createElement("div",{className:"wrapper"},i.default.createElement("div",{className:"projects"},i.default.createElement("div",{className:"title"},i.default.createElement("h1",null,"Projects")),i.default.createElement("div",{className:"projectsList"},c())))};t.default=u,e.exports=t.default},96:function(e,t){},192:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),r=a(o),c=n(9);a(c);n(327);var u=n(322),m=a(u),d=function(e){function t(){l(this,t);var n=i(this,e.call(this));return n.skillSet=n.skillSet.bind(n),n}return s(t,e),t.prototype.skillSet=function(){return m.default.map(function(e,t){return r.default.createElement("div",{className:"skill",key:t},r.default.createElement("div",{className:"skillImg"},r.default.createElement("img",{src:e.icon,alt:"css3"})),r.default.createElement("div",{className:"skillName"},e.name))})},t.prototype.render=function(){return r.default.createElement("div",{className:"wrapper",id:"skills"},r.default.createElement("div",{className:"skills"},r.default.createElement("div",{className:"title"},r.default.createElement("h1",null,"Skills")),r.default.createElement("div",{className:"skillsList"},this.skillSet())))},t}(r.default.Component);t.default=d,e.exports=t.default},327:function(e,t){},193:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),i=a(l),s=n(9);a(s);n(328);var o=function(){return i.default.createElement("div",{className:"wip"},i.default.createElement("h3",null,"Website under continous development"),i.default.createElement("h5",null,"Made available online so you can check the projects section. Enjoy!!"))};t.default=o,e.exports=t.default},328:function(e,t){},93:function(e,t){e.exports=[{title:"Jezus Zyje Website",link:"https://www.jezuszyje.co.uk",git:"",skills:["React","Firebase","Responsive","HTML5","CSS3","Sass"],desc:"Church community website",img:"../images/jezuszyje.png"},{title:"Electric Map",link:"https://electric-map-1515938108302.firebaseapp.com/",git:"https://github.com/zetdotcom/electric-map",skills:["React","Firebase","Responsive","HTML5","CSS3","Sass","Google Maps API"],desc:"Project build with Google Maps API showing charing points for electric cars in the UK",img:"../images/map.png"},{title:"Real Estate",link:"https://zetdotcom.github.io/react-real-estate/",git:"https://github.com/zetdotcom/react-real-estate",skills:["React","Responsive","HTML5","CSS3","Sass","JSON"],desc:"Real Estate sample website with filter section to allow you to search for the property you want. Planning to connect this app to Zoopla API",img:"../images/realestate.png"},{title:"Restaurant",link:"https://zetdotcom.github.io/jquery-restaurant/",git:"https://github.com/zetdotcom/jquery-restaurant",skills:["jQuery","Responsive","HTML5","CSS3"],desc:"Responsive, clean and modern restaurant website",img:"../images/restaurant.png"},{title:"My Website",link:"https://zetdotcom.github.io",git:"https://github.com/zetdotcom/zetdotcom.github.io/tree/develop",skills:["React","Responsive","HTML5","CSS3","Gatsby","Sass"],desc:"My personal website",img:"../images/mywebsite.png"}]},322:function(e,t){e.exports=[{name:"HTML5",icon:"images/html51.png"},{name:"CSS3",icon:"images/css3.png"},{name:"JavaScript",icon:"images/js.png"},{name:"Sass",icon:"images/sass.png"},{name:"React",icon:"images/react.png"},{name:"Bootstrap",icon:"images/bootstrap.png"},{name:"Responsive Web Design",icon:"images/rwd.png"},{name:"jQuery",icon:"images/jq.png"},{name:"ES6",icon:"images/es6.png"},{name:"AJAX/JSON",icon:"images/json.png"},{name:"Gatsby",icon:"images/gatsby.png"},{name:"GIT",icon:"images/git.png"},{name:"NPM",icon:"images/npm.png"}]},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(1),r=a(o),c=n(9),u=(a(c),n(190)),m=a(u),d=n(192),f=(a(d),n(69)),p=(a(f),n(67)),E=(a(p),n(193));a(E);n(331);var g=function(e){function t(n){return l(this,t),i(this,e.call(this,n))}return s(t,e),t.prototype.render=function(){return r.default.createElement("div",{className:"app",id:"app"},r.default.createElement(m.default,null))},t}(r.default.Component);t.default=g,e.exports=t.default},331:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-fd59b084d6e3b0217974.js.map