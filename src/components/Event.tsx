import Box from "@mui/material/Box";
import {EventType} from "../types";
import { EventWin } from "./EventWin";

type Props = {
    event: EventType;
}

export const Event = ({event}: Props) => {
    const isEventExist = event.markets.length > 0 && event.name;

    return <Box style={{"border": `2px solid ${isEventExist ? "black" : "white"}`}} mb={5}>
        <h1>{isEventExist}</h1>
        <Box>
            {event.markets.map((market) => <EventWin
                key={market.id}
                market={market}
                />
            )}
        </Box>
    </Box>
}