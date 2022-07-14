const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('To the moon!');
});

app.listen(port, () => {
    console.log(`Lunalectric frontend running on port ${port}!`)
});