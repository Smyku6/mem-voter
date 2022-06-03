import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import MemesList from './components/MemesList'
import ScrollToTop from './components/scrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route
                            path="/"
                            element={<MemesList type="regular" />}
                        />
                        <Route
                            path="regular"
                            element={<MemesList type="regular" />}
                        />
                        <Route path="hot" element={<MemesList type="hot" />} />
                        <Route
                            path="favorite"
                            element={<MemesList type="favorite" />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
