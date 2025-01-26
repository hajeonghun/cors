const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// CORS 설정 (모든 도메인 허용)
app.use(cors());

// GET 요청
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello Preflight Request!', data: [1, 2, 3, 4, 5] });
});

app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
});
