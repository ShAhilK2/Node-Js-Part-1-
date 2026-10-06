

DROP TABLE IF EXISTS basics.product_basic;


CREATE TABLE IF NOT EXISTS basics.product_basic (
    id SERIAL PRIMARY KEY,

    -- String Types can hold upto 255 characters
    name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Numeric Types
    stock INTEGER DEFAULT 0,


    -- store whole numbers bigger than INTEGER
    total_views BIGINT DEFAULT 0,

    --- store decimal numbers
    -- 2 decimal places after the decimal point eg 99999999.99
    price DECIMAL(10, 2),
    
    -- Date/Time Types
    is_active BOOLEAN DEFAULT TRUE
);


-- query 


INSERT INTO basics.product_basic (name, description, stock, total_views, price, is_active)
VALUES 
    ('Laptop', 'High-performance laptop for gaming and work', 50, 1000, 999.99, TRUE),
    ('Mouse', 'Wireless mouse with ergonomic design', 200, 5000, 29.99, FALSE),
    ('Keyboard', 'Mechanical keyboard with RGB lighting', 150, 3000, 79.99, TRUE),
    ('Monitor', '24-inch 1080p monitor', 75, 2000, 199.99, FALSE),
    ('Headphones', 'Noise-cancelling headphones', 100, 1500, 149.99, TRUE);


SELECT * FROM basics.product_basic;


SELECT name, price FROM basics.product_basic WHERE is_active;