// membersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    memberList: [],
};

const membersSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {
        addMember: (state, action) => {
            state.memberList.push(action.payload); // action.payload là một đối tượng
        },
        // Thêm các reducers khác nếu cần
    },
});

export const { addMember } = membersSlice.actions;
export default membersSlice.reducer;