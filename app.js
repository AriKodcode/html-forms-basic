import express from 'express';
import fs from 'fs';
import checkBody from './middleware/checkBody.js';
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/get', (req, res) => {
  res.sendFile(
    'C:/Users/internet/Desktop/html_css/week_8/day_2/html-forms basic/index.html',
  );
});

app.get('/get/tasks', async (req, res) => {
  res
    .status(200)
    .json(JSON.parse(await fs.promises.readFile('./db.json', 'utf-8')));
});
app.post('/get/mission', checkBody, async (req, res) => {
  const data = JSON.parse(await fs.promises.readFile('./db.json', 'utf-8'));
  const mission = req.body.mission;
  data.push({ mission: mission });
  await fs.promises.writeFile(
    './db.json',
    JSON.stringify(data, null, 2),
    'utf-8',
  );
  res.status(200).json(req.body);
});

app.listen(5501, () => {
  console.log('server run...');
});
