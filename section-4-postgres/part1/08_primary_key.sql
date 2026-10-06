DROP TABLE IF EXISTS basics.sales;


CREATE TABLE basics.sales (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    price Numeric(10, 2) NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO basics.sales (title, price) values ('Product 1', 100);

INSERT INTO basics.sales (title, price) values ('Product 2', 200);


SELECT * FROM basics.sales;

SELECT * FROM basics.sales WHERE id = 2;
