var titleMode : boolean = false; //タイトル用 GUIを消す

var endMenu : boolean = false;
var currentScore : boolean = false;
var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;
var labelStyle3 : GUIStyle;

var lastScore : float = 0;
var sabunScore : float = 0;

var highScore : int;

function Start () 
{
	highScore = PlayerPrefs.GetInt("HighScore");	
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player")
	{
		Debug.Log("galcol");
		Player.speed = 0;
			endMenu = true;
			lastScore = Score.score;
			currentScore = true;
			
	}
	
	if (currentScore)
	{
		TimeBonus();
	}
}

function TimeBonus ()
{
	lastScore += Mathf.Ceil((500 / Player.scoreTimer));
	yield WaitForSeconds(0.1);
	
	sabunScore = lastScore - Score.score;
	sabunScore = Mathf.Ceil(sabunScore/19);
	for (var i : float = 0; i <= sabunScore;i++)
	{
			yield WaitForSeconds(0.05);
			lastScore += Mathf.Ceil(sabunScore *19);
	}
	
	if(lastScore > highScore)
	{ //スコアがハイスコアを超えていたらハイスコアを更新
		highScore = lastScore;
		PlayerPrefs.SetInt("HighScore", highScore);
		PlayerPrefs.Save();
 	}
}

function OnGUI () {
	
	if (!titleMode)
	{
		if (endMenu)
		{	
			if (GUI.Button(Rect(Screen.width*2/5,Screen.height*3.4/5,Screen.width*1/5,50),"new game"))
			{
				Player.toggle = false;
				Score.score = 0;
				Player.speed = 0.3;
				Player.scoreTimer = 0;
				GameEnd.scoreStop = false;
				
				Application.LoadLevel("3");	
			}
			
			if (GUI.Button(Rect(Screen.width*2/5,Screen.height*4/5,Screen.width*1/5,50),"high score\n reset"))
			{
				highScore = 0;
				PlayerPrefs.SetInt("HighScore",0);
				PlayerPrefs.Save();
			}
		}
	
		if (currentScore)
		{
			GUI.Label(Rect(Screen.width*3/10,Screen.height*1.2/3,400,80),"High Score:\n "+highScore.ToString(),labelStyle3);
			GUI.Label(Rect(Screen.width*3/10,Screen.height*1.22/3,190,80),"Time Bonus:\n+"+(lastScore-Score.score).ToString(),labelStyle2);
			GUI.Label(Rect(Screen.width*3/10,Screen.height*2.7/5,140,40),lastScore.ToString(),labelStyle);
		}
	}
}