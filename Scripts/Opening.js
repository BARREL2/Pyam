#pragma strict

public var fadeOutTexture : Texture2D;
public var fadeSpeed = 0.3; 
var drawDepth = -1000;

private var alpha = 1.0;  
private var fadeDir = -1;

var timer : int = 0;

function Start()
{
	alpha = 0;
	fadeOut();
}

function Update ()
{
	timer++;
	
	if(timer < 100)
	{
	 fadeDir = 1;
	}
	
	if(timer > 120)
	{
		Application.LoadLevel("Title");
	}
}

function OnGUI()
{
	alpha += fadeDir * fadeSpeed * Time.deltaTime;	
	alpha = Mathf.Clamp01(alpha);	
 
	GUI.color.a = alpha;
	GUI.depth = drawDepth;
 
	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeOutTexture);
}

function fadeIn()
{
	fadeDir = -1;	
}
  
function fadeOut()
{
	fadeDir = 1;	
}
 