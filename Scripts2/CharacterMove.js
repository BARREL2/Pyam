var titleMode : boolean = false;

static var AmbientSpeed : float = 50.0f;
var RotationSpeed : float = 40.0f;

var labelStyle : GUIStyle;
var speedText : float;

static var enemyCount : float;
var labelStyle2 : GUIStyle;

var gameEnd : boolean = false;
static var timeAttack : float = 0;
var labelStyle3 : GUIStyle;
var labelStyle4 : GUIStyle;

var se1 : AudioClip;

function Start() {
	timeAttack = 0;
	enemyCount = GameObject.FindGameObjectsWithTag("enemy").Length;		
}
 function Update() { 
 if(GameStarter.gameStart || titleMode){			
 	
 			if(!gameEnd) timeAttack  += Time.deltaTime;
 			
 			if(Input.GetKey(KeyCode.W)) {
 				if(AmbientSpeed <= 200){
					AmbientSpeed += 0.5; 
				}
			} else if(Input.GetKey(KeyCode.S)) {
				AmbientSpeed -= 0.9;
					if(AmbientSpeed <= 10) {
						AmbientSpeed = 10;
					}
			} else { 
					AmbientSpeed -= 0.3;
				}
			
			 if(AmbientSpeed <= 50) {
					AmbientSpeed += 0.5;
			}
 			//var AddRot : Quaternion  ;
 			var roll : float = 0;
 			var pitch : float = 0;
 			var yaw : float = 0;
 			roll = Input.GetAxis("Roll") * (Time.deltaTime * RotationSpeed);
 			pitch = Input.GetAxis("Pitch") * (Time.deltaTime * RotationSpeed);
  	      	yaw = Input.GetAxis("Yaw") * (Time.deltaTime * RotationSpeed);
  	      	
   	     	//AddRot.eulerAngles = new Vector3(-pitch, yaw, -roll);
       		//rigidbody.rotation  *= AddRot;
       		
       		transform.Rotate(-pitch, yaw, -roll);
        	
        	//rigidbody.velocity = transform.forward * (Time.deltaTime * AmbientSpeed);
        	
        	if(enemyCount <=0) {
        		enemyCount = 0;
        		gameEnd = true; 
        	//	audio.PlayOneShot(se1);	
        		ToResult();
        	}
}
        	transform.Translate(Vector3.forward * Time.deltaTime * AmbientSpeed);
        	
        	speedText = Mathf.Ceil(AmbientSpeed-1);
        	
        	
        	switch(BulletShot.bulletState) {
				case 0 :
					this.transform.renderer.material.SetColor ("_Color",Color.red);
					break;
				case 1: 
					this.transform.renderer.material.SetColor ("_Color",Color.green);
					break;
				case 2: 
					this.transform.renderer.material.SetColor ("_Color",Color.blue);
					break;
		}

}  
     
function OnGUI() {
	GUI.Label(Rect(10,10,40,20),"Speed:"+speedText.ToString(),labelStyle);

	// No Display at Title Scene###################
	if(!titleMode){
		GUI.Label(Rect(10,65,40,20),"Enemy:"+enemyCount.ToString(),labelStyle2);
	
		var msg = String.Format("{0:00}:{1:00}", Mathf.Floor(timeAttack / 60f), Mathf.Floor(timeAttack % 60f), timeAttack % 1 * 100);
    
		GUI.Label(Rect(10,120,40,20),msg,labelStyle3);
		GUI.Label(Rect(10,120,40,20),msg,labelStyle4);	
	}
		// No Display at Title Scene###################
		
	if(gameEnd) {
		
	}
}

function ToResult() {
		yield WaitForSeconds(4);
		Camera.main.SendMessage("fadeOut");
		yield WaitForSeconds(3);
		Application.LoadLevel("Result");
}