(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(85)),i={id:"index",title:"Audo AI Docs",sidebar_label:"Quickstart",slug:"/"},c={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Audo AI Docs",description:"Our noise removal API consists of a simple set of HTTP endpoints located under https",source:"@site/docs/quickstart.md",slug:"/",permalink:"/",version:"current",sidebar_label:"Quickstart",sidebar:"sidebar",next:{title:"Endpoints",permalink:"/endpoints"}},l=[{value:"Getting an API key",id:"getting-an-api-key",children:[]},{value:"Authentication",id:"authentication",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Our noise removal API consists of a simple set of HTTP endpoints located under ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),". These endpoints are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"POST /upload")," with an audio file to obtain ",Object(o.b)("inlineCode",{parentName:"li"},"<fileId>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"POST /remove-noise")," with ",Object(o.b)("inlineCode",{parentName:"li"},"<fileId>")," to obtain ",Object(o.b)("inlineCode",{parentName:"li"},"<jobId>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GET /remove-noise/<jobId>/status")," to check the status of the job and get ",Object(o.b)("inlineCode",{parentName:"li"},"<downloadPath>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GET /<downloadPath>")," to download the processed audio file with noise removed")),Object(o.b)("p",null,"We'll cover these in more detail on the next page."),Object(o.b)("h2",{id:"getting-an-api-key"},"Getting an API key"),Object(o.b)("p",null,"You can find your API key in ",Object(o.b)("a",{parentName:"p",href:"https://app.audo.ai/account"},"the account page of the closed beta"),". For the rest of this guide we will use ",Object(o.b)("inlineCode",{parentName:"p"},"$AUDO_API_KEY")," to refer to this key. You can set it in a Linux terminal as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"AUDO_API_KEY=YOUR-KEY-HERE\n")),Object(o.b)("h2",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"In all calls to the API, include the header ",Object(o.b)("inlineCode",{parentName:"p"},"x-api-key: $AUDO_API_KEY"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://api.audo.ai/v1/apiKey/test" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},' -> {"status":"success","detail":"Successfully authorized with api key"}\n')),Object(o.b)("p",null,"Provided that worked, you're all set up to start submitting audio. Follow to the next page to learn the specifics."))}p.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);