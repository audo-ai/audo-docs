(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(86)),s={id:"index",title:"Audo AI Docs",sidebar_label:"Quickstart",slug:"/"},l={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Audo AI Docs",description:"Our noise removal API consists of a simple set of HTTP endpoints located under https",source:"@site/docs/quickstart.md",slug:"/",permalink:"/",version:"current",sidebar_label:"Quickstart",sidebar:"sidebar",next:{title:"Endpoints",permalink:"/endpoints"}},c=[{value:"Getting an API key",id:"getting-an-api-key",children:[]},{value:"Authentication",id:"authentication",children:[]}],r={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Our noise removal API consists of a simple set of HTTP endpoints located under ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),". These endpoints are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"POST /remove-noise")," with an audio file to obtain ",Object(o.b)("inlineCode",{parentName:"li"},"<jobId>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GET /remove-noise/<jobId>/status")," to check the status of the job and get ",Object(o.b)("inlineCode",{parentName:"li"},"<processedPath>")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GET /<processedPath>")," to download the processed audio file with noise removed")),Object(o.b)("p",null,"We'll cover these in more detail on the next page."),Object(o.b)("h2",{id:"getting-an-api-key"},"Getting an API key"),Object(o.b)("p",null,"You can find your API key in ",Object(o.b)("a",{parentName:"p",href:"https://app.audo.ai/account"},"the account page of the closed beta"),". For the rest of this guide we will use ",Object(o.b)("inlineCode",{parentName:"p"},"$AUDO_API_KEY")," to refer to this key. You can set it in a Linux terminal as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"AUDO_API_KEY=YOUR-KEY-HERE\n")),Object(o.b)("h2",{id:"authentication"},"Authentication"),Object(o.b)("p",null,"In all calls to the API, include the header ",Object(o.b)("inlineCode",{parentName:"p"},"x-api-key: $AUDO_API_KEY"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://api.audo.ai/v1/apiKey/test" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},' -> {"status":"success","detail":"Successfully authorized with api key"}\n')),Object(o.b)("p",null,"Provided that worked, you're all set up to start submitting audio. Follow to the next page to learn the specifics."))}d.isMDXComponent=!0}}]);