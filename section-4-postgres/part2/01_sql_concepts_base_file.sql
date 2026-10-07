

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    sku TEXT UNIQUE,
    category TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, stock, sku, description, is_active, category) VALUES 
('Laptop', 1200.99, 10, 'LAP-001', 'High-performance laptop', true, 'Electronics'),
('Mouse', 29.99, 50, 'MOU-001', 'Wireless mouse', false, 'Electronics'),
('Refrigerator', 299.99, 20, 'REF-001', '24-inch refrigerator', true, 'Appliances'),
('Keyboard', 79.99, 25, 'KEY-001', 'Mechanical keyboard', true, 'Electronics'),
('Monitor', 199.99, 15, 'MON-001', NULL, true, 'Electronics'),
('Tablet', 499.99, 0, 'TAB-001', '10-inch tablet', true, 'Electronics');


-- SELECT * FROM products;

-- WHERE clause
-- SELECT * FROM products WHERE sku = 'MOU-001';


-- IN clause
-- s


-- Select specific columns vs Select star
-- SELECT * RETURN ALL COLUMNS
-- SELECT * FROM products;

-- SELECT specific columns RETURN ONLY SPECIFIED COLUMNS
-- SELECT name, price FROM products;

-- ALIAS - RENAMING COLUMNS
-- AS creates temporary column names for better readability
-- SELECT name AS product_name, price AS product_price FROM products;



-- WHERE clause
-- /products?name=Laptop
-- SELECT * FROM products WHERE name = 'Laptop';


-- find prodcust that price is above 1000
-- SELECT * FROM products WHERE price > 1000;


-- find product that is not active
-- SELECT * FROM products WHERE is_active = false;



-- OR AND AND AND NOT 
-- OR => AT LEAST ONE CONDITION TO BE TRUE
-- AND => ALL CONDITIONS TO BE TRUE
-- NOT => REVERSE/EXCLUDE THE LOGIC



-- SELECT * FROM products WHERE category = 'Electronics' AND price > 100;
-- SELECT * FROM products WHERE category = 'Electronics' OR category = 'Appliances';



-- SELECT * FROM products WHERE NOT category = 'Electronics';

-- SELECT * FROM products WHERE category = 'Electronics' AND (price > 100 OR stock > 10);


-- SELECT name FROM products WHERE (category = 'Electronics' OR category = 'Appliances') AND 
-- price > 100;


-- like  or ilike patterns 

-- like case sensistive pattern match 
-- ilike case insensitive pattern match
-- % means any no of chars
-- _ means single char

-- % after means any no of chars after
-- SELECT name,description,price    FROM products WHERE description LIKE 'Wireless%';



-- SELECT name,description,price FROM products WHERE name ILIKE '%laptop%';


-- SELECT name,description,price FROM products WHERE name ILIKE '%mouse%' AND description ILIKE '%wireless%';


-- IN,NOT IN AND BETWEEN 


-- SELECT * FROM products WHERE category IN ('Electronics', 'Appliances');
-- SELECT * FROM products WHERE category NOT IN ('Electronics', 'Appliances');
-- SELECT * FROM products WHERE price BETWEEN 100 AND 500; 


-- SELECT * FROM products WHERE category IN ('Electronics', 'Appliances') AND price BETWEEN 100 AND 500;



-- NULL AN`D NOT NULL
-- NULL - MISSING /UNKNOWN DATA
-- u shoud be not check for null values using = or !=
-- NOT NULL - MUST HAVE A VALUE


-- SELECT name,description FROM products WHERE description IS NULL;



-- SELECT name,description FROM products WHERE description  IS NOT NULL;

-- SELECT name,description,is_active FROM products  WHERE is_active = TRUE AND description  IS NULL;


-- ORDER BY
-- SELECT name,price FROM products ORDER BY price;

-- SELECT name,price FROM products ORDER BY price DESC;

-- SELECT name,price FROM products ORDER BY price DESC, name ASC;


-- LIMIT => restricts the number of rows returned
-- OFFSET => skips a number of rows before starting to return rows

-- Get top 3 most expensive products
-- SELECT name,price FROM products ORDER BY price DESC LIMIT 3;

-- Get products 2-4 when ordered by price (pagination example)
-- SELECT name,price FROM products ORDER BY price DESC LIMIT 3 OFFSET 2;

-- (PAGE-1) * LIMIT 
-- 2 = (2-1) * 3 = 3
-- 3 = (3-1) * 3 = 6

-- UPDATE SINGLE ROW
-- UPDATE products SET price = 1500.00,stock=20 WHERE sku = 'LAP-001';

-- SELECT name,price,sku FROM products;

-- update multiple ROW

 
-- UPDATE products 
-- SET price = ROUND(price * 1.10,2)
-- WHERE  category='Appliances';


-- SELECT name,price,sku,category FROM products;


-- UPDATE products 
-- SET is_active = FALSE
-- WHERE stock = 0;

-- SELECT name,price,stock,sku,category,is_active FROM products;



-- DELETE


-- INSERT INTO products (name, price, stock, sku, description, is_active, category) VALUES 
-- ('TV', 800.99, 10, 'TV-001', '55-inch smart TV', true, 'Electronics');

-- SELECT * FROM products;
-- DELETE FROM products WHERE sku = 'TV-001';
-- SELECT name,price,stock,sku,category,is_active FROM products;

-- RETURN AFTER INSERT
-- RETURN BACK THE INSERTED ROW IMMEDIATELY AFTER INSERT
INSERT INTO products (name, price, stock, sku, description, is_active, category) VALUES 
('TV', 800.99, 10, 'TV-001', '55-inch smart TV', true, 'Electronics')
RETURNING *;


UPDATE products 
SET price = price + 11
WHERE sku = 'TV-001'
RETURNING *;


DELETE FROM products WHERE sku = 'TV-001' RETURNING name,price,sku;
