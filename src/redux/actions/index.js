import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getFlights = createAsyncThunk("flight/getFlight", async () => {
  const params = {
    bl_lat: "34.640943",
    bl_lng: "24.65734",
    tr_lat: "43.423091",
    tr_lng: "46.118554",
    speed: "1.99999",
  };

  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));
  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };
  const res = await api.get("flights/detail", { params });

  return res.data;
});
