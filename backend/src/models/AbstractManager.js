class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  find(id) {
    return this.connection.query(
      `SELECT * FROM ${this.table} JOIN category ON category_id = category.id  where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select * from  ${this.table} JOIN category ON category_id = category.id`
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = AbstractManager;
