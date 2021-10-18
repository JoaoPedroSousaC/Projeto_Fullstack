import {styled} from "@mui/material/styles";
import {Paper} from "@mui/material";

export const FormElementsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
  ${({theme}) => theme.breakpoints.down('sm')} {
    max-width: 380px;
  }

  
`;


export const ProfissionaisPaper = styled(Paper)`
  padding: ${({theme}) => theme.spacing(7)};
  margin: 0 auto ${({theme}) => theme.spacing(10)};
  box-shadow: none;
  background-color: ${({theme}) => theme.palette.grey[100]};
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);
  

  ${({theme}) => theme.breakpoints.down('md')} {
    &.MuiPaper-root {
      padding: 0;

    }
  }
`;


export const ProfissionaisContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  

  ${({ theme }) => theme.breakpoints.up('md')} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
