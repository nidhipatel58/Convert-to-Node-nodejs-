let express = require("express");
let path = require('path');
let app = express();


app.use(express.static(path.join(__dirname)))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
