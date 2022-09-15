import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const gettingParticipantsUrl = "http://192.168.2.208:8081/api/getParticipants";

export const getRankingDetails = createAsyncThunk(
  "participant/getRankingDetails",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(gettingParticipantsUrl);
      return resp.data;
    } catch (error) { thunkAPI.getState().participants.isNoConnection=true;  }

  }
);

const initialState = {
  participants: [],
  isLoading: true,
  isNoConnection: false,
};

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    closeLoadingRank: (state) => {
      state.isLoading = false;
    },
    openLoadingRank: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: {
    [getRankingDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getRankingDetails.fulfilled]: (state,action) => {
      state.participants = action.payload
      state.isLoading = false;
      state.isNoConnection = false;
    },
    [getRankingDetails.rejected]: (state) => {
      state.isLoading = true;
      state.isNoConnection = true;
    },
  },
});

export const { closeLoadingRank, openLoadingRank } = participantsSlice.actions;

export default participantsSlice.reducer;
