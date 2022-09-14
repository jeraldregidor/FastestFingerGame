import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const gettingParticipantsUrl = "http://192.168.2.208:8081/api/getParticipants";

export const getRankingDetails = createAsyncThunk(
  "participant/getRankingDetails",
  async () => {
    try {
      const resp = await axios(gettingParticipantsUrl);
      return resp.data;
    } catch (error) {}
  }
);

const initialState = {
  participants: [],
  isLoading: true,
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
    },
    [getRankingDetails.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { closeLoadingRank, openLoadingRank } = participantsSlice.actions;

export default participantsSlice.reducer;
