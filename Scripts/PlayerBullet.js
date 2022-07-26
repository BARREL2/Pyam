#pragma strict
var bulletSpeed : float = 20;
var bulletPrefab : Transform;

static var hitCounter : float = 1;

function Start ()
{

}

function Update ()
{

}

function OnCollisionEnter (other : Collision)
{
	if (other.gameObject.tag == "Block" || other.gameObject.tag == "StarCoin")
	{		
		Destroy(gameObject);
	}	
}
