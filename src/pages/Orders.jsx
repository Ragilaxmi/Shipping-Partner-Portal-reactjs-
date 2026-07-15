
import { useContext } from "react";
import { UserContext } from "../context/UseContext";
function Orders(){

    const { orders } = useContext(UserContext);


return(

<div style={{padding:"20px"}}>

<h2>Orders</h2>

<table className="orders-table">

<thead>

<tr>

<th>Customer</th>

<th>City</th>

<th>Status</th>

</tr>

</thead>

<tbody>

{
orders.map((order)=>(

<tr key={order.id}>

<td>{order.customer}</td>

<td>{order.city}</td>

<td>{order.status}</td>

</tr>

))
}

</tbody>

</table>

</div>

)
}

export default Orders;