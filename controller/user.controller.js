const db = require("../db");

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.body;
    console.log(name, surname);
    const newPerson = await db.query(
      `INSERT INTO person (name,surname) values ($1,$2) RETURNING *`,
      [name, surname]
    );
    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const persons = await db.query(`SELECT * FROM PERSON`);
    res.json(persons.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM PERSON where id = $1`, [id]);
    res.json(user.rows);
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const user = await db.query(
      `update person set name = $1,surname = $2 where id = $3 returning *`,
      [name, surname, id]
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`delete FROM PERSON where id = $1`, [id]);
    res.json(user.rows);
  }
}

module.exports = new UserController();
