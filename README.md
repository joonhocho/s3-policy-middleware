# s3-policy-middleware
Amazon AWS S3 Upload Policy Generator Middleware with Signature Version 4

### Install
```
npm install --save s3-policy-middleware
```


### Usage
```javascript
import s3PolicyMiddleware from 's3-policy-middleware';

// Generates and returns a pre-signed s3 policy as json
// for POST request to /s3policy
// with req.body = {name: String!, contentType: String!}
app.use('/s3policy', s3PolicyMiddleware({
  NAME_PREFIX: 'S3_OBJECT_KEY_PREFIX',
  BUCKET: 'S3_BUCKET_NAME',
  REGION: 'S3_BUCKET_REGION',
  ACCESS_KEY_ID: 'S3_ACCESS_KEY',
  SECRET_ACCESS_KEY: 'S3_SECRET_KEY'
}));
```


### TODO


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
