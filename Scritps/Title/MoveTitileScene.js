var speed : float = 10.0;
var rotationSpeed : float = 100.0;
var jumpup : float = 5;
var isJump : boolean = false;
	var sw : int = Screen.width;
	var sh : int = Screen.height;

function Update () {

    // Get the horizontal and vertical axis.
    // By default they are mapped to the arrow keys.
    // The value is in the range -1 to 1
    var translation : float = Input.GetAxis ("Horizontal") * speed;
    var rotation : float = Input.GetAxis ("Vertical") * rotationSpeed;
    
    // Make it move 10 meters per second instead of 10 meters per frame...
    translation *= Time.deltaTime;
    rotation *= Time.deltaTime;
    
    transform.Translate (translation, 0, 0);
    // Rotate around our y-axis
    transform.Rotate (0, 0, rotation);
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

