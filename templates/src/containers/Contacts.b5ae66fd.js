webpackJsonp([5],{161:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),A=function(e){return e&&e.__esModule?e:{default:e}}(i);a(162);var o=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"render",value:function(){return A.default.createElement("div",{className:"Header"},A.default.createElement("div",{className:"container"},A.default.createElement("nav",null,A.default.createElement("a",{className:"navbar-brand",href:"/"},"NOVA",A.default.createElement("span",{className:"text-success"},"TECHNOLOGY"),A.default.createElement("span",{className:"text-danger"},"BETA")),A.default.createElement("ul",null,A.default.createElement("li",{className:"home"==this.props.active?"active":""},A.default.createElement("a",{href:"/"},"Home ",A.default.createElement("span",{className:"sr-only"},"(current)"))),A.default.createElement("li",{className:"products"==this.props.active?"active":""},A.default.createElement("a",{href:"/products/"},"Products")),A.default.createElement("li",{className:"contacts"==this.props.active?"active":""},A.default.createElement("a",{href:"/contacts/"},"Contacts"))))))}}]),t}(i.Component);t.default=o},162:function(e,t){},174:function(e,t,a){e.exports=a.p+"static/Contacts_email.91a8c2c5.svg"},175:function(e,t){e.exports="data:image/png;base64,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"},176:function(e,t,a){e.exports=a.p+"static/Contacts_tel.5efddf97.svg"},177:function(e,t){e.exports="data:image/png;base64,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"},178:function(e,t){},55:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(0),r=n(l),c=a(161),i=n(c),A=a(174),o=n(A),u=a(175),s=n(u),d=a(176),f=n(d),m=a(177),h=n(m);a(178),t.default=function(){return r.default.createElement("div",null,r.default.createElement(i.default,{active:"contacts"}),r.default.createElement("div",{className:"Contacts"},r.default.createElement("div",{className:"container"},r.default.createElement("div",null,r.default.createElement("p",null,"Shenzhen Nova Technology is a software company that focuses on designing highly scalable enterprise applications for China and Intentional markets headquartered in Shenzhen, China."),r.default.createElement("p",null,"We have a community of highly trained coding experts delivering the best conversion services at an offer."),r.default.createElement("p",null,"Locating in Shenzhen, the center of the modern digital world makes us able to easily provide all the required hardware you need with the best integration possible with your software services. We have the capability to make all the required digital hardware in Nova tech group."),r.default.createElement("p",null,"Another advantage of Nova is, our team is an international team and we can easily turn your products into an international service compatible with different languages and target local services in China, North America, and Middle-east.")),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-md-4"},r.default.createElement("h3",null,"ADDRESS:"),r.default.createElement("p",null,r.default.createElement("i",{className:"icon icon-address"})," 深圳市罗湖区桂园街道深南东路5015号金丰城大厦B座1502"),r.default.createElement("h3",null,"PHONES:"),r.default.createElement("p",null,r.default.createElement("i",{className:"icon icon-email"}),r.default.createElement("object",{style:{verticalAlign:"middle",padding:".3em"},className:"img-fluid",type:"image/svg+xml",data:f.default},r.default.createElement("img",{style:{verticalAlign:"middle",padding:".3em"},className:"img-fluid",src:h.default,alt:""}))),r.default.createElement("h3",null,"E-MAIL:"),r.default.createElement("p",null,r.default.createElement("i",{className:"icon icon-tel"}),r.default.createElement("object",{style:{verticalAlign:"middle",padding:".3em"},className:"img-fluid",type:"image/svg+xml",data:o.default},r.default.createElement("img",{style:{verticalAlign:"middle",padding:".3em"},className:"img-fluid",src:s.default,alt:""}))),"Download information as: vCard"),r.default.createElement("div",{className:"col-md-8"},r.default.createElement("a",{href:"/img/map.jpg",target:"_blank"},r.default.createElement("img",{className:"img-responsive center-block",src:"/img/map-small.jpg",alt:""})),r.default.createElement("p",{className:"help-block text-center"},"(Click on the image to enlarge)"))))))}}});