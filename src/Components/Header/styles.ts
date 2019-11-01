import styled from 'styled-components'
import { flexBase } from '../../../styles'


export const Container = styled.View`
    ${flexBase}
    font-family: 'Roboto';
    justify-content:flex-start;
    align-items: flex-end;
    background-color: #1B2D56;
    padding:5px;
    width:100%;
    height:100px;
    position:absolute;
`

export const TextHeader = styled.Text`
    color: #fff;
    font-size:35px;
    font-weight:bold;
    margin-left:10px;
`