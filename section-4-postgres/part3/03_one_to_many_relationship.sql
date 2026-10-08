-- one  to many relationship
--  one parent row have many child rows
--- one user can have many posts
-- but one post can only belong to one user

-- user parent table
-- posts child table

-- post.user_id -> user.id


-- user.id is the original source of truth
-- post.user_id store the user.id value and reference to the user.id


-- show all tthe post with there users

SELECT name as author_name,posts.title as post_title,posts.status FROM users
INNER JOIN posts ON users.id = posts.user_id 
ORDER BY users.name ASC, posts.title DESC;