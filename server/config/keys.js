require('dotenv').config();

module.exports = {
  mongoURI: `mongodb://${process.env.MONGO_USERNAME}:${
    process.env.MONGO_PASS
  }@synapseprepcluster-shard-00-00-xfwt7.azure.mongodb.net:27017,synapseprepcluster-shard-00-01-xfwt7.azure.mongodb.net:27017,synapseprepcluster-shard-00-02-xfwt7.azure.mongodb.net:27017/test?ssl=true&replicaSet=Synapseprepcluster-shard-0&authSource=admin&retryWrites=true`,
  secretOrKey: `${process.env.SECRET_OR_KEY}`,
  emailUser: `${process.env.EMAIL_USER}`,
  emailPassword: `${process.env.EMAIL_PASSWORD}`,
};
