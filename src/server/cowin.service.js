const https = require("https");

function getCenters(req, res) {
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=505&date=08-05-2021`;
  https.get(url, (resp) => {
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp
      .on("end", () => {
        // console.log(JSON.parse(data));
        res.status(200).json(JSON.parse(data));
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  });
}

module.exports = {
  getCenters,
};
