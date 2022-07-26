var speed : float = 10.0;
var rotationSpeed : float = 100.0;
var jumpup : float = 5;
var isJump : boolean = false;

function Update () {

    // Get the horizontal and vertical axis.
    // By default they are mapped to the arrow keys.
    // The value is in the range -1 to 1
    var translation : float = Input.GetAxis ("Horizontal") * speed;
    var rotation : float = Input.GetAxis ("Vertical") * rotationSpeed;
    
    // Make it move 10 meters per second instead of 10 meters per frame...
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
    
    transform.Translate (0, 0, -translation);
    // Rotate around our y-axis
    transform.Rotate (rotation, 0, 0);
}
function FixedUpdate () {
	    if (!isJump && Input.GetButtonDown ("Jump")) {
	    	isJump = true;
        rigidbody.velocity = Vector3(0,jumpup,0);
    }
}
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Field"){
			isJump = false;
		}
}

function OnGUI(){
	if (GUI.Button(Rect(20, 20, 120, 50), "Max Speed!!")) {       speed = 100;
	}
	 speed = GUI.HorizontalSlider (Rect (20, 80, 250, 50), speed, 10.0, 100.0);
	if (GUI.Button(Rect(150, 20, 40, 20), "Back")) {       Application.LoadLevel("Title");
	}
	   }