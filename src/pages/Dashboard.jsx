import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UseContext";

function Dashboard(){
    const { orders, setOrders } = useContext(UserContext);

const [currentPage, setCurrentPage] = useState(1);

const ordersPerPage = 4;

const lastIndex = currentPage * ordersPerPage;

const firstIndex = lastIndex - ordersPerPage;

const currentOrders = orders.slice(firstIndex, lastIndex);

const totalOrders = orders.length;

const pendingOrders = orders.filter(
  (order) => order.status === "Pending"
).length;

const completedOrders = orders.filter(
  (order) => order.status === "Completed"
).length;

const completeOrder = (id) => {

    const updatedOrders = orders.map((order) => {

        if(order.id===id){

            return{
                ...order,
                status:"Completed"
            }
        }

        return order;

    });

    setOrders(updatedOrders);

}

    return(

        <div>

            <Navbar/>

            <div className="dashboard">

                <Sidebar/>

                <div className="content">

                    <h2>Dashboard</h2>

                    <div className="cards">

                        <div className="card">

                            <h3>Total Orders</h3>

                            <h2>{totalOrders}</h2>

                        </div>

                        <div className="card">

                            <h3>Pending</h3>

                            <h2>{pendingOrders}</h2>

                        </div>

                        <div className="card">

                            <h3>Completed</h3>

                            <h2>{completedOrders}</h2>

                        </div>

                    </div>

                    <h2>Orders</h2>

<div className="orders-container">

  {
    currentOrders.map((order) => {
      return (
        <div className="order-card" key={order.id}>

          <h3>{order.customer}</h3>

          <p>{order.city}</p>

          <p>{order.status}</p>

          {
            order.status === "Pending" && (
              <button onClick={() => completeOrder(order.id)}>
                Complete Order
              </button>
            )
          }

        </div>
      );
    })
  }

</div>
</div>

</div>

</div>

    )

}

export default Dashboard;