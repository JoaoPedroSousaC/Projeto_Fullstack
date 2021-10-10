import React from "react";
import TextField from "../TextField/TextField";
// @ts-ignore
import InputMask from 'react-input-mask';
import {OutlinedTextFieldProps} from "@mui/material";

export interface TextFieldMaskProps extends OutlinedTextFieldProps{
    mask: string;
    value: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({mask,value, onChange, ...props}) =>{
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {() => {
                return <TextField {...props} />;
            }}

            </InputMask>
        );

};
export default TextFieldMask;