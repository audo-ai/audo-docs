---
id: processing-from-s3
title: Processing From S3
---

Audo's noise removal endpoint supports processing audio directly from S3 through the use of presigned URLs. To do this, simply pass presigned URLs to the `input` and `output` parameters of the `/noise-removal` endpoint. The specific format of these presigned urls is as follows:

- `input`: A presigned `GET` URL
- `output`: A presigned `PUT` URL with correct `ContentType` (ie. `video/mp4`)

*Note:* As of writing, the `aws presign` command [does not support generating `PUT` URLs](https://github.com/aws/aws-cli/pull/3979). However, you can see the example below for how to generate them using Python.

## Full Python Example

First, make sure to have dependencies installed (make sure to upgrade `audoai-noise-removal`):
```console
pip3 install --upgrade audoai-noise-removal boto3
# Configure aws with `aws configure`
```

Then, we can use this example script to generate the presigned URLs and remove noise:

```python
bucket = 'my-bucket'
s3_input_file = 'my-input.webm'
s3_output_file = 'my-noise-removed-output.mp4'
output_content_type = 'video/mp4'
audo_api_key = 'MY-AUDO-API-KEY'

# Generate Presigned URLs
import boto3
s3_client = boto3.client('s3')
input_url = s3_client.generate_presigned_url(
  'get_object',
  Params={'Bucket': bucket, 'Key': s3_input_file}
)
output_url = s3_client.generate_presigned_url(
  'put_object',
  Params={
  'Bucket': bucket,
  'Key': s3_output_file,
  'ContentType': output_content_type
  },
  HttpMethod='PUT'
)

# Remove Noise
from time import sleep
from audoai.noise_removal import NoiseRemovalClient

noise_removal = NoiseRemovalClient(api_key=audo_api_key)
job_id = noise_removal.create_job(input=input_url, output=output_url)
noise_removal.wait_for_job_id(job_id)

print('Noise removal complete. Waiting for upload...')
sleep(2.0)
print('Final result:', noise_removal.get_status(job_id))
```
