import styled from 'styled-components';
import { shadow, flexBase } from '../../../../styles';

export const Container = styled.View`
    ${flexBase}
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:70px;
`;

export const Button = styled.TouchableOpacity`
    ${flexBase}
    background-color: #1B2D56;
    justify-content:center;
    align-items:center;
    padding:15px;
    width:60px;
    height:60px;
    border-radius:30px;
    ${shadow}
`;

