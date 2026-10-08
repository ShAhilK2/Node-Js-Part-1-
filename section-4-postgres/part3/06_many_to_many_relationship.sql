-- many to many relationship
-- example: users and roles
-- users can have multiple roles
-- tags can have multiple posts

-- one post have many tags
-- one tag can be associated with many posts


-- posts.id === post_tags.post_id
-- tags.id === post_tags.tag_id

SELECT posts.title ,tags.name FROM posts
INNER JOIN post_tags ON posts.id = post_tags.post_id
INNER JOIN tags ON post_tags.tag_id = tags.id
ORDER BY posts.title, tags.name;