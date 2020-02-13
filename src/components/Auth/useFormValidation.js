import React from "react";

function useFormValidation(initialState, validate) {
    const [values, setValues] = React.useState(initialState);
    const [errors, setErrors] = React.useState({});
    const [isSubmitting, setSubmitting] = React.useState(false);

    React.useEffect(()=>{
        if(isSubmitting){
            const noErrors = Object.keys(errors).length === 0;
            if(noErrors){
                console.log('user authenticated', values);
                setSubmitting(false);
            }else{
                console.log(errors);
                setSubmitting(false);
            }
        }
    }, [errors]);

    function handleChange(e){
        e.persist();
        setValues(previousValues =>({
            ...previousValues,
            [e.target.name]: e.target.value

        })
    )
    }

    function handleBlur(){
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    function handleSubmit(e){
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setSubmitting(true);
        console.log({values});
    }

    return {handleChange, handleSubmit, handleBlur, isSubmitting, errors, values}
}

export default useFormValidation;
