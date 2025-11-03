import LinkGen from '../organisms/LinkGen.jsx';

import { useState } from 'react'

export default function LinkBuilder() {
    const [jobTitle, setJob] = useState("");
    const [time, setTime] = useState("");

    return (
        <LinkGen jobTitle={jobTitle} setJob={setJob} time={time} setTime={setTime} />
    )
}