static var selectedGameObject : GameObject;

//$B%^%&%9%+!<%=%k$r%l%$!J(BRay$B!K$K$F<hF@$9$k(B
function Update () {
  var ray : Ray;
  var hit : RaycastHit;
  ray = Camera.main.ScreenPointToRay(Input.mousePosition);
  if (Physics.Raycast(ray, hit, 100)) {
    selectedGameObject = hit.collider.gameObject;
  } else {
    selectedGameObject = null;
  }
}
