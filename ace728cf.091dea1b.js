(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(7),o=(n(0),n(86)),b={id:"endpoints",title:"Endpoints"},i={unversionedId:"endpoints",id:"endpoints",isDocsHomePage:!1,title:"Endpoints",description:"POST /upload",source:"@site/docs/endpoints.md",slug:"/endpoints",permalink:"/endpoints",version:"current",sidebar:"sidebar",previous:{title:"Audo AI Docs",permalink:"/"},next:{title:"Python API",permalink:"/python-api"}},s=[],p={toc:s};function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"POST /upload "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"https://api.audo.ai/v1/upload"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Upload an audio file for future processing."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Form data: ",Object(o.b)("inlineCode",{parentName:"li"},"file=@path/to/file.wav")),Object(o.b)("li",{parentName:"ul"},"Optional url params:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"?inputExt=wav"),": Overrides input extension")))),Object(o.b)("p",null,"Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "fileId": "string"\n}\n')),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:20}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Simple example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://api.audo.ai/v1/upload" -F "file=@myaudio.wav" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"fileId":"bb7888d6-94ce-4638-aa90-68891257757f"}\n')),Object(o.b)("p",null,"Now we can use this ",Object(o.b)("inlineCode",{parentName:"p"},"fileId")," in a request to ",Object(o.b)("inlineCode",{parentName:"p"},"/remove-noise"),". See below for how."))),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"POST /remove-noise "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"https://api.audo.ai/v1/remove-noise"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Submit an input to the API for noise removal."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"JSON body:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "input": "<fileId>" | "<inputUrl>",  // File ID from /upload or URL to download from\n  "outputExtension": "<extension>",  // [Optional] Output file extension (ie. \'mp3\')\n  "output": "<outputUrl>"  // [Optional] Url to perform a PUT request with the output\n}\n')),Object(o.b)("p",null,"Response:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "jobId": "string"\n}\n')),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:20}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"fileId")," from ",Object(o.b)("inlineCode",{parentName:"p"},"/upload"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'FILE_ID=1b985607-045f-46b4-b8b0-c037592dd10e\ncurl -X POST "https://api.audo.ai/v1/remove-noise" -d \'{"fileId": "\'$FILE_ID\'"}\' -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{"jobId": "45d08ed2-84e6-4f1e-a6f3-2ddbf3c7d8a3"}\n')),Object(o.b)("p",null,"Remove noise from a remote video:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'url=https://dl5.webmfiles.org/big-buck-bunny_trailer.webm\ncurl -X POST "$BACKEND_URL/remove-noise" -d \'{"input": "\'$url\'", "outputExtension": "mp4"}\' -H "x-api-key: $AUDO_API_KEY" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("p",null,"Remove noise from audio within S3 using presigned URLs (see note below):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'input=https://bucket.s3.amazonaws.com/foo.webm?AWSAccessKeyId=ABC&Signature=PxM%3D&Expires=1615338399\noutput=https://bucket.s3.amazonaws.com/audo-enhanced_foo.mp4?AWSAccessKeyId=ABC&Signature=e8O%3D&content-type=video%2Fmp4&Expires=1615340231\ncurl -X POST "https://api.audo.ai/v1/remove-noise" -d \'{"input": "\'$input\'", "output": "\'$output\'"}\' -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("p",null,"Note: The output must be a ",Object(o.b)("inlineCode",{parentName:"p"},"PUT")," presigned URL with the ",Object(o.b)("inlineCode",{parentName:"p"},"ContentType")," set to your output format (ie. ",Object(o.b)("inlineCode",{parentName:"p"},"video/mp4"),"). "),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:20}},"Python Full S3 Example"),Object(o.b)("p",null,Object(o.b)("p",null,"First, make sure to have dependencies installed (make sure to upgrade ",Object(o.b)("inlineCode",{parentName:"p"},"audoai-noise-removal"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-console"},"pip3 install --upgrade audoai-noise-removal boto3\n# Configure aws with `aws configure`\n")),Object(o.b)("p",null,"Then, we can use this example script to generate the presigned URLs and remove noise:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"bucket = 'my-bucket'\ns3_input_file = 'my-input.webm'\ns3_output_file = 'my-noise-removed-output.mp4'\noutput_content_type = 'video/mp4'\naudo_api_key = 'MY-AUDO-API-KEY'\n\n# Generate Presigned URLs\nimport boto3\ns3_client = boto3.client('s3')\ninput_url = s3_client.generate_presigned_url(\n  'get_object',\n  Params={'Bucket': bucket, 'Key': s3_input_file}\n)\noutput_url = s3_client.generate_presigned_url(\n  'put_object',\n  Params={\n  'Bucket': bucket,\n  'Key': s3_output_file,\n  'ContentType': output_content_type\n  },\n  HttpMethod='PUT'\n)\n\n# Remove Noise\nfrom time import sleep\nfrom audoai.noise_removal import NoiseRemovalClient\n\nnoise_removal = NoiseRemovalClient(api_key=audo_api_key)\njob_id = noise_removal.create_job(input=input_url, output=output_url)\nnoise_removal.wait_for_job_id(job_id)\n\nprint('Noise removal complete. Waiting for upload...')\nsleep(2.0)\nprint('Final result:', noise_removal.get_status(job_id))\n")))))),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"GET /remove-noise/<jobId>/status "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"https://api.audo.ai/v1/remove-noise/<jobId>/status"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Retrieve the status of a job. Response possibilities:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "downloading" }  // Only if input is from a URL\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "queued", "jobsAhead": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "in_progress", "percent": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "succeeded", "downloadPath": "<downloadPath>" }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "failed", "reason": "<reason>" }\n')),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:10}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Here is an example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168\ncurl -X GET "https://api.audo.ai/v1/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "state": "succeeded",\n  "downloadPath": "dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3"\n}\n')),Object(o.b)("p",null,"So, now we would be able to download our file by prepending ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3\n")))),Object(o.b)("div",{style:{display:"inline"}},Object(o.b)("h2",{style:{display:"inline",paddingRight:10}},"WEBSOCKET /wss/remove-noise/<jobId>/status "),Object(o.b)("div",{style:{color:"#bbbbbb",display:"inline"}},Object(o.b)("i",null,"wss://api.audo.ai/v1/wss/remove-noise/<jobId>/status"),Object(o.b)("br",null))),Object(o.b)("div",{style:{height:14}}),Object(o.b)("p",null,"Retrieve the status of a job in realtime without polling. This is a completely optional alternative method to find the status of a job."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Message format: Each message is a json encoded object in the exact same representation as the endpoint above:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "downloading" }  // Only if input is from a URL\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "queued", "jobsAhead": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "in_progress", "percent": <number> }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "succeeded", "downloadPath": "<downloadPath>" }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "state": "failed", "reason": "<reason>" }\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Finally, don't forget to include the authentication header when connecting via ",Object(o.b)("inlineCode",{parentName:"li"},"x-api-key: $AUDO_API_KEY"),".")),Object(o.b)("details",null,Object(o.b)("summary",{style:{paddingBottom:10}},"Examples"),Object(o.b)("p",null,Object(o.b)("p",null,"Here is an example that uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/vi/websocat"},"websocat"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168\nwebsocat "wss://api.audo.ai/v1/wss/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{"state": "queued", "jobsAhead": 0}\n{"state": "in_progress", "percent": 10}\n{"state": "in_progress", "percent": 18}\n{"state": "in_progress", "percent": 20}\n// ...\n{"state": "in_progress", "percent": 95}\n{"state": "in_progress", "percent": 98}\n{"state": "in_progress", "percent": 100}\n{"state": "succeeded", "downloadPath": "dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav"}\n')),Object(o.b)("p",null,"So, same as before, we can now download our file by prepending ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.audo.ai/v1/"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav\n")))))}c.isMDXComponent=!0}}]);