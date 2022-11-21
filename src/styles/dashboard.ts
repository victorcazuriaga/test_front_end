import styled from 'styled-components';
import {Props} from "../interfaces/interfaces"
export const Container = styled.div`
    display:flex;
    width: 60%;
    margin: auto;
    border: 4px solid #F6FAFA ;
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    @media screen and (max-width:600px) {
        display:flex;
        flex-direction:column;
    }
`;



export const Box = styled.div<Props>`
    display:flex;
    flex: ${props => props.flex};
    width: ${props => props.size};
    flex-direction:column;
    border:  2px; 
    align-items:center;
    background-color: ${props => props.primary ? "#F6FAFA" : "white" };
    padding: 10px;
    
`; 

export const FieldInput = styled.input`
    width: 100%;
    height:25px;
    background-color:#F6FAFA ;
    border:#F6FAFA solid 3px;
    background-color: white;
    border-radius: 3px;
    margin:8px;
    @media screen and (max-width:882px) {
        width:200px
    }
  `

export const Title = styled.h1<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;800&display=swap');
    font-family:'Nunito', sans-serif;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
    margin-bottom: ${props => props.marginBottom};
`

export const TextField = styled.label<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;800&display=swap');
    font-family:'Nunito', sans-serif;
    font-weight: ${props => props.fontWeight} ;

`;

export const Paragraph = styled.p<Props>`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;800&display=swap');
    font-family:'Nunito', sans-serif;
    margin:15px;
    font-weight:800;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};

`;

export const Button = styled.input`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;800&display=swap');
    font-family:'Nunito', sans-serif;
    font-weight:800;
    margin-top:10px;
    background-color:#000080;
    color:white;
    border: none;
    border-radius:5px;

    &:hover{
        color:white;
    
    } 
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const WarningField = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;800&display=swap');
    font-family:'Nunito', sans-serif;
    font-weight:300;
    font-size:16px;
    color: red;
    margin-bottom: 10px;
`
