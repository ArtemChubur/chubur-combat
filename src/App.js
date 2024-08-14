import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./redux/thunks/getUser";
import Coin from "./modules/Coin/Coin";
import {axiosInstance} from "./utils/API/API";
import MainRoutes from "./MainRoutes/MainRoutes";

const App = () => {

    const dispatch = useDispatch()

    // const [userData, setUserData] = useState({})
    const [logData, setLogData] = useState({})
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

    // //

    //
    // useEffect(() => {
    //     return () => {
    //         if (timer) {
    //             clearTimeout(timer);
    //         }
    //     };
    // }, [timer]);
    //

    //
    // useEffect(() => {
    //     if (user.coins) {
    //         updateData()
    //     }
    // }, [user])

  return (
      <div>
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
          <MainRoutes />
      </div>
  );
};

export default App;
