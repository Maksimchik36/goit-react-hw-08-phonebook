import styled from "@emotion/styled";

export const Form = styled.form`
padding: 20px;
display: flex; 
column-gap: 10px;
flex-direction: column; 
align-items: center;
border: 2px solid grey;
border-radius: 8px;
max-width: 300px;
// background-color: #6bccd8;
background-image: linear-gradient(to right, #DECBA4, #3E5151);
`;

export const Label = styled.label`
margin-bottom: 20px;
font-weight: 700;
`;

export const Input = styled.input`
margin-left: 10px;
border-radius: 6px;
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