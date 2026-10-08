-- LEFT JOIN 
-- ALL ROWS FROM LEFT TABLE AND MATCHING ROWS FROM RIGHT TABLE
-- AND RIGHT TABLE ROWS THAT DON'T MATCH LEFT TABLE WILL BE FILLED WITH NULL



-- LEFT TABKE = POSTS
-- RIGHT TABLE = COMMENTS

-- because not every posts is going to have comments
-- some posts will have 100 comments, some 0 comments

SELECT posts.title AS "Post Title",comments.content AS "Comment Body" FROM posts
-- LEFT JOIN = ALL ROWS FROM LEFT TABLE AND MATCHING ROWS FROM RIGHT TABLE
--  LEFT JOIN comments WHY? because we want to get all posts and their comments
-- LEFT TABLE => posts
-- RIGHT TABLE => comments
LEFT JOIN comments ON posts.id = comments.post_id
ORDER BY posts.title;