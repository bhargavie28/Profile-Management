const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();
var multer = require('multer');
const FILE_PATH = 'uploads';
const upload = multer({
    dest: `${FILE_PATH}/`
});


connectDB();
app.use(cors())
app.get('/', (req, res) => res.send('API running'));
app.use(express.json({ extended: false }));
app.use('/api/user', require('./Routes/Api/users'));
const PORT = 5000;





app.listen(PORT, () => console.log(`Server is listenion on ${PORT}`));