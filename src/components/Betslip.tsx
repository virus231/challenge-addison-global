import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {useStore} from "../store";

export const Betslip = () => {
    const betslips = useStore(state => state.betslips);
    const removeBetslip = useStore(state => state.removeBetslip);


    return <Box textAlign="center">
        {betslips.map(betslip => <Box key={betslip.id}>
            <Box>{betslip.name}</Box>
            <Box>{betslip.price}</Box>
            <Button onClick={() => removeBetslip(betslip.id)} variant="outlined">X</Button>
        </Box>)}
    </Box>
}