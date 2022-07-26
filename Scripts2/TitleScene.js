var target : Transform;
var vec : Vector3;
var se1 : AudioClip;

var stage : float = 1;
function Start () {
	vec = Vector3.up;
	EnemyStatus.redCount = 0;
	EnemyStatus.greenCount = 0;
	EnemyStatus.blueCount = 0;
}

function Update () {

	transform.LookAt(target);
	 transform.RotateAround (target.position, vec, 8 * Time.deltaTime);
	 
	if(Input.GetKeyDown("1")) {
		audio.PlayOneShot(se1);	
		stage = 1;
		ToStage();
	}
	if(Input.GetKeyDown("2")) {
		audio.PlayOneShot(se1);	
		stage = 2;
		ToStage();
	}
}

function ToStage() {
		Camera.main.SendMessage("fadeOut");
		yield WaitForSeconds(2);
		Application.LoadLevel(stage);
}