import React from "react";
import TextField from "../TextField/TextField";
import InputMask from 'react-input-mask';

export interface TextFieldMaskProps{
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({mask, ...props}) =>{
    return (
        <InputMask mask={mask}>
            {() => {
                return <TextField {...props} />;
            }}

            </InputMask>
        );

};
export default TextFieldMask;