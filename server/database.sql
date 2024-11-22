/* We created a database called perntodo */
CREATE DATABASE perntodo

/* We created a table called todo with an auto-incrementing, id which helps us with getting specific data and a description field */
CREATE TABLE  todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(225)
);