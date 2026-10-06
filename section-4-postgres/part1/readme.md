relation db -> tables
tables cpnnected using relationships

users tables
posts tables
comments tables

1 post -> 1 user
1 comment -> 1 post
1 user -> many posts

non relation db -> doesnot organize data using connected tables

documents ,key value pairs

why we use relation db

data clear structure
realtionships
transactions
joins
strong validation at db level

banking applications,crm,ecommerce

when we use non relation db

data changes very often
docs independent
not much joins

command:

```bash
psql -U katu -d postgres

SELECT current_database();
SELECT version();
\l
\dt
\q

psql -U katu -d postgres -f part1/01_first_database.sql
psql -U katu -d postgres_part1 -f part1/O2_first_schema.sql
psql -U katu -d postgres_part1 -f part1/O3_first_table.sql
```
