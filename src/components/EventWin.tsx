import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import {MarketType, SelectionType} from "../types"
import {useStore} from "../store";


type Props = {
    market: MarketType;
}


export const EventWin = ({market}: Props) => {

    const addBetslip = useStore(state => state.addBetslip);
    const onOpen = useStore(state => state.onOpen);
    const betslips = useStore(state => state.betslips);

    const addToBetslip = (betslip: SelectionType, open: boolean) => {
        addBetslip(betslip);
        onOpen(open);
    }

    return <Box>
        <h1>{market.name}</h1>
        <Grid container justifyContent="center">
            {market.selections.map(({id, name, price}) => {
                const isBetslipExist = betslips.some(betslip => betslip.id === id);
                console.log(isBetslipExist);

                return <Grid key={`${id}-${name}`}
                             xs={2}
                             display="flex"
                             justifyContent="center"
                >
                    <Button color={isBetslipExist ? "success" : "inherit"}
                            variant="outlined" onClick={() => addToBetslip({id, name, price}, true)}>
                        <Box>
                            <h2>{name}</h2>
                            <p>{price}</p>
                        </Box>
                    </Button>
                </Grid>
            })}
        </Grid>
    </Box>
}