import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("todos", (table) => {
        table.increments("id").primary();
        table.text("description").notNullable(); 
        table.boolean("completed").defaultTo(false);
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("todos");
}

