import styled,{css} from 'styled-components'

export const AppStyles = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    background-color: #1B2D56;
    height:100%;
`

export const RouterContainer = styled.View`
    width:100%;
    height:92%;
`

export const shadow = css`
    shadow-color: #000;
    shadow-offset: 1px 1px;
    shadow-opacity: 0.8;
    shadow-radius: 5;
    elevation: 5;
`

export const flexBase = css`
    display:flex;
    flex-direction:row;
`


export const Container = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #1D89CD;
    height:100%;
`

export const Col = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px;
    width:100%;
    height:auto;
`


export const Row = styled.SafeAreaView<{ height: string}>`
    height:${({ height }) => height};
    width:100%;
    margin:4px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const TextButton = styled.Text`
    font-family:'Roboto';
    font-weight:bold;
    color: #333;
    font-size:18px;
`