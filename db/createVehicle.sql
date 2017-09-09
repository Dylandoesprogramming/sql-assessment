INSERT INTO vehicles (make, model, year, owner_id)
VALUES($1, $2, $3, $4);
SELECT * FROM vehicles WHERE model = $2;