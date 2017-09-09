DELETE FROM vehicles WHERE id = $1
RETURNING id, make, model, year, owner_id;