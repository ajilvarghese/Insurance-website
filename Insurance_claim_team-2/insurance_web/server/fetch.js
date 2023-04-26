const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();


app.use(cors());
app.use(bodyParser.json());


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'advalent_insurance_page'
});

connection.connect();

app.get('/doctor', (req, res) => {
  connection.query('SELECT * FROM doctor', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving states');
    } else {
      res.json(results);
    }
  });
});

app.get('/states', (req, res) => {
  connection.query('SELECT * FROM states', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving states');
    } else {
      res.json(results);
    }
  });
});

app.get('/city', (req, res) => {
  connection.query('SELECT * FROM cities', (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving cities');
    } else {
      res.json(results);
    }
  });
});
app.get('/search', (req, res) => {
 
  const query = 'SELECT * FROM search JOIN doctor ON search.doctor_id = doctor.doctor_id JOIN provider ON search.provider_id = provider.provider_id';
  connection.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});


app.get('/cities/:stateId', (req, res) => {
  const stateId = req.params.stateId;
  const query = 'SELECT * FROM cities WHERE state_id = ?';
  connection.query(query, [stateId], (error, results) => {
    if (error) {
      throw error;
    }
    res.send(results);
  });
});







app.listen(3000, () => {
  console.log('Server started on port 3000');
});