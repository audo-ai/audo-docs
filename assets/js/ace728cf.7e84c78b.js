(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(7),o=(n(0),n(85)),r={id:"endpoints",title:"Endpoints"},b={unversionedId:"endpoints",id:"endpoints",isDocsHomePage:!1,title:"Endpoints",description:"POST /upload",source:"@site/docs/endpoints.md",slug:"/endpoints",permalink:"/endpoints",version:"current",sidebar:"sidebar",previous:{title:"Audo AI Docs",permalink:"/"},next:{title:"Processing From S3",permalink:"/processing-from-s3"}},i=[],s={toc:i};function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"POST /upload "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"https://api.audo.ai/v1/upload"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Upload an audio file for future processing."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Form data: ",Object(o.b)("inlineCode",{parentName:"li"},"file=@path/to/file.wav")),Object(o.b)("li",{parentName:"ul"},"Optional url params:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"?inputExt=wav"),": Overrides input extension")))),Object(o.b)("p",null,"Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "fileId": "string"\n}\n')),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:20}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Simple example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.audo.ai/v1/upload" -F "file=@myaudio.wav" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"fileId":"bb7888d6-94ce-4638-aa90-68891257757f"}\n')),Object(o.b)("p",null,"Now we can use this ",Object(o.b)("inlineCode",{parentName:"p"},"fileId")," in a request to ",Object(o.b)("inlineCode",{parentName:"p"},"/remove-noise"),". See below for how."))),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"POST /remove-noise "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"https://api.audo.ai/v1/remove-noise"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Submit an input to the API for noise removal."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JSON body:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "input": "<fileId>" | "<inputUrl>",  // File ID from /upload or URL to download from\n  "outputExtension": "<extension>",  // [Optional] Output file extension (ie. \'mp3\')\n  "output": "<outputUrl>",  // [Optional] Url to perform a PUT request with the output\n  "noiseReductionAmount": "<int>" // [Optional] Amount of noise reduction. 100 = full reduction (default), 1 = almost no noise reduction\n}\n')),Object(o.b)("p",null,"Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "string"\n}\n')),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:20}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"fileId")," from ",Object(o.b)("inlineCode",{parentName:"p"},"/upload"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'FILE_ID=1b985607-045f-46b4-b8b0-c037592dd10e\ncurl -X POST "https://api.audo.ai/v1/remove-noise" -d \'{"fileId": "\'$FILE_ID\'"}\' -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"jobId": "45d08ed2-84e6-4f1e-a6f3-2ddbf3c7d8a3"}\n')),Object(o.b)("p",null,"Reduce noise by 90% using ",Object(o.b)("inlineCode",{parentName:"p"},"fileId")," from ",Object(o.b)("inlineCode",{parentName:"p"},"/upload"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'FILE_ID=1b985607-045f-46b4-b8b0-c037592dd10e\ncurl -X POST "https://api.audo.ai/v1/remove-noise" -d \'{"fileId": "\'$FILE_ID\'", "noiseReductionAmount": "90"}\' -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("p",null,"Remove noise from a remote video:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'url=https://dl5.webmfiles.org/big-buck-bunny_trailer.webm\ncurl -X POST "$BACKEND_URL/remove-noise" -d \'{"input": "\'$url\'", "outputExtension": "mp4"}\' -H "x-api-key: $AUDO_API_KEY" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("p",null,"Remove noise from audio within S3 using presigned URLs (",Object(o.b)("a",{parentName:"p",href:"/processing-from-s3"},"read more here"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'input=https://bucket.s3.amazonaws.com/foo.webm?AWSAccessKeyId=ABC&Signature=PxM%3D&Expires=1615338399\n\n# Note: See the full example for details about generating this\n# It needs to be a PUT request with the appropriate content type\noutput=https://bucket.s3.amazonaws.com/audo-enhanced_foo.mp4?AWSAccessKeyId=ABC&Signature=e8O%3D&content-type=video%2Fmp4&Expires=1615340231\ncurl -X POST "https://api.audo.ai/v1/remove-noise" -d \'{"input": "\'$input\'", "output": "\'$output\'"}\' -H "x-api-key: $AUDO_API_KEY"\n')))),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"GET /remove-noise/<jobId>/status "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"https://api.audo.ai/v1/remove-noise/<jobId>/status"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Retrieve the status of a job. Response possibilities:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "downloading" }  // Only if input is from a URL\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "queued", "jobsAhead": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "in_progress", "percent": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "succeeded", "downloadPath": "<downloadPath>" }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "failed", "reason": "<reason>" }\n')),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:10}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Here is an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168\ncurl -X GET "https://api.audo.ai/v1/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "state": "succeeded",\n  "downloadPath": "dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3"\n}\n')),Object(o.b)("p",null,"So, now we would be able to download our file by prepending ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3\n")))),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"WEBSOCKET /wss/remove-noise/<jobId>/status "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"wss://api.audo.ai/v1/wss/remove-noise/<jobId>/status"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Retrieve the status of a job in realtime without polling. This is a completely optional alternative method to find the status of a job."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Message format: Each message is a json encoded object in the exact same representation as the endpoint above:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "downloading" }  // Only if input is from a URL\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "queued", "jobsAhead": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "in_progress", "percent": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "succeeded", "downloadPath": "<downloadPath>" }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "failed", "reason": "<reason>" }\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Finally, don't forget to include the authentication header when connecting via ",Object(o.b)("inlineCode",{parentName:"li"},"x-api-key: $AUDO_API_KEY"),".")),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:10}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Here is an example that uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168\nwebsocat "wss://api.audo.ai/v1/wss/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{"state": "queued", "jobsAhead": 0}\n{"state": "in_progress", "percent": 10}\n{"state": "in_progress", "percent": 18}\n{"state": "in_progress", "percent": 20}\n// ...\n{"state": "in_progress", "percent": 95}\n{"state": "in_progress", "percent": 98}\n{"state": "in_progress", "percent": 100}\n{"state": "succeeded", "downloadPath": "dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav"}\n')),Object(o.b)("p",null,"So, same as before, we can now download our file by prepending ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav\n")))))}c.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),c=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=c(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,O=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?l.a.createElement(O,b(b({ref:t},s),{},{components:n})):l.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var s=2;s<o;s++)r[s]=n[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);