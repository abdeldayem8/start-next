'use client'
import { Provider } from "react-redux"
import {Store} from "./Store"

export default function StoreProvider({ children }) {
    return <Provider store={Store}>{children}</Provider>
  }