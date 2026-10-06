

DROP TABLE IF EXISTS basics.students;

CREATE TABLE basics.students (
    -- create an auto incrementing integer id
    id SERIAL PRIMARY KEY,
    -- id should be unique

-- text string
-- not null -> cannot be empty
-- postgres going to reject if this name value is not provideds
    name TEXT NOT NULL,


-- UNIQUE -> cannot be duplicated
    email TEXT UNIQUE NOT NULL,

    age INTEGER CHECK (age >=18),


-- default value means when we don't provide a value, it will use the default value
    created_at TIMESTAMP DEFAULT NOW()

);


-- INSERT INTO TABLES name students

INSERT INTO basics.students (name, email, age) VALUES ('Sk dev', 'sk.dev@example.com', 25), ('John Doe', 'john.doe@example.com', 30);



SELECT * FROM basics.students;