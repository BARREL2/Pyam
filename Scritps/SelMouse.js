static var selectedGameObject : GameObject;

//マウスカーソルをレイ（Ray）にて取得する
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
