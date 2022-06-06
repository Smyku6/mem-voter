import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import MemesList from './components/MemesList/MemesList'
import ScrollToTop from './tools/scrollToTop'
import TYPE from './constans/TYPE'
import NotFound from './components/ErrorBoundaries/NotFound'
import MemeForm from './components/Form/MemeForm'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="*" element={<NotFound />} />
                        <Route
                            path="/"
                            element={<MemesList section={TYPE.REGULAR} />}
                        />
                        <Route
                            path={TYPE.REGULAR}
                            element={<MemesList section={TYPE.REGULAR} />}
                        />
                        <Route
                            path="/mem-voter"
                            element={<MemesList section={TYPE.REGULAR} />}
                        />
                        <Route
                            path={TYPE.HOT}
                            element={<MemesList section={TYPE.HOT} />}
                        />
                        <Route
                            path={TYPE.FAVORITE}
                            element={<MemesList section={TYPE.FAVORITE} />}
                        />
                        <Route path={'/meme-form'} element={<MemeForm />} />
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
