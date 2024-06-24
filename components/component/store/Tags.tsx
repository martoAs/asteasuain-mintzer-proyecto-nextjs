import Chip from "@mui/joy/Chip";
import * as React from "react";
import {AlbumComplete} from "@/app/data/data";

export default function tags(data : AlbumComplete) {
    const chips = [];
    for (let i = 0; i < data.tags.length; i++) {
        const tag = data.tags[i];
        chips.push(<Chip key={i}>{tag}</Chip>);
    }
    return chips
}