import React, {useEffect, useState} from 'react';
import {getUser} from "../../redux/thunks/getUser";
import {useDispatch, useSelector} from "react-redux";
import {axiosInstance} from "../../utils/API/API";
import style from './Coin.module.css'
import {SKINS_DATA} from "../../constants/skins";
import {useNavigate} from "react-router-dom";

const Coin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const userError = useSelector(state => state.user.error)
    const isLoading = useSelector(state => state.user.isLoading)
    const skin = SKINS_DATA.find((item) => item.name === user?.user?.equippedSkin && item)
    const [timer, setTimer] = useState(null)
    const [coins, setCoins] = useState(0)

    async function updateData() {
        try{
            const response = await axiosInstance.post('/game/sync-coins', {coins: coins + 1}, {
                headers: {
                    Authorization: `Barer ${localStorage.getItem('token')}`
                }
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        // getUser()
        dispatch(getUser())
    }, [dispatch]);

    useEffect(() => {
        setCoins(user?.user?.coins)
    }, [user]);

    useEffect(() => {
        if (userError === "Request failed with status code 403"){
            navigate('/login')
        }
    }, [userError, navigate]);

    return (
        <div className={style.CoinComponent}>
            {isLoading ?
                <p>Loading...</p>
                :
                <div>
                    <h2>{coins}</h2>
                    <input
                        type="button"
                        className={style.CoinBtn}
                        style={{backgroundImage: `url('${skin?.img}')`}}
                        onClick={() => {
                            setCoins(coins + 1)
                            if (timer) {
                                clearTimeout(timer)
                            }
                            setTimer(setTimeout(() => {
                                updateData()
                                // dispatch(getUser())
                            }, 200))
                        }}
                    />
                </div>
            }
        </div>
    );
};

export default Coin;