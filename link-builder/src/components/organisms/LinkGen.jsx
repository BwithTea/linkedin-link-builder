import InputField from '../molecules/inputField.jsx'
import SelectField from '../molecules/selectField.jsx'
import FormField from '../molecules/FormField.jsx'

export default function LinkGen({ time, setTime, jobTitle, setJob }) {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "1rem", padding: "2rem", border: "2px solid black", width: "400px"}}>
            <FormField>
                <InputField id="job-title" label="Job Title" type="text" placeholder="Enter job title" value={jobTitle} onChange={setJob} />
            </FormField>
            
            <FormField>
                <SelectField id="time" label="Time" value={time} onChange={setTime} />
            </FormField>
            
            <h1>{time}</h1>
        </div>
        
    )
}