import React from "react";

function useFormValidation(initialState) {
    const [values, setValues] = React.useState(initialState);

    function handleChange(e){
        setValues(previousValues =>({
            ...previousValues,
            [e.target.name]: e.target.value

        })
    )
    }

    return {handleChange}
}

export default useFormValidation;
