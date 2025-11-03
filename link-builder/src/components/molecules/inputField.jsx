
import Input from '../atoms/input.jsx'

export default function InputField({value, onChange, ...props}) {
    return (
            <Input {...props} value={value} onChange={(e) => {onChange(e.target.value)}} />
    )
}