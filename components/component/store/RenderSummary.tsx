import Typography from "@mui/joy/Typography";
import Link from "next/link";
import * as React from "react";

export default function renderSummaryWithoutLink(data : ProductAPI, summary: string) {
    // Buscar coincidencias de enlaces en el resumen original
    const linkRegex = /<a\s+href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi;
    const match = linkRegex.exec(summary);

    if (match) {
        const linkUrl = match[1];
        const anchorText = match[2];
        const summaryWithoutLink = data.summary.replace(linkRegex, '..');
        return (
            <>
                <Typography className="text-justify" >
                    {summaryWithoutLink}
                </Typography>
                <Link className="text-blue-600" href={linkUrl}>{anchorText}</Link>
            </>
        );
    } else {
        return data.summary;
    }
}