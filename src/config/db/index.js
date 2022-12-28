const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connnected to MongoDB");
    } catch (error) {
        console.log("Don't connect to MongoDB");
    }
};

module.exports = { connect };
