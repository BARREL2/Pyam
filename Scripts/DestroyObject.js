#pragma strict
var touchObject : GameObject; // $B%?%C%A$7$?%*%V%8%'%/%H$rBeF~(B
var explosionEffect : GameObject; // $B>CLG%(%U%'%/%H(B($B%Q!<%F%#%/%k(B)

var hit : RaycastHit;
var posX : float = 0;
var posY : float = 0;

var sabun : int = 0;
var sabunscore : int = 0;

//$B%?%C%A$5$l$?%b%N$rH=Dj$7$FF@E@$r2C$($k(B
function TouchObject(){

	touchObject = hit.transform.gameObject;
	if(hit.transform.gameObject.tag == "Untagged"){
		return;
	}
	if(hit.transform.gameObject.tag == "Title"){
		Application.LoadLevel("Main");
		return;
	}
	if(hit.transform.gameObject.tag == "Title2"){
		Application.LoadLevel("Main");
		return;
	}	
	if(hit.transform.gameObject.tag == "Block"){
		sabunscore = Score.score;
		Score.score += 1;
	}
	if(hit.transform.gameObject.tag == "RedBlock"){
		sabunscore = Score.score;
		Score.score += 5;
	}
	if(hit.transform.gameObject.tag == "BlueBlock"){
		sabunscore = Score.score;
		Score.score += 10;
	}
	if(hit.transform.gameObject.tag == "GreenBlock"){
		sabunscore = Score.score;
		Score.score += 50;
	}
	if(hit.transform.gameObject.tag == "PurpleBlock"){
		sabunscore = Score.score;
		Score.score += 100;
	}
	if(hit.transform.gameObject.tag == "BlackBlock"){
		sabunscore = Score.score;
		Score.score += 1000;
	}
	
	//$B%9%3%"IA2h(B
	sabun = (Score.score - sabunscore) * 2;
	guiText.text = "+"+ sabun.ToString();
	
	//$BGzH/%(%U%'%/%H(B
	var explosion = Instantiate( explosionEffect, touchObject.transform.position, Quaternion.identity );//$BGzH/%(%U%'%/%H(B
	Destroy(touchObject); 
	Destroy(explosion, 1.1);
	touchObject = null;
}

function Update () {
	//Ray$B=hM}(B
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);

		//$B%+%a%i$+$iIT2D;k%l!<%6!<$r=P$9!!%G%P%C%0;~$O2D;k>uBV(B
	if (Physics.Raycast (ray, hit, 100)) {
  		Debug.DrawLine (ray.origin, hit.point);
   	 		if(Input.GetButtonDown("Fire1")){
				TouchObject();
  	 		}
  	}
}