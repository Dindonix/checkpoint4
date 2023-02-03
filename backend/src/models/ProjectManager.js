const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.connection.query(
      `INSERT INTO ${this.table} (project_name, project_image, category_id) VALUES (?, ?, ?)`,
      [project.project_name, project.project_image, project.category_id]
    );
  }

  update(project) {
    return this.connection.query(
      `UPDATE ${this.table} SET project_name = ?, project_image = ?, category_id = ? where id = ?`,
      [
        project.project_name,
        project.project_image,
        project.category_id,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
