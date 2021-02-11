---
id: index
title: Audo AI Docs
sidebar_label: Quickstart
slug: /
---

Our API consists of a series of HTTP endpoints that you can call to perform noise removal. All request routes start with `https://api.audo.ai/v1`.

## Python Quickstart

Using our Python API, we can remove noise from audio using the following:


```python
from audoai import AudoClient

client = AudoClient(api_key='abc123')
result = client.remove_noise('my-audio.wav')
result.save('cleaned-audio.wav')
```

Note, this requires installing the `audoai` package on PyPI:

```bash
pip3 install audoai
```

View more details in the [Python API](python-api) section.


## Other Languages

If you are comfortable working with HTTP requests in your language, you can use our API directly by reviewing the [HTTP api](http-api) section.

Otherwise, let us know and we might be able to add support for your language.
