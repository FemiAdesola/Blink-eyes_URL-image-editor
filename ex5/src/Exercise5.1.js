import React, {useRef, useEffect} from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';


function Ap1() {
	const canvasRef = useRef();
    
    useEffect(() => {
        let ctx = canvasRef.current.getContext('2d');
		// Set line width
ctx.lineWidth = 3;
        
// Wall
        //strokeRect(x, y, width, height)
      ctx.fillStyle = 'indigo';
        ctx.fillRect(5, 50, 123, 180);
        ctx.fillStyle = 'violet';
        ctx.fillRect(140, 121, 100, 110);
        ctx.fillStyle = 'burlywood';
       ctx.strokeRect(255, 121, 100, 110);

 //window
        ctx.clearRect(45, 189, 40, 40);
        ctx.clearRect(15, 100, 40, 40);
    
// Door
        //fillRect(x, y, width, height)
        
        ctx.clearRect(80, 100, 40, 40);
        ctx.clearRect(170, 190, 40, 40);
        ctx.fillRect(285, 190, 40, 40);
// Roof
ctx.beginPath();
        ctx.moveTo(0, 50);
ctx.lineTo(130, 50);
ctx.lineTo(70, 10);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
        //second
        ctx.beginPath();
        ctx.moveTo(135, 120);
        ctx.lineTo(185, 40);
        ctx.lineTo(245, 120);
        ctx.closePath();
        ctx.fillStyle = 'darkblue';
        ctx.fill();        
        ctx.stroke();
        
         //third
        ctx.beginPath();
        ctx.moveTo(250, 120);
        ctx.lineTo(300, 40);
        ctx.lineTo(360, 120);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        // in the end restore the transform
        ctx.restore();
        


	});
		
    return (
        <Paper  variant="outlined" square style={{backgroundColor: 'green', width: 500, margin: 100, marginTop: 50, padding: 50, textAlign: 'center', borderRadius:50 }} display="flex" justifyContent="center"  bgcolor="background.paper">
			<Box backgroundColor="white">
				<Typography style={{"background": "white", marginBottom:10}} variant="h6">House drawing with rectangles and path fillRect, strokeRect and clearRect </Typography>
			</Box>
				<Box>
                    <canvas
						width={365}
                        height={235}
                        ref={canvasRef}
						style={{"background": "gray"}}
                />
                <canvas
                    width={365}
                        height={40}
						style={{"background": "darkgray"}}
					/>
            </Box>
           
            </Paper>
	);
}

export default Ap1;