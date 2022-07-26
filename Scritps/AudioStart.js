//２秒待ってからBGMを再生
function Start () {
	yield WaitForSeconds (2);
	audio.Play();
}
