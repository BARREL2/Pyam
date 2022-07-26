#pragma strict
var rotationSpeed : float = 20;
private var myTransform : Transform;

var GyroVector : Vector3;

function Start ()
{
	myTransform = transform;
}

function Update ()
{
	
	GyroVector = Input.gyro.rotationRate;
	
	if (Player.toggle)
	{
	//	MoveTunnel ();
	}
	
	Rolling ();
	
}

function MoveTunnel ()
{
		//transform.Translate(0,0,Player.speed -0.4);
		
		if (GameStarter.timer == 0)
		{
			transform.Translate(0,0,Player.speed);
			
		}		
}

function Rolling ()
{ //トンネルを回す
//	var rotation : float = Input.GetAxis("Horizontal") * rotationSpeed;//Horizontal入力に従う
	var	rotation :float = Time.deltaTime; //入力中
	
	transform.Rotate (0,0,rotation);

	transform.Rotate (GyroVector);
}