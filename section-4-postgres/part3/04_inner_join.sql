 -- INNER JOIN -> ONLY THE MATCHING ROWS FROM BOTH TABLES
 -- LEFT JOIN -> ALL ROWS FROM LEFT TABLE AND MATCHING ROWS FROM RIGHT TABLE
 -- RIGHT JOIN -> ALL ROWS FROM RIGHT TABLE AND MATCHING ROWS FROM LEFT TABLE
 -- FULL OUTER JOIN -> ALL ROWS FROM BOTH TABLES


SELECT users.name AS author_name,posts.title AS post_title,posts.status,posts.views
FROM users
-- matching rows from both tables
INNER JOIN posts ON posts.user_id = users.id
-- filter for published posts
WHERE posts.status = 'published';

