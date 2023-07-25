import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const estadosDeCarga = Object.freeze({
    IDLE: "idle",
    SUCCEEDED: "succeeded",
    ERROR: "error",
    LOADING: "loading",
});

const productSlice = createSlice({
    name: "product",
    initialState: {
      data: [],
      status: estadosDeCarga.IDLE,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state, action) => {
          state.status = estadosDeCarga.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.data = action.payload;
          state.status = estadosDeCarga.SUCCEEDED;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = estadosDeCarga.ERROR;
        });
    },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
    const response = await fetch("http://dulcecami.net.ar:8090/api/collections/Producto/records");
    const data = await response.json();
    return data.items;
});