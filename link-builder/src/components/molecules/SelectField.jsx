import Select from '../atoms/select.jsx'

export default function SelectField({onChange, options, ...props}) {
    return (
        <Select {...props} onChange={(e) => {onChange(e.target.value)}} 
        options={[
            {value: "", label: "Select Timeframe"},
            {value: "3600", label: "Past Hour"},
            {value: "7200", label: "Past 2 Hours"},
            {value: "14400", label: "Past 4 Hours"},
            {value: "86400", label: "Past 24 Hours"},
        ]}/>
    )
}