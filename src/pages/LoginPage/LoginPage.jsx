import React, {useState} from 'react';
import {axiosInstance} from "../../utils/API/API";
import style from './style.module.css'
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [logData, setLogData] = useState({})
    const [error, setError] = useState()
    const navigate = useNavigate()

    async function log() {
        try{
            const response = await axiosInstance.post('/auth/login', logData)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        } catch (e) {
            if (e.response.status === 401){
                setError('Не верный логин или пароль')
            }
            console.log(e)
        }
    }

    return (
        <div>
            <form className={style.Form} onSubmit={(e) => {
                e.preventDefault()
                log()
            }}>
                <p className={style.error}>{error}</p>
                <input
                    placeholder={'Логин'}
                    onChange={(e) => {
                        setLogData(prevState => ({...prevState, username: e.target.value}))
                        setError('')
                    }}
                    type="text"
                />
                <input
                    placeholder={'Пароль'}
                    onChange={(e) => {
                        setLogData(prevState => ({...prevState, password: e.target.value}))
                        setError('')
                    }}
                    type="password"
                />
                <input className={style.button} value={'войти'} type={"submit"}/>
            </form>
        </div>
    );
};

export default LoginPage;