import styled from 'styled-components';



export const CardContainer=styled.div`
    overflow: hidden;
    box-shadow: 0 2px 12px ;
    border-radius: 0.5rem;
    border: solid 1px ${(props) => props.theme.palette.text.third};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.palette.background.paper};
    transition: transform 200ms ease-in;
    margin-top:6rem;
    :hover {
        transform: scale(1.02);
      }
`;

export const CardBody=styled.div`
`;

export const CardImg=styled.div`
    background-repeat: no-repeat;
    height: 20rem;
    width: 100%;
`;

export const CardTitle=styled.h2`   
    padding: 2rem 1rem 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme.palette.text.third};
`;

export const CardContent=styled.p`
    padding: 1rem; 
    font-size: 1.5rem;
    color: ${(props) => props.theme.palette.text.third};
`;

export const CardButton=styled.button`
    padding: 1rem;
    font-family: inherit;
    font-weight: bold;
    font-size: 2rem;
    margin: 1rem;
    border: 2px solid cornflowerblue;
    background: transparent;
    color: cornflowerblue;
    border-radius: 0.2rem;
    transition: background 200ms ease-in, color 200ms ease-in;
    :hover {
    background: cornflowerblue;
    color: var(--black);
  }
`;