UPDATE vehicles SET owner_id = NULL WHERE id = $2;
SELECT * FROM vehicles WHERE id = $2;