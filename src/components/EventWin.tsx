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
    const isOpenDrawer = useStore(state => state.isOpenDrawer);
    const removeBetslip = useStore(state => state.removeBetslip);


    const addToBetslip = (betslip: SelectionType, open: boolean) => {
        addBetslip(betslip);
        onOpen(open);
    }

    return <Box my={2}>
        <Grid container justifyContent="center">
            {market.selections.map(({id, name, price}) => {
                const isBetslipExist = betslips.some(betslip => betslip.id === id);

                return <Grid key={`${id}-${name}`}
                             xs={2}
                             display="flex"
                             justifyContent="center"
                >
                    <Button color={isBetslipExist ? "success" : "inherit"}
                            variant="outlined" onClick={() => !isBetslipExist ?
                                addToBetslip({id, name, price}, !isOpenDrawer)
                                : removeBetslip(id)
                    }>
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