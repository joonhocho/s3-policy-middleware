import S3Policy from 's3-policy-v4';

export default (config) => {
  const {
    NAME_PREFIX: keyPrefix,
    REGION: region,
    BUCKET: bucket,
    ACCESS_KEY_ID: accessKey,
    SECRET_ACCESS_KEY: secretKey,
  } = config;

  const endPoint = `https://${bucket}.s3.amazonaws.com`;
  const urlPrefix = `${endPoint}/`;

  return (req, res, next) => {
    const {
      name,
      contentType,
    } = req.body;

    if (!name) return next(new Error('name is required!'));
    if (!contentType) return next(new Error('contentType is required!'));

    const key = keyPrefix + name;

    const policy = S3Policy.generate({
      key,
      bucket,
      contentType,
      region,
      accessKey,
      secretKey,
      // successActionStatus: '',
    });

    res.json({
      endPoint,
      url: urlPrefix + key,
      policy,
    });
  };
};
