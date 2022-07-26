#pragma strict
var titleMode : boolean = false;

static var speed : float = 0.3;
static var toggle : boolean = false;
private var speedometer : float = 0;

static var scoreTimer : float = 0;  //$B%9%H%C%W%&%)%C%A=hM}(B
var paused : boolean = true;//$B%9%H%C%W%&%)%C%AMQH=Dj(B

var bullet : GameObject; //$BCF$r3JG<(B
var labelStyle : GUIStyle; //$B%3%$%s$N8D?t$rIA2h$9$k@_Dj(B

var coinCounter : float; //$B%3%$%s8D?t$r?t$($k(B
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
	{ //$B%2!<%`$,%9%?!<%H$7$?$i0J2<$NJ8$r<B9T(B
		scoreTimer += Time.deltaTime; //1$BIC$:$DA}$d$9(B
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
	
	
	speedometer = 0.7 + speed; //$B%a!<%?!<I=<(!!%G%U%)%k%HB.EY$O(B1
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