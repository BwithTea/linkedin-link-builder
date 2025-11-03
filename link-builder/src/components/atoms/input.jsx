

export default function Input({label,type="text", ...props}) {
    return (
        <>
            {label && <label htmlFor={props.id}>{label}</label>}
            <input type={type} {...props}></input>
        </>
    )
}