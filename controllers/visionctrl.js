// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

var getImageCoordinates = function (request, res) {

    const client = new vision.ImageAnnotatorClient();
    
    buffer = Buffer.from(request.body.dataurl.split(",")[1], 'base64')
   
    const imagedata = {
        image: { content: buffer },
    }

    client
        .objectLocalization(imagedata)
        .then(response => {
            const objects = response[0].localizedObjectAnnotations;
            normvertices = objects.filter(object => object.name === 'Person')
            .map(object => object.boundingPoly.normalizedVertices)
      
            console.log(JSON.stringify(normvertices));
            res.send(normvertices);
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = {
    getImageCoordinates: getImageCoordinates
}
