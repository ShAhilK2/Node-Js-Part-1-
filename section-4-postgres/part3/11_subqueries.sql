 -- one query inside the another query 
 -- subqueries are used to filter data based on the result of another query


-- runs the first inner query and then the outer query


SELECT AVG(views) FROM posts;

SELECT title,views,status FROM posts 
WHERE views > (SELECT AVG(views) FROM posts) 
ORDER BY views DESC;