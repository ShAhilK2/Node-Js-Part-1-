-- table alias
-- used to make queries more readable
-- example:
-- SELECT posts.title, tags.name FROM posts
-- INNER JOIN post_tags ON posts.id = post_tags.post_id
-- INNER JOIN tags ON post_tags.tag_id = tags.id
-- ORDER BY posts.title, tags.name;

-- with alias:
-- SELECT p.title, t.name FROM posts p
-- INNER JOIN post_tags pt ON p.id = pt.post_id
-- INNER JOIN tags t ON pt.tag_id = t.id
-- ORDER BY p.title, t.name;



SELECT p.title,u.name,c.content
FROM posts AS p 
INNER JOIN users AS u ON u.id = p.user_id
LEFT JOIN comments AS c ON p.id = c.post_id
ORDER BY p.title, u.name, c.content;
