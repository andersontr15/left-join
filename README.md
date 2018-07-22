## Simple Left Join in JavaScript

## Usage
```javascript
  const customers = [
    { id: 1, name: 'Theo' }, 
    { id: 5, name: 'John'}
  ];
  const orders = [
    { customer_id: 1, order_name: 'Pepperoni Pizza', id: 1 }, 
    { customer_id: 10, order_name: 'Pasta Marinara', id: 2}
  ];
  const result = left_join(customers, orders, 'customer_id');
  /* [
    {
      customer_id: 1,
      id: 1,
      name: "Theo",
      order_name: "Pepperoni Pizza"
    },
    {
     customer_id: 10,
     id: 2, 
     order_name: 'Pasta Marinara' 
    }
  ]
 */ 
```
