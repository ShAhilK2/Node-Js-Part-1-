-- multiple sql statements run on one safe unit 

-- placing an order 
-- reduce stock of that product 
-- creating payments records 
-- transferring money 
-- creating user with related profile data 



SELECT * FROM posts;

BEGIN 
UPDATE posts 
SET status="published"
WHERE title = 'Advanced SQL' AND status="draft";



UPDATE posts 
SET views = views + 40
WHERE title = 'Advanced SQL';

SELECT title,status,views FROM posts WHERE title = 'Advanced SQL';

COMMIT;