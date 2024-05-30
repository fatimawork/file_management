const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const userRoutes = require('./routes/users');
app.use('/api', userRoutes);

const fileRoutes = require('./routes/files');
app.use('/api', fileRoutes);

const postRoutes = require('./routes/postes');
app.use('/api', postRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});
