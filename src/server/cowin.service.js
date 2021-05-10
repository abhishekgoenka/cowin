const https = require("https");

function getCenters(req, res) {
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=505&date=10-05-2021`;
  console.log(url);
  https.get(url, (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp
      .on("end", () => {
        if (data && data != 'Unauthenticated access!') {
          res.status(200).json(JSON.parse(data));
        } else {
          console.log('response : ' + data);
          res.status(500).json(data);
        }
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
        res.status(500).json(err.message);
      });
  });
}

module.exports = {
  getCenters,
};
