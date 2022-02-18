import Box from "@mui/material/Box";
import {EventType} from "../types";
import { EventWin } from "./EventWin";

type Props = {
    event: EventType;
}

export const Event = ({event}: Props) => {

    return <Box>
        <h1>{event.markets.length > 0 && event.name}</h1>
        <Box>
            {event.markets.map((market) => <EventWin
                key={market.id}
                market={market}/>
            )}
        </Box>
    </Box>
}