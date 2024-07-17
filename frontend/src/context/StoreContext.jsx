import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    const [token, setToken] = useState('')
    const [food_list, setFood_list] = useState([])

    const url = 'http://localhost:4000'


    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url + '/api/cart/add', { itemId }, { headers: { token } })
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId] -= 1;
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
        if (token) {
            await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token } })
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + '/api/food/list');
            if (response.status === 200) {
                setFood_list(response.data.data);
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching food list:', error);
        }
    }
    

    const loadCartData = async (token) => {
        const response = await axios.post(url + '/api/cart/get', {}, { headers: { token } })
        setCartItems(response.data.cartData)
    }

    useEffect(() => {
        async function loadData() {
            try {
                await fetchFoodList();
                const token = localStorage.getItem('token');
                if (token) {
                    setToken(token);
                    await loadCartData(token);
                }
            } catch (error) {
                console.error('Error loading data:', error);
            }
        }
        loadData();
    }, []);


    const contextValue = {
        food_list,
        cartItems,
        url,
        token,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        setToken,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;