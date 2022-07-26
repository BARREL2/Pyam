
var titleMode : boolean = false; //タイトル用 GUIを消す

static var score : float = 0;
var scoreAccelerator :float = 0;

function Start ()
{

}


function Update ()
{
	
		transform.Translate(0,0,Player.speed);
		
	if (!GameEnd.scoreStop)
	{
		
		if (GameStarter.scoreOn)
		{
			AddScore ();
		}
	}
	scoreAccelerator = Player.speed +0.7;
	
}

function AddScore ()
{ //スコア加算方法
	
	if (Player.toggle)
	{ //通常運転時は1ずつ　それ以外は2ずつなど
		score += 1;
	
		if (scoreAccelerator >= 1.0 && scoreAccelerator <= 1.2)
		{
			score += 2;	
		} else if (scoreAccelerator >= 1.2 && scoreAccelerator <= 1.4)
		
		{
			score += 4;	
		} else if (scoreAccelerator >= 1.4 && scoreAccelerator <= 1.6)
		
		{
			score += 8;	
		} else if (scoreAccelerator >= 1.6 && scoreAccelerator <= 1.8)
		
		{
			score += 15;	
		} else if (scoreAccelerator >= 2.0)
		
		{
			score += 30;	
		}
	} else 
	
	{
		score += 0;
	}
	
}

function OnGUI ()
{
	if (!titleMode)
	{
		GUI.TextField(Rect(Screen.width*2/5,30,Screen.width*1/5,20),"Score  :  " + score.ToString(),100);	
		GUI.TextField(Rect(Screen.width*2/5,60,Screen.width*1/5,20),"Speed  :  " + scoreAccelerator.ToString(),100);
	}
}