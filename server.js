const express = require('express');
require('dotenv').config();

const app = express();
const configDB = require('./knexfile');
/** @type {import("knex").Knex} */
const knex = require('knex')(configDB[process.env.NODE_ENV]);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

/*
End point API gym membership
*/

/**
 * GET endpoint
 * @route : GET /api/gym_member
 * @desc : show all membership data
 *
 */
app.get('/api/gym-member/', async (req, res) => {
  const members = await knex.select('*').from('gym_membership');
  res.json({
    success: true,
    message: 'melihat data membership gym',
    data: members,
  });
});

/**
 * GET endpoint
 * @route : GET /api/gym_member/id
 * @desc: show spesific member by id
 *
 */
app.get('/api/gym-member/:id', async (req, res) => {
  const { id } = req.params;

  const member = await knex.select('*').from('gym_membership').where('id', id);

  if (member == '') {
    return res.status(404).json({
      success: false,
      message: 'id tidak ditemukan',
    });
  }
  res.json({
    success: true,
    message: `melihat data membership id gym user: ${req.params.id}`,
    data: member,
  });
});

/**
 * GET endpoint
 * @route : GET /api/gym_member
 * @desc: show spesific member by date end membership
 *
 */
app.get('/api/gym-member/end_membership/:date_end', async (req, res) => {
  const { date_end } = req.params;
  const members_end = await knex.select('*').from('gym_membership').where('date_end', date_end);

  if (members_end == '') {
    return res.status(404).json({
      success: false,
      message: 'tanggal berakhir yang sesuai tidak ditemukan',
    });
  }
  res.json({
    success: true,
    message: `melihat data tanggal berakhir: ${date_end}`,
    data: members_end,
  });
});

/**
 * POST endpoint
 * @route : POST /api/gym_member
 * @desc: create new member into gym_membership table
 *
 */
app.post('/api/gym-member/', async (req, res) => {
  const { id, name, sex, age, date_since, date_end, type_membership } = req.body;

  const newMember = await knex
    .insert({
      id,
      name,
      sex,
      age,
      date_since,
      date_end,
      type_membership,
    })
    .into('gym_membership');

  if (!newMember) {
    return res.status(400).json({
      success: false,
      message: 'tidak dapat menambahkan member baru.',
    });
  }
  return res.json({
    success: true,
    message: 'menambahkan data member baru',
  });
});

/**
 * PUT endpoint
 * @route : PUT /api/gym_member
 * @desc: update member by spesific id gym user
 *
 */
app.put('/api/gym-member/', async (req, res) => {
  const { id, name, sex, age, date_since, date_end, type_membership } = req.body;

  const member = await knex.select('*').from('gym_membership').where({ id: id }).update({
    name,
    sex,
    age,
    date_since,
    date_end,
    type_membership,
  });

  if (!member) {
    return res.status(404).json({
      message: 'Id tidak ditemukan',
    });
  }
  return res.json({
    success: true,
    message: `mengupdate data membership id: ${req.body.id}`,
  });
});

/**
 * DELETE endpoint
 * @route : DELETE /api/gym_member/id
 * @desc: delete member by spesific id gym user
 *
 */
app.delete('/api/gym-member/:id', async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(422).json({
      message: 'id tidak valid',
    });
  }

  const member = await knex.del().from('gym_membership').where('id', id);

  if (!member) {
    return res.status(404).json({
      message: 'id tidak ditemukan',
    });
  }
  res.json({
    success: true,
    message: `menghapus data membership id: ${req.params.id}`,
  });
});

/**
 * DELETE endpoint
 * @route : DELETE /api/gym_member/id
 * @desc: delete member by spesific date end membership
 *
 */
app.delete('/api/gym-member/end_membership/:date_end', async (req, res) => {
  const { date_end } = req.params;

  const member = await knex.del().from('gym_membership').where('date_end', date_end);

  if (!member) {
    return res.status(404).json({
      message: 'tanggal berakhir sesuai tidak ditemukan',
    });
  }
  res.json({
    success: true,
    message: `menghapus data membership tanggal berakhir membership: ${date_end}`,
  });
});

/** 
connection database & server


**/
knex
  .raw('select 1+1 as result')
  .then(() => {
    console.log('Database connected.');
  })
  .catch((err) => console.log('Unable to connect to the database, error: ' + err));

app.get('/', (req, res) => {
  res.send('TEST API....');
});
app.listen(PORT, (err, res) => {
  if (err) {
    console.log("server couldn't start.");
  }
  console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`);
});
