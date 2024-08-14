import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../utils/API/API";
import axios from "axios";

export const getUser = createAsyncThunk('getUser', async () => {
    const response = await axios.get(`http://localhost:3333/api/user/profile`, {
                 headers: {
                     Authorization: `Barer ${localStorage.getItem('token')}`
                 },
             })
    return response.data
})