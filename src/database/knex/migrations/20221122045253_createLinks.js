
exports.up = knex => knex.schema.createTable("links", table => {
  table.increments("id");
  table.text("url").notNullable();

  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE") //se deletar a nota que a tag está vinculada, a tag também será deletada "FUNÇÃO CASCADE"
  table.timestamp("created_at").default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("notes");
