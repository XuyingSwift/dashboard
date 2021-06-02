import React from 'react';

import * as s from './FormInput.styles';

const FormInput = ({handleChange, label, ...props }) => {
    return (
        <s.FormInputContainer>
            <s.InputContainer onChange={handleChange} {...props} />
            {
                label ? (
                    <s.InputLabel className={props && props.value && props.value.length > 0  ? 'shrink' : ''}>
                        {label}
                    </s.InputLabel>
                ) : null
            }
        </s.FormInputContainer>
    )
}

export default FormInput;