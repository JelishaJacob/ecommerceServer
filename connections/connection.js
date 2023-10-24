const mongoose = require('mongoose')


mongoose.connect(process.env.BASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("____________Mongodb Atlas Connected____________");
}).catch(() => {
    console.log("____________Mongodb Atlas Not Connected__________");
})