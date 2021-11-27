import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const Card = (props) => {
  const dataAmount = props.CardData;
  // const Kashif = props.CardData.kashif;
  const myName = props.name;
  const otherName = myName === "kashif" ? "azarul" : "kashif";
  const myAmount = dataAmount[myName];
  const otherAmount = dataAmount[otherName];
  let outString = "";

  if (props.CardData[myName] > props.CardData[otherName]) {
    outString = otherName + "will pay you";
  } else {
    outString = "You have to pay" + otherName;
  }

  const homeCard = props.homeCard;
  return (
    <Grid container spacing={2} p={2}>
      {/* Grid Start */}

      {!homeCard && (
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          px={2}
          mt={2}
        >
          <Grid item xs={8} textAlign="left">
            You have to pay {props.name === "kashif" ? "otherAmount" : "Kashif"}
            :-{" "}
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ bgcolor: "Green", width: "60%", borderRadius: 1 }} p={2}>
              ₹ 240
            </Box>
          </Grid>
        </Grid>
      )}
      {/* drop here */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        px={2}
        my={2}
      >
        <Grid item xs={4} textAlign="left">
          {myName === "kashif" ? "Kashif" : "Azarul"} Paid :-
        </Grid>

        <Grid item xs={4} textAlign="left">
          {otherName === "kashif" ? "Kashif" : "Azarul"} Paid :-
        </Grid>

        <Grid item xs={4} textAlign="left">
          Total Expeses
        </Grid>
      </Grid>

      {/* Avatars Value or money */}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={2}
      >
        <Grid item xs={4}>
          <Avatar sx={{ bgcolor: "green", width: 70, height: 70 }}>
            ₹ {myAmount}
          </Avatar>
        </Grid>

        <Grid item xs={4}>
          <Avatar sx={{ bgcolor: "green", width: 70, height: 70 }}>
            ₹ {otherAmount}
          </Avatar>
        </Grid>

        <Grid item xs={4}>
          <Avatar sx={{ bgcolor: "green", width: 70, height: 70 }}>
            ₹ {otherAmount + myAmount}
          </Avatar>
        </Grid>
      </Grid>

      {/* Grid End */}
    </Grid>
  );
};

export default Card;
