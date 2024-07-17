import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import './MyOrders.css';
import { assets } from '../../assets/assets';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const [mainData, setMainData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + '/api/order/user-orders', {}, { headers: { token } });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            await axios.post(url + '/api/order/delete-false', { orderId: orderId });
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    useEffect(() => {
        const filteredData = data.filter((order) => order.payment === true);
        setMainData(filteredData);

        const ordersToDelete = data.filter((order) => order.payment === false);
        ordersToDelete.forEach(order => {
            deleteOrder(order._id);
        });
    }, [data]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {mainData.map((order, index) => (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt='Parcel Icon' />
                        <p>{order.items.map((item, index) => {
                            if (index === order.items.length - 1) {
                                return item.name + ' x ' + item.quantity
                            } else {
                                return item.name + ' x ' + item.quantity + ', '
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b> {order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
