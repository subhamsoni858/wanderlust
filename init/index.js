require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});

  // Create or find the seed user
  let seedUser = await User.findOne({ username: "admin" });
  if (!seedUser) {
    seedUser = new User({ email: "admin@wanderlust.com", username: "admin" });
    await User.register(seedUser, "admin123");
    console.log("👤 Created seed user: admin");
  } else {
    console.log("👤 Found existing seed user: admin");
  }

  const geocodedData = [];

  for (let obj of initData.data) {
    let response = await geocodingClient
      .forwardGeocode({
        query: `${obj.location}, ${obj.country}`,
        limit: 1,
      })
      .send();

    let geometry = response.body.features[0].geometry;
    console.log(`✅ Geocoded: ${obj.location}, ${obj.country} → [${geometry.coordinates}]`);

    geocodedData.push({
      ...obj,
      owner: seedUser._id,
      geometry: geometry,
    });
  }

  await Listing.insertMany(geocodedData);
  console.log(`\n🎉 ${geocodedData.length} listings seeded with geocoded locations!`);
  mongoose.connection.close();
};

initDB();
