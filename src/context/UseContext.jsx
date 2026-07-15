import { createContext, useState } from "react";

export const UserContext = createContext();

function UseContext({ children }) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [orders, setOrders] = useState([
        {
            id: 1,
            customer: "Ramesh",
            city: "Hyderabad",
            status: "Pending"
        },
        {
            id: 2,
            customer: "Suresh",
            city: "Warangal",
            status: "Completed"
        },
        {
            id: 3,
            customer: "Mahesh",
            city: "Karimnagar",
            status: "Pending"
        },
        {
            id: 4,
            customer: "Ravi",
            city: "Nizamabad",
            status: "Completed"
        }
    ]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                orders,
                setOrders
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UseContext;