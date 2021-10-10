import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";

export const TextFieldStyle = styled(TextField)`
    .MuiInputBase-root{
        background-color: ${({theme}) => theme.palette.grey[50]};
    }
  .MuiInputBase-notchedOut {
    border-color:  ${({theme}) => theme.palette.grey[100]};
  }
`;