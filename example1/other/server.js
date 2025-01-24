const express = require('express');
const cors = require('cors');

const app = express();

// CORS 설정 (모든 도메인 허용)
app.use(cors());

// GET 요청
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello Simple Request!', data: [1, 2, 3, 4, 5] });
});
