#pragma strict

var titleMode : boolean = false; //$B%?%$%H%kMQ(B GUI$B$r>C$9(B

var goalTex : Texture2D; //$B%4!<%k!*$N2hA|(B
var labelOn : boolean = false; //$B%4!<%k!*2hA|$r%*%U$K$7$F$$$k>uBV(B

static var scoreStop : boolean = false;
static var timer : float = 320;

function Start ()
{

}

function Update ()
{
	
	if (labelOn)
	{
		timer--;
			if (timer < 0)
			{
				timer = 0;
				labelOn = false;
				timer = 320;
			}
	}
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player")
	{
		Debug.Log("col");
		labelOn = true;
		scoreStop = true;
		Player.speed = 0.2;
	}
	
 	if (other.gameObject.tag == "Bullet")
 	{		
		Destroy(other.gameObject);
	}	
}

function OnGUI ()
{
	if (!titleMode)
	{
		if (labelOn)
		{
			GUI.Label(Rect(Screen.width*1.4/5,Screen.height*2.3/5,goalTex.width/2,goalTex.height/2),goalTex);		}
	}
}