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
{ //$B%H%s%M%k$r2s$9(B
//	var rotation : float = Input.GetAxis("Horizontal") * rotationSpeed;//Horizontal$BF~NO$K=>$&(B
	var	rotation :float = Time.deltaTime; //$BF~NOCf(B
	
	transform.Rotate (0,0,rotation);

	transform.Rotate (GyroVector);
}