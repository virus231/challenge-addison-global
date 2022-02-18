import Box from "@mui/material/Box";
import {useStore} from "../store";

export const Betslip = () => {
    const betslips = useStore(state => state.betslips);

    return <Box>
        {betslips.map(betslip => <Box key={betslip.id}>
            <Box>{betslip.name}</Box>
            <Box>{betslip.price}</Box>
        </Box>)}
    </Box>
}