#pragma strict

var RotationSpeed : float = 0.5;

function Start () {

}

function Update () {
		transform.Rotate(0,0,RotationSpeed);
}