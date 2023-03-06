#pragma strict

public var direction : String = "Forward";
public var velocity : float = 0.5;
static var isRunning : boolean = false;
static var isPaused : boolean = false;

function OnTriggerStay ( other : Collider ) {

	switch ( direction ) {

		case "Forward":
			if ( isRunning == true && isPaused == false )
			other.gameObject.transform.Translate(Vector3.down * Time.deltaTime * velocity);
			break;

		case "Backwards":
			if ( isRunning == true && isPaused == false )
			other.gameObject.transform.Translate(Vector3.up * Time.deltaTime * velocity);
			break;

		case "Left":
			if ( isRunning == true && isPaused == false )
			other.gameObject.transform.Translate(Vector3.left * Time.deltaTime * velocity);
			break;

		case "Right":
			if ( isRunning == true && isPaused == false )
			other.gameObject.transform.Translate(Vector3.right * Time.deltaTime * velocity);
			break;

	}

}