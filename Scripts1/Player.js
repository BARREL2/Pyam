#pragma strict
var titleMode : boolean = false;

static var speed : float = 0.3;
static var toggle : boolean = false;
private var speedometer : float = 0;

static var scoreTimer : float = 0;  //ストップウォッチ処理
var paused : boolean = true;//ストップウォッチ用判定

var bullet : GameObject; //弾を格納
var labelStyle : GUIStyle; //コインの個数を描画する設定

var coinCounter : float; //コイン個数を数える
var coinSE : AudioClip; //coin se
var shotSE : AudioClip; // shotSE
var speedUpSE : AudioClip; //speedUpSE

var coinReset : float = 0;


function Start ()
{
	coinCounter = PlayerPrefs.GetInt("GetCoins");
}

function Update ()
{

	if (Input.GetKeyDown(KeyCode.Z)) {
		var mybullet : GameObject = Instantiate (bullet, transform.position+Vector3(0,0,-2), transform.rotation);
		mybullet.rigidbody.velocity = Vector3(0,0,-50*(Player.speed*3));
		audio.PlayOneShot(shotSE);
	}
	

			if (Input.GetKeyDown(KeyCode.P)) {
				PlayerPrefs.SetInt("GetCoins", coinReset);
				PlayerPrefs.Save();
			}	

/*	if (Input.GetButtonDown("Jump")) {
		if (speed <= 3) {
		speed += 0.006;		
		}		
	} else if (speed >= 0.3) {
		speed -= 0.005;
	}*/
	
	if (!paused)
	{ //ゲームがスタートしたら以下の文を実行
		scoreTimer += Time.deltaTime; //1秒ずつ増やす
	}
	
//	MovePlayer();
		
	if (Input.GetKey("up")) {
		transform.position += (Vector3.forward*-0.04);
	}
	if (Input.GetKey("down")) {
		transform.position += (Vector3.forward*0.04);	
	}
	
	if (Input.GetKey("right")) {
		transform.position += (Vector3.right*-0.1);
	}
	if (Input.GetKey("left")) {
		transform.position += (Vector3.right*0.1);
	}
	if (Input.GetKeyDown(KeyCode.A)) {
		if (speedometer <= 4)
			{
			speed += 0.2;
			audio.PlayOneShot(speedUpSE);
			}
	}

	
	if (GameEnd.scoreStop)
	{
		speed = 0.1;
	}
	
	
	speedometer = 0.7 + speed; //メーター表示　デフォルト速度は1
}

function MovePlayer () 
{ 
	transform.Translate(0,0,-speed);	
}

function OnGUI ()
{
	
	if (!titleMode)
	{
	
		if (GUI.Button(Rect(15,70,50,25),"Move"))
		{
			toggle = true;
		}
		
		if (GUI.Button(Rect(15,105,50,25),"Stop"))
		{
			toggle = false;
		}
		if (GUI.Button(Rect(15,140,50,25),"Accel"))
		{
			if (speedometer <= 4)
			{
			speed += 0.2;
			}
		}
		
	//	GUI.TextField (Rect (Screen.width*1/14, Screen.height*1/16, 33, 20), speedometer.ToString(),20);
		GUI.Label(Rect(Screen.width*8.5/10,20,55,40),coinCounter.ToString(),labelStyle);
			
		GUILayout.Box(String.Format("{1:00}:{2:00}:{3:00}", Mathf.Floor(scoreTimer / 3600f), Mathf.Floor(scoreTimer / 60f), Mathf.Floor(scoreTimer % 60f), scoreTimer % 1 * 100), GUILayout.Width(80));
	}
}

function OnCollisionEnter (other : Collision)
{
	if(other.gameObject.tag == "Block")
	{
		speed = 0.1;
	}
	
	if (other.gameObject.tag == "StarCoin")
	{
		coinCounter++;
		audio.PlayOneShot(coinSE);
		Destroy(other.gameObject);
		PlayerPrefs.SetInt("GetCoins", coinCounter);
		PlayerPrefs.Save();
		
	}
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "StartGrid")
	{
		paused = false;
		toggle = true;
	}
	
	if (other.gameObject.tag == "EndGrid")
	{
		paused = true;
	}
}