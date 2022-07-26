var speed : float = 10.0;
function Update () {
	
    // Get the horizontal and vertical axis.
    // By default they are mapped to the arrow keys.
    // The value is in the range -1 to 1
    var translation : float = -2 * speed;
    
    // Make it move 10 meters per second instead of 10 meters per frame...
    translation *= Time.deltaTime;
    
    transform.Translate (0, 0, -translation);
}