const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server is running on port :${PORT}`);
});
