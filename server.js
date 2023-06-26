const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static('public'));



const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`)
}
)