#pragma strict
var titleMode : boolean = false;

var bullet : GameObject; // tama kakunou 
static var bulletState : float = 0;
var se1 : AudioClip;

var initialVelocity : float = 100;  
function Start () {

}

function Update () {
	 
		initialVelocity = 100 + CharacterMove.AmbientSpeed;
		

 		//R-G-B color change###############
 		if(Input.GetKeyDown(KeyCode.R)) {
			bulletState += 1;
		}
		if(bulletState >= 3) {
			bulletState = 0;
		}

 		//R-G-B color change###############
 if(GameStarter.gameStart || titleMode){			
 		
 		
		//Z key  shoot bullet##########################
		if (Input.GetKeyDown(KeyCode.Z)) {
			audio.PlayOneShot(se1);			
			//Instantiate bulletPrefab
			var mybullet :  GameObject = 
					Instantiate(bullet, transform.position, transform.rotation); 
					
			switch(bulletState) {
				case 0 :
					mybullet.renderer.material.SetColor ("_Color",Color.red);
				break;
				case 1: 
					mybullet.renderer.material.SetColor ("_Color",Color.green);
				break;
				case 2: 
					mybullet.renderer.material.SetColor ("_Color",Color.blue);
				break;
	}
			//decide direction of bullet
			var direction : Vector3 = transform.forward;
			
			//move bullet 
			mybullet.rigidbody.velocity = direction * initialVelocity;

		}
		//Z key  shoot bullet##########################
}
}

