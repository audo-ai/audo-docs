---
id: index
title: Audo AI Docs
sidebar_label: Quickstart
slug: /
---

Our API consists of a simple HTTP API located at `https://api.audo.ai/v1/` that you can call to perform noise removal. The routes are as follows:

 - `POST /remove-noise` with an audio file to obtain `<jobId>`
 - `GET /remove-noise/<jobId>/status` to check the status of the job and get `<processedPath>`
 - `GET /<processedPath>` to download the processed audio file with noise removed

We'll cover these endpoints in more detail on the next page.

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
