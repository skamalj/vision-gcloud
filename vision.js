// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
const gcsUri = `gs://bucket/bucketImage.png`;

async function myFunction(client) {
    const [result] = await client.objectLocalization(gcsUri);
    const objects = result.localizedObjectAnnotations;
}

  myFunction(client);