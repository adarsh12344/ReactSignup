import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import { Typography, Container } from '@mui/material';

function Signin() {
    return (
        <div>

            <div style={{
                PaddingTop: "150",
                marginBottom: "10",
                display: "flex",
                justifyContent: "center",

            }}>

                <Typography variant="h6" component="h4" >
                    Welcome back, Sign In below
                </Typography>
            </div>


            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Card varient={"outlined"}
                    style={{
                        width: 400, padding: 20,

                    }}>

                    <TextField
                        fullwidth={true}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined" />
                    <br />
                    <br />
                    <TextField
                        id="outlined-basic"
                        label="Passward"
                        variant="outlined"
                        type={'Passward'} />
                    <br />
                    <br />



                    <Button variant="contained">Sign In</Button>

                </Card>
            </div>


        </div>
    )
}

export default Signin