import React, {useEffect, useState} from 'react';
import {getUser} from "../../redux/thunks/getUser";
import {useDispatch, useSelector} from "react-redux";
import {axiosInstance} from "../../utils/API/API";
import style from './Coin.module.css'
import {SKINS_DATA} from "../../constants/skins";

const Coin = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
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

    return (
        <div className={style.CoinComponent}>
            {/*<h2>{user?.user?.coins}</h2>*/}
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
            {/*<input*/}
            {/*    style={{backgroundImage: `url('${skin?.img}')`}}*/}
            {/*    type={'button'}*/}
            {/*    className={style.CoinBtn}*/}
            {/*    disabled={!user?.user?.energy}*/}
            {/*    onClick={() => {*/}
            {/*        setCoins(coins + 1)*/}
            {/*        if (timer) {*/}
            {/*            clearTimeout(timer);*/}
            {/*        }*/}
            {/*        setTimer(setTimeout(() => {*/}
            {/*            updateData()*/}
            {/*            dispatch(getUser())*/}

            {/*        }, 250));*/}

            {/*    }}*/}
            {/*/>*/}
            {/*<div className={style.EnergyContainer}>*/}
            {/*    <div className={style.EnergyMax}>*/}
            {/*        <div style={{width: `${100 / user?.user?.maxEnergy * user?.user?.energy}%`}} className={style.EnergyScore}></div>*/}
            {/*        /!*<div className={style.EnergyScore}></div>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Coin;