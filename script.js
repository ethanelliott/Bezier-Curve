var c;

function setup() {
	c = createCanvas(windowWidth, windowHeight);
	c.parent('sketch-wrapper');
}

function getBezierX(x_0, x_1, x_2, x_3, t)
{
	return (1-t) * ((1-t) * (((1-t) * x_0) + (t * x_1)) + t * (((1-t) * x_1) + (t * x_2))) + t * ((1-t) * (((1-t) * x_1) + (t * x_2)) + t * (((1-t) * x_2) + (t * x_3)));
}

function getBezierY(y_0, y_1, y_2, y_3, t)
{
	return (1-t) * ((1-t) * (((1-t) * y_0) + (t * y_1)) + t * (((1-t) * y_1) + (t * y_2))) + t * ((1-t) * (((1-t) * y_1) + (t * y_2)) + t * (((1-t) * y_2) + (t * y_3)));
}

function draw()
{
	background(0,0,0);
	var x0 = mouseX;
	var y0 = mouseY;
	var x1 = (windowWidth/2) - (((windowWidth/2) - mouseX) / 2);
	var y1 = y0;
	var x2 = (windowWidth/2) - (((windowWidth/2) - mouseX) / 2);
	var y2 = windowHeight/2;
	var x3 = windowWidth/2;
	var y3 = windowHeight/2;
	stroke(0, 255, 0);
	line(x0, y0, x1, y1);
	stroke(0, 0, 255);
	line(x2, y2, x3, y3);

	var pnts = 100;

	for(var i = 0; i <= pnts; i += 1)
	{
		var s = i/pnts;
		var s2 = (i-1)/pnts;
		var x = getBezierX(x0, x1, x2, x3, s);
		var y = getBezierY(y0, y1, y2, y3, s);
		var xs2 = getBezierX(x0, x1, x2, x3, s2);
		var ys2 = getBezierY(y0, y1, y2, y3, s2);
		if (i !== 0)
		{
			stroke(255,0,0);
			strokeWeight(2);
			line(x, y, xs2, ys2);
			fill(255, 255, 255);
			stroke(255);
			strokeWeight(1);
			line(x, y, xs2, y);
			line(xs2, ys2, xs2, y);
			noStroke();
			textSize(32);
			var angle = nfc(degrees(atan((ys2-y)/(xs2-x))),1) + "deg";
			//text(angle, x-50, y-50);
		}
	}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
