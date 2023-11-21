SELECT * FROM users JOIN orders on users.id=orders.user_id;
SELECT first_name, last_name,
		count(orders.id) as "number of orders",
        sum(orders.amount) as "total amount"
        FROM users 
        JOIN orders on users.id=orders.user_id 
        GROUP BY users.id;
        SELECT *
        FROM users 
        JOIN orders on users.id=orders.user_id 
        JOIN ordered_items ON orders.id=ordered_items.order_id
        JOIN items ON ordered_items.item_id=items.id;