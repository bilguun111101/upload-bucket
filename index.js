const AWS = require('aws-sdk');

const s3 = new AWS.S3();
const uploadBucket = 'leaf3bilguunawstutorial';
const URL_EXPIRATION_SECONDS = 3000000;

exports.handler = async(event) => {
  const params = {
    Bucket: uploadBucket,
    Key: "img.png",
    Expires: URL_EXPIRATION_SECONDS,
    ContentType: 'image/png'
  }

  return new Promise((reslove, reject) => {
    const uploadUrl = s3.getSignedUrl('putObject', params);
    const response = {
      statusCode: 200,
      headers: {},
      body: JSON.stringify({ uploadUrl })
    }
    reslove(response);
  })
}