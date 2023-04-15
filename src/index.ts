import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import db from '../db'

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;





app.get('/', (req: Request, res: Response) => {
  db.query('SELECT * FROM moradores', (err, result) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal server error');
      return;
    }
    console.log(res);
    res.send(result);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
