(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c);a(19),a(7);var o=function(){return r.a.createElement("span",{className:"LastUpdated"},"Last Updated - ","2020-07-24T21:58:39")},s=a(11),i=a.n(s);a(20);var u=function(){return r.a.createElement("a",{className:"ViewOnGitHub-anchor",rel:"noopener noreferrer",href:"https://github.com/rounakraj8/react-build-using-github-actions",target:"_blank"},r.a.createElement("div",{className:"ViewOnGitHub-container"},r.a.createElement(i.a,{style:{color:"black"},fontSize:"large"}),r.a.createElement("div",null,"View On GitHub")))};var p=function(){return r.a.createElement("div",{className:"ProjectTitle"},"react-build-using-github-actions")},m=a(2),d=a(3),h=a(5),b=a(4),f=(a(27),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.subSteps;return r.a.createElement("div",null,r.a.createElement("ul",null,e.map((function(e,t){return r.a.createElement("li",null,e.desc,e.link&&r.a.createElement("p",{className:"SubStep-link"}," ",r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.link)))}))))}}]),a}(r.a.Component)),g=(a(28),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.step;return r.a.createElement("div",null,r.a.createElement("div",{className:"Step-h3"},r.a.createElement("span",null,"  ",e.header),e.desc&&r.a.createElement("p",{class:"Step-desc"},e.desc)),r.a.createElement(f,{subSteps:e.subSteps}))}}]),a}(r.a.Component)),E=(a(29),[{name:"1",header:"Create a React App",desc:"You can create a React App using any of the following methods:",subSteps:[{desc:"npx create-react-app my-app",imagePath:""},{desc:"npm init react-app my-app",imagePath:""},{desc:"yarn create react-app my-app",imagePath:""}]},{name:"2",header:"Add gh-pages npm dependency",subSteps:[{desc:"npm install gh-pages --save-dev",imagePath:""}]},{name:"3",header:"Add predeploy and deploy scripts in package.json",desc:"",subSteps:[{desc:'"predeploy": "npm run build"',imagePath:""},{desc:'"deploy": "gh-pages -d build"',imagePath:""}]},{name:"4",header:"Create GitHub repo & push the code",desc:"You need to create a new GitHub repository and push you code to that repository.",subSteps:[]},{name:"5",header:"Setup GitHub Actions",desc:"In GitHub UI, you need to go to Actions tab, select NodeJs workflow and then you need to make some changes in config file.",subSteps:[{desc:"Reference",imagePath:"",link:"https://github.com/rounakraj8/react-build-using-github-actions/blob/master/.github/workflows/ci.yml"}]}]),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Steps"},r.a.createElement("h1",{className:"Steps-h3"},"Steps:"),r.a.createElement("ol",null,E.map((function(e,t){return r.a.createElement("li",null," ",r.a.createElement(g,{key:t,step:e}))}))))}}]),a}(r.a.Component);a(30);var y=function(){return r.a.createElement("div",{className:"Main-container"},r.a.createElement(v,null))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p,null),r.a.createElement(u,null)),r.a.createElement(y,null),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("span",null,r.a.createElement(o,null),"\xa0\xa0\xa0 Copyright\xa9 Rounak")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.aba47ec6.chunk.js.map