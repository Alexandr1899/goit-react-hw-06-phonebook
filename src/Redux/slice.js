import { createSlice } from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContacts: (state, action) => {
            return [...state, action.payload]
        },
        removeContacts: (state, action) => {
            return state.filter(contact => contact.id !== action.payload)
        }
    }
})
export const { addContacts, removeContacts } = contactsSlice.actions

export const filterSlice = createSlice({
    name: `filter`,
    initialState: '',
    reducers: {
        findContacts: (state, action) => {
            return state = action.payload
        }
    }
})
export const { findContacts } = filterSlice.actions