import React, {useState} from 'react';
import {axiosInstance} from "../../utils/API/API";
import style from './style.module.css'
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [regData, setRegData] = useState({})
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState()
    const navigate = useNavigate()

    async function log() {
        try{
            const response = await axiosInstance.post('/auth/login', regData)
            localStorage.setItem('token', response.data.token)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    async function reg() {
        if (regData.password === confirmPassword){
            try{
                await axiosInstance.post('/auth/register', regData)
                log()
            } catch (e) {
                if (e.response.status === 400) {
                    setError('Имя пользователя уже занято!')
                    setTimeout(() => {
                        setError('')
                    }, 2500)
                }
                console.log(e)
            }
        }
    }

    return (
        <div>
            <form className={style.Form} onSubmit={(e) => {
                e.preventDefault()
                reg()
            }}>
                <p className={style.error}>{error}</p>
                <input
                    placeholder={'Логин'}
                    onChange={(e) => setRegData(prevState => ({...prevState, username: e.target.value}))}
                    type="text"
                />
                <input
                    placeholder={'Пароль'}
                    onChange={(e) => setRegData(prevState => ({...prevState, password: e.target.value}))}
                    type="password"
                />
                <input
                    placeholder={'Повторите пароль'}
                    type="password"
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                />
                <input className={style.button} value={'зарегистрироваться'} type={"submit"}/>
                <a href="/login">Войти в учетную запись</a>
            </form>
        </div>
    );
};

export default RegisterPage;