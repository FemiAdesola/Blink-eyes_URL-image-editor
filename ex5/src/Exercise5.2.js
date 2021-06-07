import React, {useRef, useEffect} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function Ap() {
    const [image, setImage] = React.useState("https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg");
    const [Captioned, setCaptioned] = React.useState("");
    const [figure, setFigure] = React.useState("");
   

    const canvasRef = useRef(null);
   
    
    
    useEffect(() => {
        let ctx = canvasRef.current.getContext('2d');
        ctx.font = '24px academy engraved let';
      
        let img = new Image();
        img.src = image;
        img.onload = function () {
            const w = img.width,
                h = img.height;
            ctx.drawImage(img, 80, 40, w , h , 0, 0, 600, 600);
            ctx.fillStyle = 'white';
            ctx.fillText(Captioned.toLocaleUpperCase(), 150, 80);
            ctx.fillText(figure.toLocaleUpperCase(), 160, 400);
            
        };
    
    });
    const handleCaptioned = (event) => {
        if (event.target.id === "Captioned")
            setCaptioned(event.target.value);
    }
const handleimage = (event) => {
        if (event.target.id === "image")
         setImage(event.target.value); 
    }

    const handlefigure = (event) => {
        if (event.target.id === "figure")
            setFigure(event.target.value);
    }

    return (
        <Paper variant="outlined" square style={{ backgroundColor: 'green', width: 500, margin: 100, marginTop: 50, padding: 50, textAlign: 'center', borderRadius: 50 }} display="flex" justifyContent="center" bgcolor="background.paper">
            <Box backgroundColor="white">
                <Typography style={{ "background": "white", marginBottom: 10 }} variant="h6">Application where a user can select a picture through publicUrl </Typography>
            </Box>
            <Box>
                <canvas
                    width={500}
                    height={500}
                    ref={canvasRef}
                    style={{ "background": "burlywood", borderRadius: 50 }}
                />
                <Box style={{  "display":"flex", "justifyContent":"center", "backgroundColor":"white"}}>
                <TextField variant="filled" fullWidth margin="normal" label="URL" onChange={handleimage} defaultValue={image} id="image" />
               </Box>

            <Box style={{ "display":"flex", "justifyContent":"center", "backgroundColor":"white"}}>
                <TextField fullWidth label="Captioned"  onChange={handleCaptioned} defaultValue={Captioned} variant="filled" id="Captioned"/>
            </Box>

            <Box style={{"display":"flex", "justifyContent":"center", "backgroundColor":"white"}}>
                <TextField fullWidth margin="normal"  label="Figure" onChange={handlefigure} defaultValue={figure} variant="filled" id="figure"/>
                </Box>
            </Box>
    

           
            
        </Paper>
    );
}
export default Ap;