import { configureStore } from '@reduxjs/toolkit';
import loginReducer from "./Redux/LoginFormSlice";
import restaurantReducer from './Redux/RestaurantsSlice'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import {persistReducer } from 'redux-persist'
import orderReducer from './Redux/OrderSlice'


const reducers = combineReducers({
  userDetail: loginReducer,
  restaurantDetail: restaurantReducer,
  orderList: orderReducer
})
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;