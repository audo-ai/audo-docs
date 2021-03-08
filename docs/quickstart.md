---
id: index
title: Audo AI Docs
sidebar_label: Quickstart
slug: /
---

Our noise removal API consists of a simple set of HTTP endpoints located under `https://api.audo.ai/v1/`. These endpoints are as follows:

 - `POST /upload` with an audio file to obtain `<fileId>`
 - `POST /remove-noise` with `<fileId>` to obtain `<jobId>`
 - `GET /remove-noise/<jobId>/status` to check the status of the job and get `<outputPath>`
 - `GET /<outputPath>` to download the processed audio file with noise removed

We'll cover these in more detail on the next page.

## Getting an API key

You can find your API key in [the account page of the closed beta](https://app.audo.ai/account). For the rest of this guide we will use `$AUDO_API_KEY` to refer to this key. You can set it in a Linux terminal as follows:
```
AUDO_API_KEY=YOUR-KEY-HERE
```

## Authentication

In all calls to the API, include the header `x-api-key: $AUDO_API_KEY`. For example:

```bash
curl -X GET "https://api.audo.ai/v1/apiKey/test" -H "x-api-key: $AUDO_API_KEY"
```
```json
 -> {"status":"success","detail":"Successfully authorized with api key"}
```

Provided that worked, you're all set up to start submitting audio. Follow to the next page to learn the specifics.
