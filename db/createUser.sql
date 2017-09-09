INSERT INTO users (name, email)
VALUES($1, $2);
SELECT * FROM users WHERE email = $2;