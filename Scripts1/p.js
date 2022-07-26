var lerpedColor : Color = Color.white;
var toolBarState : int = 0;
var toolBarLabels : String[] = ["aaa", "Red", "Green", "Blue"];

function Update() {
	if(toolBarState == 0) {
   		Debug.Log("p");
   		} else if(toolBarState == 1) {
  			lerpedColor = Color.Lerp(Color.white, Color.red, Time.time);
  			renderer.material.color = lerpedColor;
  		} else if(toolBarState == 2) {
  			lerpedColor = Color.Lerp(Color.white, Color.Green, Time.time);
  			renderer.material.color = lerpedColor;
  		} else if(toolBarState == 3) {
  			lerpedColor = Color.Lerp(Color.white, Color.Blue, Time.time);
  			renderer.material.color = lerpedColor;
  	}
}

function OnGUI() {
	toolBarState = GUI.Toolbar( Rect(10,10,400,40),toolBarState, toolBarLabels);
}