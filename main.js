
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

Mars_ig=["nasa_1.jpg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

rover_width=100;
rover_height=90;

background_image=Mars_ig[random_number];
console.log("background Image="+background_image);
rover_image="rover.png";
rover_x=25;
rover_y=150;

function add()
{
   background_imgtag=new Image();
   background_imgtag.onload=uploadBackground;
   background_imgtag.src=background_image;

   rover_imgtag=new Image();
   rover_imgtag.onload=uploadrover;
   rover_imgtag.src=rover_image;
}

function uploadBackground()
    {
       ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);

    }
function uploadrover()
{
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
        up();
        console.log("up");

    }
    if(keyPressed=="40")
    {
        down();
        console.log("down");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left");
    }
    if(keyPressed=="39")
    {
        right();
        console.log("right");
    }

}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("When up arrow is pressed="+rover_x+" , "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("Whent Down arrow is pressed="+rover_x+" , "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed="+rover_x+" , "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("When Right arrow is pressed="+rover_y+" , "+rover_y);
        uploadBackground();
        uploadrover();
    }
}
