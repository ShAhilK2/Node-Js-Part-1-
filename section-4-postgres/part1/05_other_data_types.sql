

DROP TABLE IF EXISTS basics.app_events;


CREATE TABLE basics.app_events (

    -- uuid
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),


    event_name TEXT NOT NULL,
    
    -- JSONB
    metadata JSONB DEFAULT '{}'::jsonb,

 
    -- timestamp
    created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO basics.app_events (event_name, metadata) VALUES 
('user_login', '{"user_id": 123, "device": "mobile"}'),
('user_logout', '{"user_id": 123, "duration_seconds": 3600}'),
('user_purchase', '{"user_id": 123, "amount": 99.99, "currency": "USD"}');


SELECT id, event_name, metadata FROM basics.app_events;


-- Extract specific fields from JSONB
SELECT 
    id,
    event_name,
    metadata->>'user_id' as user_id,
    metadata->>'device' as device,
    metadata->>'duration_seconds' as time_spent_seconds,
    metadata->>'amount' as amount,
    metadata->>'currency' as currency
FROM basics.app_events WHERE metadata ? 'user_id';


