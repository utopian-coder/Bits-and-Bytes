const fs = require("fs/promises");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const download = require("image-downloader");
const mime = require("mime-types");

const downloadAndUploadToS3 = async (cover) => {
  const fileName = `${Date.now()}.jpg`;

  const options = {
    url: cover,
    dest: `/tmp/${fileName}`,
  };

  const { filename: coverImage } = await download.image(options);
  const mimetype = mime.lookup(`/tmp/${fileName}`);

  const coverUrl = await uploadToS3(fileName, coverImage, mimetype);
  return coverUrl;
};

const bucket = "utopian-bits-and-bytes";

const uploadToS3 = async (originalFileName, path, mimetype) => {
  const client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });

  const parts = originalFileName.split(".");
  const extension = parts.at(-1); //Value at last index

  const newFileName = `${Date.now()}.${extension}`;
  const cover = await fs.readFile(path);

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Body: cover,
      Key: newFileName,
      ContentType: mimetype,
      ACL: "public-read",
    })
  );

  console.log(`https://${bucket}.s3.amazonaws.com/${newFileName}`);

  return `https://${bucket}.s3.amazonaws.com/${newFileName}`;
};

module.exports = downloadAndUploadToS3;
