(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6279)}])},6279:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(4051),a=t.n(r),o=t(5893),s=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewMemo","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_message","type":"string"}],"name":"buyCoffee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getMemos","outputs":[{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"message","type":"string"}],"internalType":"struct BuyMeACoffee.Memo[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawTips","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),i=t(6076),c=t(5553),u=t(715),l=t(9008),p=t(7294),f=t(214),d=t.n(f);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function y(e,n,t,r,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void t(u)}i.done?n(c):Promise.resolve(c).then(r,a)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){y(o,r,a,s,i,"next",e)}function i(e){y(o,r,a,s,i,"throw",e)}s(void 0)}))}}function g(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(){var e="0x7b92033eD6Ce1D4E738B268a297A74e6a87c8abD",n=s.Mt,t=(0,p.useState)(""),r=t[0],f=t[1],m=(0,p.useState)(""),y=m[0],v=m[1],x=(0,p.useState)(""),w=x[0],b=x[1],_=(0,p.useState)(""),j=_[0],k=_[1],M=(0,p.useState)([]),T=M[0],C=M[1],S=function(){var e=h(a().mark((function e(){var n,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=window.ethereum,e.next=4,n.request({method:"eth_accounts"});case 4:t=e.sent,console.log("accounts: ",t),t.length>0?(r=t[0],console.log("wallet is connected! "+r)):console.log("make sure MetaMask is connected"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=h(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(n=window.ethereum)||console.log("please install MetaMask"),e.next=5,n.request({method:"eth_requestAccounts"});case 5:t=e.sent,f(t[0]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var t=h(a().mark((function t(){var r,o,s,l,p,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(r=window.ethereum)){t.next=19;break}return o=new u.Q(r,"any"),s=o.getSigner(),l=new i.CH(e,n,s),p=l.getOwner(),alert(p),v(p),console.log("buying coffee.."),t.next=12,l.buyCoffee(w||"guest",j||"Enjoy your coffee!",{value:c.fi("0.001")});case 12:return f=t.sent,t.next=15,f.wait();case 15:console.log("mined ",f.hash),console.log("coffee purchased!"),b(""),k("");case 19:t.next=24;break;case 21:t.prev=21,t.t0=t.catch(0),console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[0,21]])})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=h(a().mark((function t(){var r,o,s,c,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!(r=window.ethereum)){t.next=14;break}return o=new u.Q(r),s=o.getSigner(),c=new i.CH(e,n,s),console.log("fetching memos from the blockchain.."),t.next=9,c.getMemos();case 9:l=t.sent,console.log("fetched!"),C(l),t.next=15;break;case 14:console.log("Metamask is not connected");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}();return(0,p.useEffect)((function(){var t;S(),E();var r=function(e,n,t,r){console.log("Memo received: ",e,n,t,r),C((function(a){return g(a).concat([{address:e,timestamp:new Date(1e3*n),message:r,name:t}])}))},a=window.ethereum;if(a){var o=new u.Q(a,"any").getSigner();(t=new i.CH(e,n,o)).on("NewMemo",r)}return function(){t&&t.off("NewMemo",r)}}),[]),(0,o.jsxs)("div",{className:d().container,children:[(0,o.jsxs)(l.default,{children:[(0,o.jsx)("title",{children:"Buy RaviKiran a Coffee!"}),(0,o.jsx)("meta",{name:"description",content:"Tipping site"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.jsxs)("main",{className:d().main,children:[(0,o.jsx)("h1",{className:d().title,children:"Buy RaviKiran a Coffee!"}),(0,o.jsx)("h3",{className:d().title,children:y.address}),r?(0,o.jsx)("div",{children:(0,o.jsxs)("form",{children:[(0,o.jsxs)("div",{class:"formgroup",children:[(0,o.jsx)("label",{children:"Name"}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{id:"name",type:"text",placeholder:"anon",onChange:function(e){b(e.target.value)}})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{class:"formgroup",children:[(0,o.jsx)("label",{children:"Send RaviKiran a message"}),(0,o.jsx)("br",{}),(0,o.jsx)("textarea",{rows:3,placeholder:"Enjoy your coffee!",id:"message",onChange:function(e){k(e.target.value)},required:!0})]}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"button",onClick:H,children:"Send 1 Coffee for 0.001ETH"})})]})}):(0,o.jsx)("button",{onClick:N,children:" Connect your wallet "})]}),r&&(0,o.jsx)("h1",{children:"Memos received"}),r&&T.map((function(e,n){return(0,o.jsxs)("div",{style:{border:"2px solid","border-radius":"5px",padding:"5px",margin:"5px"},children:[(0,o.jsxs)("p",{style:{"font-weight":"bold"},children:['"',e.message,'"']}),(0,o.jsxs)("p",{children:["From: ",e.name," at ",e.timestamp.toString()]})]},n)})),(0,o.jsx)("footer",{className:d().footer,children:"Created by @RaviKiran Betha based on Tutorials from Alchemy"})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},6601:function(){}},function(e){e.O(0,[609,774,888,179],(function(){return n=3685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);