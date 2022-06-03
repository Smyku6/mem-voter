import './App.css'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { createServer } from 'miragejs'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMemes } from './app/memesSlice'
import MEMES from './constans/memes_mock'
import {
    favoriteFilter,
    hotFilter,
    regularFilter,
} from './components/MemesList'
import { AiOutlineFire } from 'react-icons/ai'
import { IoMdHeartEmpty } from 'react-icons/io'
import { TbMoodCrazyHappy } from 'react-icons/tb'
import { BallTriangle } from 'react-loader-spinner'

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
    font-size: 6rem;
    text-align: center;
    color: #e8bf6a;
    margin: 2rem;
`

const Menu = styled.div`
    height: 100%;
    background-color: #3c3f41;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
    margin: 1rem 2rem;
    background-color: #365880;
    color: #baba99;
    border-radius: 1.5rem;
    width: 70%;
    height: 12rem;
    font-size: 2.5rem;
    text-decoration: none;

    &:hover {
        background-color: #639ade;
    }
`
const CounterStyled = styled.div`
    font-size: 1.5rem;
    color: #ffc66d;
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
        //fake loading
        setTimeout(() => {
            setIsPending(!pending)
        }, 1000)
    }, [])

    return (
        <AppContainer>
            <MainContainer>
                <Menu>
                    <Title>MEM VOTE SITE</Title>
                    <StyledNavLink to="/hot">
                        <div>
                            HOT <AiOutlineFire />
                        </div>
                        {hotCount === 1 && (
                            <CounterStyled>{hotCount} meme</CounterStyled>
                        )}
                        {hotCount > 1 && (
                            <CounterStyled>{hotCount} memes</CounterStyled>
                        )}
                    </StyledNavLink>
                    <StyledNavLink to="/regular">
                        <div>
                            REGULAR <TbMoodCrazyHappy />
                        </div>
                        {regularCount === 1 && (
                            <CounterStyled>{regularCount} meme</CounterStyled>
                        )}
                        {regularCount > 1 && (
                            <CounterStyled>{regularCount} memes</CounterStyled>
                        )}
                    </StyledNavLink>
                    <StyledNavLink to="/favorite">
                        <div>
                            FAVORITE <IoMdHeartEmpty />
                        </div>
                        {favoriteCount === 1 && (
                            <CounterStyled>{favoriteCount} meme</CounterStyled>
                        )}
                        {favoriteCount > 1 && (
                            <CounterStyled>{favoriteCount} memes</CounterStyled>
                        )}
                    </StyledNavLink>
                </Menu>
                <MemesListContainer>
                    {pending ? (
                        <BallTriangle
                            color="#00BFFF"
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
