#pragma strict

var titleMode : boolean = false; //$B%?%$%H%kMQ(B GUI$B$r>C$9(B

var startTex : Texture2D; //$B%9%?!<%H!*$N2hA|(B
var labelOn : boolean = false; //$B%9%?!<%H!*2hA|$r%*%U$K$7$F$$$k>uBV(B

static var scoreOn : boolean = false; //$B%9%3%"8F$S=P$7MQ(Bbool
static var timer : float = 90;

var titleTex : Texture2D; //$B%F%/%9%A%c(B

var rotSpeed : float = 5;
var childrenB : boolean = false;

function Start ()
{

}

function Update ()
{
	var rotation : float = Time.deltaTime * rotSpeed;
	rotation *= rotSpeed * 10;
	transform.Rotate(0,0,-rotation);
	
	if (labelOn)
	{
		timer--;
			if (timer < 0)
			{
				timer = 0;
				labelOn = false;
			}
	}
}

function OnTriggerEnter (other : Collider)
{
	if (childrenB)
	{
		
	if (other.gameObject.tag == "Player")
	{
		labelOn = true;
		scoreOn = true;
	}
	}
}

function OnGUI ()
{
	if (childrenB)
	{
		
	if (!titleMode)
	{
		if (labelOn)
		{
			GUI.Label(Rect(Screen.width*1.4/5,Screen.height*2.3/5,startTex.width/2,startTex.height/2),startTex);
		}
	} else
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), titleTex);
		if (GUI.Button(Rect(Screen.width*2/5,Screen.height*3/5,Screen.width*1/5,80),"Game Start")){
			Application.LoadLevel("3");	
		}
	}
	}
}