import * as React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Format } from "@prisma/client"

export default function formatRadioButtons(formats: Format[]) {
    return (
        <div>
            {formats.map((format) => (
                <FormControlLabel
                    className="text-black"
                    key={format.key}
                    value={format.format}
                    control={<Radio/>}
                    label={format.format}
                />
            ))}
        </div>
    );
}