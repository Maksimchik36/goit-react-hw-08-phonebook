import styled from '@emotion/styled';

export const Form = styled.form`
padding: 20px;
display: flex; 
flex-direction: column; 
align-items: center;`

export const Label = styled.label`
margin-bottom: 20px;
font-weight: 700;
`;

export const Input = styled.input`
margin-left: 10px;
`;

export const Button = styled.button`
padding: 5px;
border-radius: 4px;
border-color: #747274;
font-weight: 600;
cursor: pointer;
&:hover {
background-color: #87ff37b3;
}
`;