import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const computeRankUrl = "http://192.168.2.208:8081/api/computeRanking";

export const getChallengerRanking = createAsyncThunk(
  "challenger/getRank",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.post(
        computeRankUrl,
        thunkAPI.getState().challenger
      );
      console.log(resp.data);
      return resp.data;
    } catch (error) {}
  }
);

const initialState = {
  name: "",
  ranking: "No Ranking",
  score: 0,
};

const challengerSlice = createSlice({
  name: "challenger",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    addScore: (state) => {
      state.score++;
    },
    setRank: (state, action) => {
      // const info = {state.name, state.score,}
    },
  },
  extraReducers: {
    [getChallengerRanking.pending]: (state) => {
      state.ranking = "Loading..";
    },
    [getChallengerRanking.fulfilled]: (state, action) => {
      state.ranking = action.payload.ranking;
    },
    [getChallengerRanking.rejected]: (state) => {
      state.ranking = "Failed to load Ranking";
    },
  },
});

export const { setName, addScore, setRank } = challengerSlice.actions;

export default challengerSlice.reducer;
