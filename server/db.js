const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB_URI, connectionParams);
    console.log("Hey DB Connected");
  } catch (error) {
    console.log(error);
    console.log("DB not connected");
  }
};
