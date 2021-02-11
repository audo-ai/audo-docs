---
id: http-api
title: HTTP API
---

If we want to remove noise in a language other than Python, the basic process is as follows:

 - `POST /v1/remove-noise` with our audio file (authenticated with our API key)
 - `GET /v1/remove-noise/<job-id>/status` until we see `{"state": "succeeded", "processedUrl": "<processedUrl>"}`
 - `GET <processedUrl>` to download the processed audio file with noise removed

Here is a complete example of how we do this using `curl` and `jq` (in Ubuntu, `sudo apt-get install -y curl jq`):

```bash

AUDO_API_KEY=abc123  # Replace with your own key
AUDIO_FILE_NAME=audio.wav  # Replace with your audio filename (relative to current dir)
OUTPUT_FILE_NAME=processed.wav  # What we will save the noise-removed file to

# Submit the audio file
jobInfo=$(curl -X POST "https://api.audo.ai/v1/remove-noise" -F "file=@$AUDIO_FILE_NAME" -H "Authorization: Bearer $AUDO_API_KEY")
echo "$jobInfo"
jobId=$(jq -r '.jobId' <<< $jobInfo)

# Wait until it's finished processing
state=""
while [ "$state" != "succeeded" ]; do
    sleep 0.5
    status=$(curl "https://api.audo.ai/v1/remove-noise/$jobId/status")
    state=$(jq -r '.state' <<< $status)
done

# Download the processed audio file
processedUrl=$(jq '.processedUrl' <<< $status)
curl "$processedUrl" > "$OUTPUT_FILE_NAME"

```