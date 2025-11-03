


export default function Select({label, options, ...props}) {
    return (
        <>
            {label && <label htmlFor={props.id}>{label}</label>}
            <select {...props}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    )
}