DROP DATABASE IF EXISTS sanchez_clients;

CREATE TABLE sanchez_clients ( 
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    fist_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    car_packages BOOLEAN NOT NULL,
    appointment BOOLEAN(0,1,2,3) NOT NULL 
);