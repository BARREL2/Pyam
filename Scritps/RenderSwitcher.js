var target : GameObject;
var atari : boolean = false;

	//$B%W%C%7%e%\%?%s$+$iAw$i$l$F$-$?H=Dj$r85$K!"%*%V%8%'%/%H$rIA2h$9$k!#(B
function Update(){
		var other = target.GetComponent("PushButton");
		atari = other.hantei;
		
		if(atari){
		renderer.enabled = true;	
		}
		
}
