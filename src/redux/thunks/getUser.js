import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../utils/API/API";
import axios from "axios";

export const getUser = createAsyncThunk('getUser', async () => {
    const response = await axiosInstance.get(`/user/profile`, {
                 headers: {
                     Authorization: `Barer ${localStorage.getItem('token')}`
                 },
             })
    return response.data
})