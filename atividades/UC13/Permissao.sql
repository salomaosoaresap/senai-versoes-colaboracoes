
-- Permissão

CREATE LOGIN supervisor
WITH PASSWORD = '@Salomao1518@'
CREATE USER supervisor FOR LOGIN supervisor
GRANT SELECT TO supervisor