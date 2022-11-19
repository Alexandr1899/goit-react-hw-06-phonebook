import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactsSlice, filterSlice } from './slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'contact',
    storage
}

const rootReducer = combineReducers({
    "contacts": contactsSlice.reducer,
    "filter": filterSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
    }),
})
export const persistor = persistStore(store)
