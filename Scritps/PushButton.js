var hantei : boolean = false;

	//$B%W%l%$%d!<$,@\?($9$k$H%\%?%s$r2!$7$?$+$N$h$&$K2<$,$j!"H=Dj$,2<$k(B
function OnCollisionEnter(collision : Collision){
		if (collision.gameObject.tag == "Player"){
			transform.Translate(0,-1,0);
			hantei = true;
			enabled = false;
		}
}