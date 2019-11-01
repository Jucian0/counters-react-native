import styled from 'styled-components'

export const Buttons = styled.View`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: 100%;
`

export const Button = styled.TouchableOpacity<{ disabled: boolean }>`
    background-color: #fff;
    padding:15px;
    border-radius:5px;
    opacity: ${({ disabled }) => disabled ? .7 : 1};
`

export const CounterText = styled.Text`
    font-family:'Roboto';
    font-weight:bold;
    font-size: 25px;
    color:#333;
`

export const Selected = styled.View`
    width:100%;
`

export const TextInput = styled.TextInput`
    width:100%;
    background-color: #fff;
    color:#333;
    border-radius: 5px;
    font-size:20px;
    padding:10px;
`