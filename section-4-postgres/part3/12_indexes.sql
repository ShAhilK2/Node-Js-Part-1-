-- index means postgres find the rows find faster 
-- index is a data structure that allows postgres to find rows faster
-- index is created on a column or a set of columns
-- index is created using the CREATE INDEX statement
-- index is dropped using the DROP INDEX statement
-- index is updated automatically when the data in the table is updated
-- index is not a replacement for a primary key
 

--  SELECT SPEED UP  THIS PARTICULAR  PROCESS  


SELECT * FROM posts;


-- /posts/status="published"

SELECT * FROM posts WHERE status="published" ORDER BY views DESC;


-- idx - id index
-- posts - db name 
-- status - column name 

CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);


--  COMPOSITE INDEX 


CREATE INDEX IF NOT EXISTS idx_posts_status_views ON posts(status, views DESC);


-- /users/:id/posts


SELECT title, status, views FROM posts WHERE user_id = (
    SELECT id FROM users WHERE name = 'Hetvi'
);


CREATE INDEX IF NOT EXISTS isx_posts_user_id ON posts(user_id);
