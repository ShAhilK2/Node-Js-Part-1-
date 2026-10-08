-- calculate one result for many rows


-- Count => count all rows
SELECT COUNT(*) FROM posts;


-- Sum => sum all values
SELECT * FROM posts;
SELECT SUM(views) FROM posts;


-- Average => average all values
SELECT AVG(views) FROM posts;


-- Maximum => maximum value
SELECT MAX(views) FROM posts;


-- Minimum => minimum value
SELECT MIN(views) FROM posts;



-- Usage 

-- admin dashboard
-- reports 
-- analytics
-- statistics
-- insights
-- metrics
-- summaries
-- trends
-- patterns
-- comparisons
-- distributions
-- correlations
-- relationships
-- trends
-- patterns
-- comparisons
-- distributions
-- correlations
-- relationships


SELECT COUNT(*) AS total_post,
COUNT(*) FILTER (WHERE status ='published')  AS published_status
FROM posts;

SELECT COUNT(*) AS total_post,
COUNT(*) FILTER (WHERE status ='draft')  AS draft_status,
SUM(views) AS total_views,
AVG(views) AS average_views,
MIN(views) AS min_views,
MAX(views) AS max_views
FROM posts;