var initialVelocity : float = 100;
private var target : GameObject ;
var se1 : AudioClip;

function Start(){
	//Debug.Log("Homing");
	target = LockOnSystem.locked[2];
	audio.PlayOneShot(se1);	
}
function Update() {
		initialVelocity = 100 + CharacterMove.AmbientSpeed;

		switch(BulletShot.bulletState) {
				case 0 :
					this.renderer.material.SetColor ("_Color",Color.red);
					break;
				case 1: 
					this.renderer.material.SetColor ("_Color",Color.green);
					break;
				case 2: 
					this.renderer.material.SetColor ("_Color",Color.blue);
					break;
		}
	transform.LookAt(target.transform);
    	transform.Translate(Vector3.forward * Time.deltaTime * initialVelocity);
}

function OnCollisionEnter(other : Collision) {
    if (other.gameObject.tag == "enemy") {
        other.transform.renderer.material.color = Color.red;
        other.gameObject.GetComponent(EnemyStatus).locked = false;
        transform.renderer.enabled = false;
		collider.enabled = false;
		Destroy(gameObject,12);
        LockOnSystem.locked[2] = 0;
    }
}