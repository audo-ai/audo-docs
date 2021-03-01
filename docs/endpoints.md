---
id: endpoints
title: Endpoints
---

<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>POST /remove-noise </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>https://api.audo.ai/v1/remove-noise</i><br/></div>
</div>

<div style={{height: 14}}></div>

Submit an audio file to the API for noise removal.

 - Form data: `file=@path/to/file.wav`
 - Url params: `?outputExt=mp3`

Response:

```json
{
    "jobId": "string"
}
```

<details>
<summary style={{paddingBottom: 20}}>Example</summary>
<p>

Simple example:

```bash
curl -X POST "https://api.audo.ai/v1/remove-noise" -F "file=@myaudio.wav" -H "x-api-key: $AUDO_API_KEY"
```

Remove noise from a video:

```bash
curl -X POST "https://api.audo.ai/v1/remove-noise?outputExt=mp4" -F "file=@myvideo.mp4" -H "x-api-key: $AUDO_API_KEY"
```

Convert between audio formats:

```bash
curl -X POST "https://api.audo.ai/v1/remove-noise?outputExt=mp3" -F "file=@myaudio.ogg" -H "x-api-key: $AUDO_API_KEY"
```

See how to get the result from the job ID below.

</p>
</details>

<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>GET /remove-noise/&lt;jobId&gt;/status </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>https://api.audo.ai/v1/remove-noise/&lt;jobId&gt;/status</i><br/></div>
</div>

<div style={{height: 14}}></div>

Retrieve the status of a job. Response possibilities:

 ```json
 {"state": "queued", "jobsAhead": <number>}
 ```
 
 ```json
 {"state": "in_progress", "percent": <number>}
 ```

 ```json
 {"state": "succeeded", "processedPath": "<processedPath>"}
 ```
 ```json
 {"state": "failed", "reason": "<reason>"}
 ```

<details>
<summary style={{paddingBottom: 10}}>Example</summary>
<p>

Here is an example:
```bash
JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168
curl -X GET "https://api.audo.ai/v1/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"
```

```json
{
    "state": "succeeded",
    "processedPath": "dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3"
}
```

So, now we would be able to download our file by prepending `https://api.audo.ai/v1/`:

```bash
curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3
```

</p>
</details>


<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>WEBSOCKET /remove-noise/&lt;jobId&gt;/ws </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>ws://api.audo.ai/v1/remove-noise/&lt;jobId&gt;/ws</i><br/></div>
</div>

<div style={{height: 14}}></div>

Retrieve the status of a job in realtime without polling. This is a completely optional alternative method to find the status of a job.

- Message format: Each message is a json encoded object in the exact same representation as the endpoint above:


 ```json
 {"state": "queued", "jobsAhead": <number>}
 ```
 
 ```json
 {"state": "in_progress", "percent": <number>}
 ```

 ```json
 {"state": "succeeded", "processedPath": "<processedPath>"}
 ```
 ```json
 {"state": "failed", "reason": "<reason>"}
 ```


 - Finally, don't forget to include the authentication header when connecting via `x-api-key: $AUDO_API_KEY`.

<details>
<summary style={{paddingBottom: 10}}>Example</summary>
<p>

Here is an example that uses [websocat](https://github.com/vi/websocat):
```bash
JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168
websocat "https://api.audo.ai/v1/remove-noise/$JOB_ID/ws" -H "x-api-key: $AUDO_API_KEY"
```

```json
{"state": "queued", "jobsAhead": 0}
{"state": "in_progress", "percent": 10}
{"state": "in_progress", "percent": 18}
{"state": "in_progress", "percent": 20}
// ...
{"state": "in_progress", "percent": 95}
{"state": "in_progress", "percent": 98}
{"state": "in_progress", "percent": 100}
{"state": "succeeded", "processedPath": "dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav"}
```

So, same as before, we can now download our file by prepending `https://api.audo.ai/v1/`:

```bash
curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav
```

</p>
</details>