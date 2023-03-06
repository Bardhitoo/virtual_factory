#pragma strict

public var degrees : int = 180;
public var axis : String = "X";

function Update () {
	
	if ( GetComponent.<ConveyorBeltScript>().isRunning == true && GetComponent.<ConveyorBeltScript>().isPaused == false ) {

		switch ( axis ) {

			case "X":
				transform.Rotate(Time.deltaTime * degrees, 0, 0);
				break;

			case "Z":
				transform.Rotate(0, 0, Time.deltaTime * degrees);
				break;

		}

	}

}
