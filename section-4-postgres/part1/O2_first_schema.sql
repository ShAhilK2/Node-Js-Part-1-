
-- DB => SCHEMA -> TABLE -> ROWS

-- if not exits is going to prevent error if schema already exists
CREATE SCHEMA IF NOT EXISTS basics;

CREATE EXTENSION IF NOT EXISTS "pgcrypto"; 


-- query 

SELECT schema_name FROM information_schema.schemata ORDER BY schema_name;