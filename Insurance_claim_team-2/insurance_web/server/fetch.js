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
  database: 'advalent_insurance_page',
  // port: '3307'
});

connection.connect();



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

app.get('/doctors/:speciality', (req, res) => {
  const speciality = req.params.speciality; // get the speciality parameter from the request URL
  const sql = `SELECT * FROM doctor WHERE doctor_speciality = ?`; // use a parameterized query
  connection.query(sql, [speciality], (error, results, fields) => { // pass the speciality parameter as an array to the query
    if (error) {
      console.log(error);
      res.status(500).send('Error fetching doctors');
    } else {
      res.json(results);
     

    }
  });
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});