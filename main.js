var mouseEvent = "empty";
var last_position_of_X,last_position_of_Y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color="black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if(mouseEvent == "mousedown")
        {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,40,0,2*Math.PI);
            ctx.stroke();
        }

        last_position_of_X = current_position_of_mouse_x;
        last_position_of_Y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent = "mouseLeave";
}