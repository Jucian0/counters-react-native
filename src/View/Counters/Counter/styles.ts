import styled from 'styled-components';
import { shadow, flexBase } from '../../../../styles';

export const Container = styled.View<{selected:boolean}>`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:stretch;
    background-color:#fff;
    height:${({selected})=> selected ? '230px': '200px'};
    margin:20px;
    padding:10px;
    border-radius:5px;
    opacity:${({selected})=> selected ? 1: .7};
    ${shadow}
`;

export const CounterName = styled.Text`
    font-family:'Roboto';
    font-weight:bold;
    font-size: 20px;
    color:#A2A2A2;
`;

export const Display = styled.View<{align: string}>`
    ${flexBase}
    justify-content: ${({align})=> align};
`;

export const Number = styled.Text`
    font-family:'Roboto';
    font-weight:bold;
    font-size: 80px;
    color:#333;
`;