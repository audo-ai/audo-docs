---
id: python-api
title: Python API
---

## Python Quickstart

Using our Python API, we can simplify calling the API down to just a few lines of code:


```python
from audoai.noise_removal import NoiseRemovalClient

noise_removal = NoiseRemovalClient(api_key='abc123')
result = noise_removal.process('my-audio.wav')
result.save('cleaned-audio.wav')
```

Note, this requires installing the `audoai-noise-removal` package on PyPI:

```bash
pip3 install audoai-noise-removal
```

If you want to so something more specific like spawn multiple jobs at once or save the result into memory, have a look at [the source code](https://github.com/audo-ai/audoai-python). Nearly all methods are documents and we will have generated documentation soon.
