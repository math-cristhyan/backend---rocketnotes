
exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();

  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE") //se deletar a nota que a tag está vinculada, a tag também será deletada "FUNÇÃO CASCADE"
  table.integer("user_id").references("id").inTable("users");
});


exports.down = knex => knex.schema.dropTable("notes");
