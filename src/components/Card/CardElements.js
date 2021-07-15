import styled from 'styled-components';



export const CardContainer=styled.div`
    overflow: hidden;
    box-shadow: 0 2px 9px ;
    border-radius: 0.5rem;s
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.palette.background.paper};
    transition: transform 200ms ease-in;
    margin:3rem 0;
    :hover {
        transform: scale(1.02);
      }
`;

export const CardBody=styled.div`
`;

export const CardImg=styled.div`
    background-repeat: no-repeat;
    height: 18rem;
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

