	//タイヤをまわす
function Update () {
		if(Input.GetKey(KeyCode.RightArrow)){
			transform.Rotate(7,0,0);
		}
		if(Input.GetKey(KeyCode.LeftArrow)){
			transform.Rotate(-7,0,0);
		}
}
