import './App.css'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createServer } from 'miragejs'
import { fetchMemes } from './app/memesSlice'
import MEMES from './constans/memes_mock'
import { BallTriangle } from 'react-loader-spinner'
import urlToTitle from './tools/urlToTitle'
import COLOR from './constans/COLOR'
import SECTIONS from './constans/SECTIONS'
import MenuButton from './components/MenuButton/MenuButton'
import SectionBar from './components/SectionBar/SectionBar'
import MenuTitle from './components/MenuTitle/MenuTitle'
import {
    AppContainer,
    MainContainer,
    MemesListContainer,
    Menu,
} from './components/MainAppStyledComponents/MainAppStyledComponents'

let server = createServer()
server.get('/api/memes', MEMES)

function App() {
    const location = useLocation()
    const url = location.pathname
    const dispatch = useDispatch()
    const [pending, setIsPending] = useState(true)

    useEffect(() => {
        dispatch(fetchMemes())

        //fake loading
        setTimeout(() => {
            setIsPending(!pending)
        }, 700)
    }, [])

    return (
        <AppContainer>
            <MainContainer>
                <SectionBar text={urlToTitle(url)} />
                <Menu>
                    <MenuTitle />

                    {SECTIONS.map((section, index) => (
                        <MenuButton key={index} section={section} />
                    ))}
                </Menu>

                <MemesListContainer>
                    {pending ? (
                        <BallTriangle
                            color={COLOR.YELLOW}
                            height={200}
                            width={200}
                        />
                    ) : (
                        <Outlet />
                    )}
                </MemesListContainer>
            </MainContainer>
        </AppContainer>
    )
}

export default App
