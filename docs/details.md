---
id: details
title: Details
---

## Authentication

To authenticate your requests, pass your API key (listed in the beta dashboard) in the HTTP header `Authorization: Bearer <apiKey>`:

```bash
AUDO_API_KEY=abc123  # Replace with actual API key
curl https://api.audo.ai/apiKey/test -H "Authorization: Bearer $AUDO_API_KEY"
```

Example output:

```json
{"status":"success","detail":"Successfully authorized with api key"}
```

## Noise Removal

```
POST https://api.audo.ai/v1/remove-noise
```

```json
{
  "jobId": "abc123"
}
```