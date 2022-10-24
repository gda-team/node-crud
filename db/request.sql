// CREATE DATABASE

CREATE DATABASE crudnodepostgres;

// CREATE TABLE

CREATE TABLE IF NOT EXISTS contact(
    id BIGSERIAL PRIMARY KEY NOT NULL, nom VARCHAR(20) NOT NULL, prenom VARCHAR(20) NOT NULL, email VARCHAR(20) NOT NULL, tel VARCHAR(15) NOT NULL,description VARCHAR(100), date_creation DATE DEFAULT CURRENT_DATE 
);
