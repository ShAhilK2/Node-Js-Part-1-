-- count unique values 


-- count how many unique posts are connected to each tag


SELECT t.name as tag_name,
COUNT(DISTINCT p.id) as total_unique_tags
FROM tags  AS t 
LEFT JOIN post_tags AS pt ON t.id = pt.tag_id
LEFT JOIN posts AS p ON pt.post_id = p.id
GROUP BY t.id, t.name
ORDER BY total_unique_tags DESC;


