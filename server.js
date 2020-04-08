const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();



connectDB();
app.use(cors())
app.get('/', (req, res) => res.send('API running'));
app.use(express.json({ extended: false }));
app.use('/api/user', require('./Routes/Api/users'));
app.use('/api/upload', require('./Routes/Api/upload'));
app.use('/api/resume', require('./Routes/Api/resume'));

app.use('/public', express.static('public'));


const PORT = 5000;





app.listen(PORT, () => console.log(`Server is listenion on ${PORT}`));