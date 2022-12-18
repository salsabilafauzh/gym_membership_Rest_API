/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('gym_membership').del();
  await knex('gym_membership').insert([
    {
      id: 1,
      name: 'ananda zahira',
      sex: 'female',
      age: 22,
      date_since: '2022-09-19',
      date_end: '2022-12-19',
      type_membership: 'platinum',
    },
    {
      id: 2,
      name: 'maulana azir',
      sex: 'male',
      age: 20,
      date_since: '2022-11-16',
      date_end: '2022-12-16',
      type_membership: 'gold',
    },
    {
      id: 3,
      name: 'alif hadi',
      sex: 'male',
      age: 25,
      date_since: '2022-11-26',
      date_end: '2022-12-26',
      type_membership: 'gold',
    },
    {
      id: 4,
      name: 'ilham nur',
      sex: 'men',
      age: 30,
      date_since: '2022-12-19',
      date_end: '2022-12-26',
      type_membership: 'gold',
    },
    {
      id: 5,
      name: 'sinta indah',
      sex: 'female',
      age: 24,
      date_since: '2022-11-18',
      date_end: '2022-12-18',
      type_membership: 'gold',
    },
    {
      id: 6,
      name: 'raihan nf',
      sex: 'male',
      age: 20,
      date_since: '2022-09-19',
      date_end: '2022-12-19',
      type_membership: 'platinum',
    },
  ]);
};
