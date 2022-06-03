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

const AppStyled = styled.div`
    width: 1200px;
    height: 100vh;
    background-color: black;
    display: flex;
    flex-direction: row;
`

const Title = styled.div`
    font-size: 3em;
    margin: 2em;
    text-align: center;
    color: #e8bf6a;
`

const LeftMenu = styled.div`
    width: 400px;
    height: 100vh;
    background-color: #3c3f41;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainContainer = styled.div`
    overflow: auto;
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
        <AppStyled>
            <LeftMenu>
                <Title>MEM VOTER SITE</Title>
                <StyledNavLink to="/hot">HOT {hotCount}</StyledNavLink>
                <StyledNavLink to="/regular">
                    REGULAR {regularCount}
                </StyledNavLink>
                <StyledNavLink to="/favorite">
                    FAVORITES {favoriteCount}
                </StyledNavLink>
            </LeftMenu>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </AppStyled>
    )
}

export default App;
