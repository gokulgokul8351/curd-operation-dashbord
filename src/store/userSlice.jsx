import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    id: 1,
    name: 'Gokul',
    email: 'gokul@mail.com',
  },
]

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ADD USER

    addUser(state, action) {
      state.push(action.payload)
    },

    // UPDATE USER

    updateUser(state, action) {
      const { id, name, email } = action.payload
      const updateUser = state.find((user) => user.id == id)

      // condition

      if (updateUser) {
        updateUser.name = name
        updateUser.email = email
      }
    },

    // DELETE USER
    deleteUser(state, action) {
      const { id } = action.payload
      const deleteUser = state.find((user) => user.id == id)

      // condition

      if (deleteUser) {
        return state.filter((filter) => filter.id !== id)
      }
    },
  },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer
