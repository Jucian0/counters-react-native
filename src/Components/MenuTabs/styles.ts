import styled from 'styled-components'
import { flexBase } from '../../../styles'

export const Menu = styled.View`
    ${flexBase}
    justify-content:space-between;
    align-items:stretch;
    width:100%;
    height:10%;
`

export const Button = styled.TouchableOpacity`
    ${flexBase}
    justify-content:center;
    align-items:center;
    width:50%;
    height:100%;
    background-color:transparent;
`