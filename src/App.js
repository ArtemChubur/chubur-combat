import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/thunks/getUser";
import Coin from "./modules/Coin/Coin";
import {axiosInstance} from "./utils/API/API";

const App = () => {

    const dispatch = useDispatch()

    // const [userData, setUserData] = useState({})
    // const [regData, setRegData] = useState({})
    // const [logData, setLogData] = useState({})
    // const user = useSelector(state => state.user.user)

    // async function getUser() {
    //     try{
    //         const response = await axios.get('http://localhost:3333/api/user/profile', {
    //             headers: {
    //                 Authorization: `Barer ${localStorage.getItem('token')}`
    //             },
    //         })
    //         console.log(response.data)
    //         setUserData(response.data)
    //         setCoins(response.data.user.coins)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    //
    // async function reg() {
    //     try{
    //         const response = await axios.post('http://localhost:3333/api/auth/register', regData)
    //         console.log(response)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // //
    // async function log() {
    //     try{
    //         const response = await axios.post('http://localhost:3333/api/auth/login', logData)
    //         console.log(response)
    //         localStorage.setItem('token', response.data.token)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    //
    // useEffect(() => {
    //     return () => {
    //         if (timer) {
    //             clearTimeout(timer);
    //         }
    //     };
    // }, [timer]);
    //
    useEffect(() => {
        // getUser()
        dispatch(getUser())
    }, [dispatch]);
    //
    // useEffect(() => {
    //     if (user.coins) {
    //         updateData()
    //     }
    // }, [user])

  return (
      <div>
          {/*<h2>{userData?.user?.username}</h2>*/}
          {/*<p>{userData?.user?.coins}({coins}) {userData?.user?.energy}</p>*/}

          {/*<div>*/}
          {/*    <form onSubmit={(e) => {*/}
          {/*        e.preventDefault()*/}
          {/*        reg()*/}
          {/*    }}>*/}
          {/*        <input*/}
          {/*            onChange={(e) => setRegData(prevState => ({...prevState, username: e.target.value}))}*/}
          {/*            type="text"*/}
          {/*        />*/}
          {/*        <input*/}
          {/*            onChange={(e) => setRegData(prevState => ({...prevState, password: e.target.value}))}*/}
          {/*            type="password"*/}
          {/*        />*/}
          {/*        <button type={"submit"}>reg</button>*/}
          {/*    </form>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <form onSubmit={(e) => {*/}
          {/*        e.preventDefault()*/}
          {/*        log()*/}
          {/*    }}>*/}
          {/*        <input*/}
          {/*            onChange={(e) => setLogData(prevState => ({...prevState, username: e.target.value}))}*/}
          {/*            type="text"*/}
          {/*        />*/}
          {/*        <input*/}
          {/*            onChange={(e) => setLogData(prevState => ({...prevState, password: e.target.value}))}*/}
          {/*            type="password"*/}
          {/*        />*/}
          {/*        <button type={"submit"}>log</button>*/}
          {/*    </form>*/}
          {/*</div>*/}
          <Coin />
      </div>
  );
};

export default App;
