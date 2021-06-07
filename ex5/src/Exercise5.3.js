import React, {useRef, useEffect} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function App() {
    const [angle, setangle] = React.useState(false);
    const canvasRef = useRef();

    const setMouseCoordinates = (event) => {
    let rotation = angle
        let e = ( rotation += 0.2)
       if (!event) return;
    
     setangle(e)
    }
    
    const draweyes = (ctx, x, y) => {
        ctx.setTransform(1, 0, 0, 1, x, y)
        ctx.rotate(angle)
        ctx.beginPath();
		ctx.arc(6,0,5,0, Math.PI * 2, true);  // eye
        ctx.fillStyle = 'black';
        ctx.fill();
		
	}

    useEffect(() => {
        let ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.ellipse(75, 75, 50, 55, Math.PI, 0, 2 * Math.PI); // Outer ellipse
         ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth 
        ctx.stroke();
        
        ctx.save()
        ctx.beginPath();
        ctx.arc(60, 70, 10, 0, 2 * Math.PI, true);  // Left eye bracket
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(90, 70, 10, 0, 2 * Math.PI, true);  //bb Right eye bracket 
        ctx.stroke();
    
        ctx.beginPath();
        draweyes(ctx,60, 70, true) // Left eye
        draweyes(ctx,90, 70, true) // Right eye
        ctx.restore(); 
    });


    return (
        <Paper  variant="outlined" square style={{backgroundColor: 'green', width: 500, margin: 100, marginTop: 20, padding: 50, textAlign: 'center', borderRadius:20 }} display="flex" justifyContent="center"  bgcolor="background.paper">
			<Box backgroundColor="white">
				<Typography style={{"background": "white", marginBottom:10}} variant="h6"> Moving eyes </Typography>
			</Box>
				<Box style={{"background": "white", marginBottom:10}}>
                    <canvas
						width={150}
                        height={150}
                    ref={canvasRef}
                    onMouseMove={(event) => setMouseCoordinates(event)}
                />
            </Box>
           
            </Paper>
	);
}

export default App;