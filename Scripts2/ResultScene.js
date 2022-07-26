var target : Transform;
var vec : Vector3;
var se1 : AudioClip;

var timeResult : float;
var labelStyle : GUIStyle;
var labelStyle2 : GUIStyle;
var labelStyle3 : GUIStyle;
var labelStyle4 : GUIStyle;

//Time Ranking#####
var rank1 : float = 3;
var rank2 : float = 7;
var rank3 : float = 10;
var labelStyle5 : GUIStyle;
//Time Ranking#####

function Start () {
	vec = Vector3.up;
	timeResult = CharacterMove.timeAttack;
	CharacterMove.timeAttack = 0;
	GameStarter.gameStart = false;
}

function Update () {

	transform.LookAt(target);
	transform.RotateAround (target.position, vec, -8 * Time.deltaTime);

	if(timeResult < PlayerPrefs.GetFloat("Rank1") || PlayerPrefs.GetFloat("Rank1")==0) {
		PlayerPrefs.SetFloat("Rank1",timeResult);
		PlayerPrefs.Save();
		rank1 = timeResult;
		Debug.Log("rank1");
	}else if((timeResult < PlayerPrefs.GetFloat("Rank2")) && (timeResult > PlayerPrefs.GetFloat("Rank1"))) {
		PlayerPrefs.SetFloat("Rank2",timeResult);
		PlayerPrefs.Save();
		rank2 = timeResult;
		Debug.Log("rank2");
	}else if((timeResult < PlayerPrefs.GetFloat("Rank3")) && (timeResult > PlayerPrefs.GetFloat("Rank2"))) {
		PlayerPrefs.SetFloat("Rank3",timeResult);
		PlayerPrefs.Save();
		rank3 = timeResult;
		Debug.Log("rank3");
	}
			
}

function OnGUI() {
	var msg = String.Format("Time: {0:00}:{1:00}", Mathf.Floor(timeResult / 60f), Mathf.Floor(timeResult % 60f), timeResult % 1 * 100);
    
	GUI.Label(Rect(10,120,40,20),msg,labelStyle);
	
	GUI.Label(Rect(10,170,40,20),"Red Paint:"+EnemyStatus.redCount.ToString(),labelStyle2);
	GUI.Label(Rect(10,210,40,20),"Green Paint:"+EnemyStatus.greenCount.ToString(),labelStyle3);
	GUI.Label(Rect(10,250,40,20),"Blue Paint:"+EnemyStatus.blueCount.ToString(),labelStyle4);
	
	
	//Ranking Drew#####################
	var msg1 = String.Format("{0:00}:{1:00}", Mathf.Floor(rank1 / 60f), Mathf.Floor(rank1 % 60f), rank1 % 1 * 100);
	var msg2 = String.Format("{0:00}:{1:00}", Mathf.Floor(rank2 / 60f), Mathf.Floor(rank2 % 60f), rank2 % 1 * 100);
	var msg3 = String.Format("{0:00}:{1:00}", Mathf.Floor(rank3 / 60f), Mathf.Floor(rank3 % 60f), rank3 % 1 * 100);
	
	GUI.Label(Rect(Screen.width*1/10,320,150,40),"Time Record",labelStyle5);
	GUI.Label(Rect(Screen.width*1/10,360,150,40),"1st:"+msg1.ToString(),labelStyle5);
	GUI.Label(Rect(Screen.width*1/10,400,150,40),"2nd:"+msg2.ToString(),labelStyle5);
	GUI.Label(Rect(Screen.width*1/10,440,150,40),"3rd:"+msg3.ToString(),labelStyle5);
	//Ranking Drew#####################	
	
	if(GUI.Button(Rect(10,10,40,20),"Title")){
		Application.LoadLevel("Title");
	}
}