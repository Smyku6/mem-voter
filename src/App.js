import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { createServer } from 'miragejs'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMemes } from './app/memesSlice'
import MEMES from './memes_mock'
import {
    favoriteFilter,
    hotFilter,
    regularFilter,
} from './components/MemesList'

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: #2b2b2b;
`

const MainContainer = styled.div`
    width: 90%;
    max-width: 1600px;
    background-color: black;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-end;
`

const Title = styled.div`
    font-size: 3em;
    margin: 2em;
    text-align: center;
    color: #e8bf6a;
`

const Menu = styled.div`
    height: 100%;
    background-color: #3c3f41;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 25rem;
`

const MemesListContainer = styled.div`
    padding-left: 25rem;
    min-height: 100vh;
    width: 100%;
    background-color: #515151;
`

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    padding: 1em;
    margin: 2em;
    width: 200px;
    height: 200px;
    background-color: yellow;
`

let server = createServer()
server.get('/api/memes', MEMES)

function App() {
    const dispatch = useDispatch()
    const [pending, setIsPending] = useState(true)

    const favoriteCount = useSelector((state) => state.memes.list).filter(
        favoriteFilter
    ).length
    const hotCount = useSelector((state) => state.memes.list).filter(
        hotFilter
    ).length
    const regularCount = useSelector((state) => state.memes.list).filter(
        regularFilter
    ).length

    useEffect(() => {
        dispatch(fetchMemes())
        setIsPending(!pending)
    }, [])

    // TODO dodać loader
    return (
        <AppContainer>
            <MainContainer>
                <Menu>
                    <Title>MEM VOTER SITE</Title>
                    <StyledNavLink to="/hot">HOT {hotCount}</StyledNavLink>
                    <StyledNavLink to="/regular">
                        REGULAR {regularCount}
                    </StyledNavLink>
                    <StyledNavLink to="/favorite">
                        FAVORITES {favoriteCount}
                    </StyledNavLink>
                </Menu>
                <MemesListContainer>
                    <Outlet />
                </MemesListContainer>
            </MainContainer>
        </AppContainer>
    )
}

export default App
