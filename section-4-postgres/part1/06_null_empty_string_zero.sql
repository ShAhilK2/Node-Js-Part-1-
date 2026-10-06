-- NULL vs Empty String vs Zero

-- null => unknown /missing value 
-- empty string => known string value but have no content/characters
-- zero => actual numeric value of 0



DROP TABLE IF EXISTS basics.value_examples;


CREATE TABLE basics.value_examples (
    id SERIAL PRIMARY KEY,
    nickname TEXT,
    bio TEXT,
    score INTEGER
   
    );


    INSERT INTO basics.value_examples (nickname, bio, score) VALUES 

    -- nickname is null 
    (NULL, 'nickname is null', 25),
    
    -- bio is empty string 
    ('bio is missing here', '', 30),


    -- NICKNAME IS EMPTY STRING
    ('', 'nickname is empty string', 35),
    
    -- score is zero 
    ('score is zero', 'score is zero', 0),
    -- score is missing 
    ('hetvi', NULL, NULL); 


   



    -- select all records
    SELECT * FROM basics.value_examples;

  
    

    SELECT * FROM basics.value_examples WHERE nickname IS NULL;


    SELECT * FROM basics.value_examples WHERE nickname = '';

    SELECT * FROM basics.value_examples WHERE score = 0;

    SELECT * FROM basics.value_examples WHERE nickname IS NOT NULL;
 