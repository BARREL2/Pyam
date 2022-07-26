using UnityEngine;
using System.Collections;

public class MoveLift2 : MonoBehaviour {

	// Use this for initialization
	void Start () {
		 iTween.MoveTo(gameObject,iTween.Hash("path",iTweenPath.GetPath("ml2"),"time",15,"looptype", iTween.LoopType.pingPong,"easetype",iTween.EaseType.linear));
	}
	
	// Update is called once per frame
	void Update () {

    }
}
