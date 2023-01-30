require("dotenv").config();
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const keys = require(process.env.DB_SERVICE_ACCOUNT_KEY_PATH);
admin.initializeApp({
  credential: admin.credential.cert(keys),
});
const db = admin.firestore();

module.exports = async function addRecordToDB(data) {
  return db.collection("records").doc().set(data);
};
