UPDATE vehicles SET owner_id = $2 WHERE id = $1;
SELECT * FROM vehicles WHERE id = $1;