#pragma strict

public var buttonMode : String;
public var particleObject : ParticleSystem;
public var particleObject2 : ParticleSystem;
public var particleObject3 : ParticleSystem;


 function OnMouseOver () {

    if ( Input.GetMouseButtonDown(0) ) {

       switch ( buttonMode ) {

       		case "Starting":

                Starting();
       			break;

       		case "Stopping":

                Stopping();
       			break;
       }

    }

 }

 function Starting () {

    if ( GetComponent.<ConveyorBeltScript>().isRunning == false ) {

        GetComponent.<ConveyorBeltScript>().isRunning = true;

        if ( ( particleObject.isPaused && particleObject2.isPaused && particleObject3.isPaused ) && GetComponent.<ConveyorBeltScript>().isPaused == true ) {
            particleObject.Play();
            particleObject2.Play();
            particleObject3.Play();
        }
    }
 }

 function Stopping () 
 {
    if ( GetComponent.<ConveyorBeltScript>().isRunning == true ) 
	{
        GetComponent.<ConveyorBeltScript>().isRunning = false;
        if ( ( particleObject.isEmitting && particleObject2.isEmitting && particleObject3.isEmitting )|| ( particleObject.isPlaying && particleObject2.isPlaying && particleObject3.isPlaying ) ) 
		{
        	particleObject.Pause();
        	particleObject2.Pause();
        	particleObject3.Pause();
            particleObject.Clear();
            particleObject2.Clear();
            particleObject3.Clear();
        }
    }
 }