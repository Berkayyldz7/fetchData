import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  clicked : false,
}

export const productSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    setClicked : (state,action)=>{
      state.clicked = action.payload
    }
  }
})

export const { setClicked } = productSlice.actions
export default productSlice.reducer