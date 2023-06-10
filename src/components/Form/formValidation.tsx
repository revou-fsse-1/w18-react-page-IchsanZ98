interface FormValidationProps {
    formErrors:{
        email: string;
        firstName: string;
        lastName: string;
        status:string
    }
}

export function FormValid(props: FormValidationProps){
    console.log(props.formErrors)
    return (
        <div className="mx-auto fixed bottom-4">
                {props.formErrors.status && <span className="text-white bg-black px-12 py-2 rounded-xl">{props.formErrors.status}</span>}
        </div>
    )
}