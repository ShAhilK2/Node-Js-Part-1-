
-- NOT NULL  , DEFUALT, UNIQUE , CHECK , PRIMARY KEY , FOREIGN KEY
-- app,script,developer 

-- database validation are stronger than backend/api validation


DROP TABLE IF EXISTS basics.account;


CREATE TABLE basics.account (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE,
    is_active BOOLEAN DEFAULT TRUE,
    age INTEGER CHECK (age >= 18),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



INSERT INTO basics.account (full_name, email, age) VALUES 
('John Doe', 'john.doe@example.com', 20),
('Jane Smith', 'jane.smith@example.com', 30),
('Bob Johnson', 'bob.johnson@example.com', 22);


-- -- VIOLATES NOT NULL CONSTRAINT
-- INSERT INTO basics.account (email, age) VALUES 
-- ('alice.brown@example.com', 25);




-- VIOLATES UNIQUE CONSTRAINT
INSERT INTO basics.account (full_name, email, age) VALUES 
('John Doe', 'john.doe@example.com', 25);


SELECT * FROM basics.account;
