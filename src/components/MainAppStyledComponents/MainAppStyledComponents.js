import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: ${COLOR.BLACK};
`

export const MainContainer = styled.div`
    width: 90%;
    max-width: 1600px;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-end;
`

export const Menu = styled.div`
    height: 100%;
    background-color: ${COLOR.GRAY};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    width: 25rem;
    z-index: 2;
`

export const MemesListContainer = styled.div`
    padding-left: 25rem;
    padding-top: 10rem;
    min-height: 100vh;
    width: 100%;
    background-color: ${COLOR.LIGHT_GRAY};
    display: flex;
    justify-content: center;
    align-items: flex-start;
`
