To start the database (and docker containers) do:

docker compose up
OR
docker compose up -d (run in background)

---------------------------------------------


To access the database do:

docker exec -it projectsourcecode-db-1 psql -U postgres

----------------------------------------------

and then do \l to see the databases,

 \c <dbname> to switch to the db

and then enter queries from there such as 

SELECT * FROM students;

to test out the database (i.e see if your registered user got added).
