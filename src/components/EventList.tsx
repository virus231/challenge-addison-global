import Box from "@mui/material/Box"
import Events from "../data.json";
import {Event} from "./Event";


export const EventList = () => {
    return <Box>
        {Events.map(event => <Event
            event={event}
            key={event.id}
        />)}
    </Box>
}