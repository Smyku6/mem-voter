import styled from 'styled-components'
import COLOR from '../../constans/COLOR'

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: ${COLOR.LIME};
    border-radius: 1.5rem;
    width: 100%;
    font-size: 1.5rem;
`

export const LabelStyled = styled.label`
    color: ${COLOR.ORANGE};
    padding: 1rem;
    width: 15rem;
    display: block;
`

export const InputStyled = styled.input`
    color: ${COLOR.ORANGE};
    padding: 1rem;
    width: 30rem;
    height: 2rem;
    margin: 0.5rem;
    background-color: ${COLOR.GRAY};
`

export const FormLineStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ButtonStyled = styled.button`
    margin: 1rem;
    cursor: pointer;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: ${COLOR.LIME};
    &:hover {
        background-color: ${COLOR.YELLOW};
    }
`

export const InputSubmitStyled = styled.input`
    margin: 1rem;
    cursor: pointer;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: ${COLOR.LIME};
    &:hover {
        background-color: ${COLOR.YELLOW};
    }
`
