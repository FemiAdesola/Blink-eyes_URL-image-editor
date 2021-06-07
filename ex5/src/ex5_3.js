import React, {useRef, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function Ex5() {
	const [canvasSize, setCanvasSize] = React.useState([300, 300]);
	const [mouseX, setMouseX] = React.useState(0);
	const [mouseY, setMouseY] = React.useState(0);

	const canvasRef = useRef(null);
	
	window.onresize = (event) => {
		// always keep canvas the same size as the window
		setCanvasSize([window.innerWidth, window.innerHeight]);
		
	}
	
	const setMouseCoordinates = (event) => {
		var rect = event.target.getBoundingClientRect();
		setMouseX(event.clientX - rect.left);
		setMouseY(event.clientY - rect.top);
	}
	
	useEffect(() => {
		let ctx = canvasRef.current.getContext("2d");
		let w = ctx.canvas.width;
		let h = ctx.canvas.height;

		
		// clear canvas
		ctx.clearRect(0, 0, w, h);
		
		
		ctx.setStrokeStyle = "black"; 
		

		let leftEye = {x: w/8*3, y: h/8*3};
		let rightEye = {x: w/8*5, y: h/8*3};
		
		let eyeDiameter = w/8;
		let distanceFactor = Math.min(
			Math.hypot(mouseX-leftEye.x, mouseY - leftEye.y),
			Math.hypot(mouseX-rightEye.x, mouseY - rightEye.y)
		);
		let pupilDiameter = w/16 + 100/distanceFactor;
		
		let oval = (x, y, dx, dy, fill) => {
			ctx.beginPath();
			
			ctx.ellipse(x, y, dx/2, dy/2, 0, 0, Math.PI*2);
			
			if (fill)
				ctx.fill();
				
			else
				ctx.stroke();
			
		}
		oval(w/2, h/2, w/8*6, h/8*6, false);
		oval(leftEye.x, leftEye.y, eyeDiameter, eyeDiameter, false);
		oval(rightEye.x, rightEye.y, eyeDiameter, eyeDiameter, false);
		oval(w/2, h/8*5, w/8*2, 100/distanceFactor, false);
		

		let angleL = Math.atan2(mouseY - leftEye.y, mouseX - leftEye.x);
		ctx.save();
		ctx.translate(Math.cos(angleL)*eyeDiameter/4, Math.sin(angleL)*eyeDiameter/4);
		oval(leftEye.x, leftEye.y, pupilDiameter, pupilDiameter, true);
		ctx.restore();
		
		let angleR = Math.atan2(mouseY - rightEye.y, mouseX - rightEye.x);
		ctx.save();
		ctx.translate(Math.cos(angleR)*eyeDiameter/4, Math.sin(angleR)*eyeDiameter/4);
		oval(rightEye.x, rightEye.y, pupilDiameter, pupilDiameter, true);
		ctx.restore();
	});

	return (
		<Paper  variant="outlined" square style={{backgroundColor: 'green', width: 500, margin: 100, marginTop: 20, padding: 50, textAlign: 'center', borderRadius:20 }} display="flex" justifyContent="center"  bgcolor="background.paper">
		<Box>
			<canvas
				width={canvasSize[0]}
				height={canvasSize[1]}
				onMouseMove={setMouseCoordinates}
				ref={canvasRef}
			/>
			</Box>
			</Paper>
	);
}

export default Ex5;
