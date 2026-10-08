-- group by creates group of rows 
-- WHERE filters individual/normal rows before groupings
-- HAVING filters groups after aggregation /grouping 

-- find author who has post atleast 2 post
SELECT u.name AS author_name, COUNT(p.id) AS total_posts,
SUM(p.views) AS total_views
FROM users u 
LEFT JOIN  posts AS p ON u.id = p.user_id
GROUP BY u.id,u.name
HAVING COUNT(p.id) = 1
ORDER BY total_posts DESC
