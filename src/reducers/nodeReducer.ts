import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface NodeReducer {
    currentNode:number;
}

const initialState:NodeReducer = {
    currentNode: 0,
}

const nodeSlice = createSlice({
    name:"node",
    initialState: initialState,
    reducers:{
        setNode:(state, action:PayloadAction<NodeReducer>) => {
            state.currentNode = action.payload.currentNode;
        },
        increaseNode:(state) => {
            state.currentNode = state.currentNode + 1;
        }
    }
})

export const {setNode, increaseNode} = nodeSlice.actions;
export default nodeSlice.reducer;