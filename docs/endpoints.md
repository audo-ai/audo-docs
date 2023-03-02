---
id: endpoints
title: Endpoints
---

<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>POST /upload </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>https://api.audo.ai/v1/upload</i><br/></div>
</div>

<div style={{height: 14}}></div>

Upload an audio file for future processing.

 - Form data: `file=@path/to/file.wav`
 - Optional url params:
   - `?inputExt=wav`: Overrides input extension

Response:

```json
{
  "fileId": "string"
}
```

<details>
<summary style={{paddingBottom: 20}}>Examples</summary>
<p>

Simple example:

```bash
curl -X POST "https://api.audo.ai/v1/upload" -F "file=@myaudio.wav" -H "x-api-key: $AUDO_API_KEY"
```
```
{"fileId":"bb7888d6-94ce-4638-aa90-68891257757f"}
```

Now we can use this `fileId` in a request to `/remove-noise`. See below for how.

</p>
</details>

<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>POST /remove-noise </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>https://api.audo.ai/v1/remove-noise</i><br/></div>
</div>

<div style={{height: 14}}></div>

Submit an input to the API for noise removal.

 - JSON body:
```json
{
  "input": "<fileId>" | "<inputUrl>",  // File ID from /upload or URL to download from
  "outputExtension": "<extension>",  // [Optional] Output file extension (ie. 'mp3')
  "output": "<outputUrl>",  // [Optional] Url to perform a PUT request with the output
  "noiseReductionAmount": "<int>" // [Optional] Amount of noise reduction. 100 = full reduction (default), 1 = almost no noise reduction
}
 ```

Response:

```json
{
  "jobId": "string"
}
```

<details>
<summary style={{paddingBottom: 20}}>Examples</summary>
<p>

Using `fileId` from `/upload`:

```bash
FILE_ID=1b985607-045f-46b4-b8b0-c037592dd10e
curl -X POST "https://api.audo.ai/v1/remove-noise" -d '{"input": "'$FILE_ID'"}' -H "x-api-key: $AUDO_API_KEY"
```
```
{"jobId": "45d08ed2-84e6-4f1e-a6f3-2ddbf3c7d8a3"}
```


Reduce noise by 90% using `fileId` from `/upload`:
```bash
FILE_ID=1b985607-045f-46b4-b8b0-c037592dd10e
curl -X POST "https://api.audo.ai/v1/remove-noise" -d '{"input": "'$FILE_ID'", "noiseReductionAmount": "90"}' -H "x-api-key: $AUDO_API_KEY"
```

Remove noise from a remote video:

```bash
url=https://dl5.webmfiles.org/big-buck-bunny_trailer.webm
curl -X POST "$BACKEND_URL/remove-noise" -d '{"input": "'$url'", "outputExtension": "mp4"}' -H "x-api-key: $AUDO_API_KEY" -H
```

Remove noise from audio within S3 using presigned URLs ([read more here](/processing-from-s3)):

```bash
input=https://bucket.s3.amazonaws.com/foo.webm?AWSAccessKeyId=ABC&Signature=PxM%3D&Expires=1615338399

# Note: See the full example for details about generating this
# It needs to be a PUT request with the appropriate content type
output=https://bucket.s3.amazonaws.com/audo-enhanced_foo.mp4?AWSAccessKeyId=ABC&Signature=e8O%3D&content-type=video%2Fmp4&Expires=1615340231
curl -X POST "https://api.audo.ai/v1/remove-noise" -d '{"input": "'$input'", "output": "'$output'"}' -H "x-api-key: $AUDO_API_KEY"
```


</p>
</details>

<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>GET /remove-noise/&lt;jobId&gt;/status </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>https://api.audo.ai/v1/remove-noise/&lt;jobId&gt;/status</i><br/></div>
</div>

<div style={{height: 14}}></div>

Retrieve the status of a job. Response possibilities:

```json
{ "state": "downloading" }  // Only if input is from a URL
```

```json
{ "state": "queued", "jobsAhead": <number> }
```

```json
{ "state": "in_progress", "percent": <number> }
```

```json
{ "state": "succeeded", "downloadPath": "<downloadPath>" }
```

```json
{ "state": "failed", "reason": "<reason>" }
```

<details>
<summary style={{paddingBottom: 10}}>Examples</summary>
<p>

Here is an example:

```bash
JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168
curl -X GET "https://api.audo.ai/v1/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"
```

```json
{
  "state": "succeeded",
  "downloadPath": "dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3"
}
```

So, now we would be able to download our file by prepending `https://api.audo.ai/v1/`:

```bash
curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_d29940ad-feb8-4187-8b31-e5778ef9ad1c.mp3
```

</p>
</details>

<div style={{display: 'inline'}}>
  <h2 style={{display: 'inline', paddingRight: 10 }}>WEBSOCKET /wss/remove-noise/&lt;jobId&gt;/status </h2>
  <div style={{color: "#bbbbbb", display: 'inline' }}><i>wss://api.audo.ai/v1/wss/remove-noise/&lt;jobId&gt;/status</i><br/></div>
</div>

<div style={{height: 14}}></div>

Retrieve the status of a job in realtime without polling. This is a completely optional alternative method to find the status of a job.

- Message format: Each message is a json encoded object in the exact same representation as the endpoint above:

```json
{ "state": "downloading" }  // Only if input is from a URL
```

```json
{ "state": "queued", "jobsAhead": <number> }
```

```json
{ "state": "in_progress", "percent": <number> }
```

```json
{ "state": "succeeded", "downloadPath": "<downloadPath>" }
```

```json
{ "state": "failed", "reason": "<reason>" }
```

- Finally, don't forget to include the authentication header when connecting via `x-api-key: $AUDO_API_KEY`.

<details>
<summary style={{paddingBottom: 10}}>Examples</summary>
<p>

Here is an example that uses [websocat](https://github.com/vi/websocat):

```bash
JOB_ID=be1e2138-433d-4278-8a79-698dfbab9168
websocat "wss://api.audo.ai/v1/wss/remove-noise/$JOB_ID/status" -H "x-api-key: $AUDO_API_KEY"
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
{"state": "succeeded", "downloadPath": "dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav"}
```

So, same as before, we can now download our file by prepending `https://api.audo.ai/v1/`:

```bash
curl -O https://api.audo.ai/v1/dl/artifacts/clean/audo_enhanced_7c9e10b3-96ca-4904-aecf-ce815339c859.wav
```

</p>
</details>
