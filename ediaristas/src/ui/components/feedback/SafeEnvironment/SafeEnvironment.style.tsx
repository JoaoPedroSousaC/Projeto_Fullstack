import {styled} from '@mui/material/styles';


export const SafeEnvironmentContainer = styled('div')`    
    text-align: right;    
    font-size: 12px;
    background-color: ${({theme}) => theme.palette.background.default} ;
    color: ${({theme}) => theme.palette.text.secondary};
    padding: ${({theme}) => theme.spacing(2)} 0 ;
`;