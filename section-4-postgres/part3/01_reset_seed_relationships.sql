

CREATE EXTENSION IF NOT EXISTS "pgcrypto";


DROP TABLE IF EXISTS post_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL
);

CREATE TABLE posts   (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID REFERENCES users(id),

    title TEXT NOT NULL,

    status TEXT NOT NULL DEFAULT 'draft' 
        CHECK (status IN ('draft', 'published')),
    

    views INTEGER NOT NULL DEFAULT 0 CHECK (views >= 0) 
);

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID REFERENCES posts(id),
    content TEXT NOT NULL
);

CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE post_tags (
    post_id UUID REFERENCES posts(id),
    tag_id UUID NOT NULL REFERENCES tags(id),
    PRIMARY KEY (post_id, tag_id)
);


-- INSERT USERS
INSERT INTO users (name) VALUES 
    ('Shahil'),
    ('Hetvi'),
    ('Sakshi');

-- INSERT POSTS
INSERT INTO posts (user_id,title, status, views) VALUES 
    ( (SELECT id FROM users WHERE name = 'Shahil'), 'SQL Basics', 'published', 100),
    ((SELECT id FROM users WHERE name = 'Shahil'), 'Advanced SQL', 'draft', 0),
    ((SELECT id FROM users WHERE name = 'Hetvi'), 'Hetvi''s Post', 'published', 50),
    ((SELECT id FROM users WHERE name = 'Hetvi'), 'Postgres', 'published', 50);

-- INSERT COMMENTS
INSERT INTO comments (post_id, content) VALUES 
    ((SELECT id FROM posts WHERE title = 'SQL Basics'), 'Great post!'),
    ((SELECT id FROM posts WHERE title = 'SQL Basics'), 'Thanks for sharing'),
    ((SELECT id FROM posts WHERE title = 'Advanced SQL'), 'Looking forward to more content'),
    ((SELECT id FROM posts WHERE title = 'Postgres'), 'Looking forward to more content');
 
 
-- INSERT TAGS
INSERT INTO tags (name) VALUES 
    ('sql'),
    ('backend'),
    ('frontend');

-- INSERT POST_TAGS
INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'SQL Basics' AND t.name = 'sql';

INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'Advanced SQL' AND t.name = 'backend';
    
INSERT INTO post_tags (post_id, tag_id)
SELECT p.id, t.id
FROM posts p, tags t
WHERE p.title = 'Postgres' AND t.name = 'sql';
    
SELECT 'DATA INSERTED SUCCESSFULLY' AS message;

 
 SELECT * FROM users;
 SELECT * FROM posts;
 SELECT * FROM comments;
 SELECT * FROM tags;
 SELECT * FROM post_tags;