#pragma strict

function Start ()
{

}

function Update ()
{
	Rolling ();
}

function Rolling ()
{
	var rotation : float = Time.deltaTime * 4;
	
	transform.Rotate(0,0,rotation);	
}