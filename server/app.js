const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
