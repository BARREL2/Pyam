using UnityEngine;
using System.Collections;

public class MoveField5 : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	Hashtable hash = iTween.Hash("y",19.5,"time",10.0f,"islocal", true, "easetype", iTween.EaseType.easeInOutCubic);

		
	iTween.MoveTo(gameObject, hash);
	
	}
}