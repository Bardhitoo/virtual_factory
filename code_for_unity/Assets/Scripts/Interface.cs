using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO.Ports;

public class Interface : MonoBehaviour 
{
	SerialPort sp = new SerialPort("COM8",9600);
	
	// Use this for initialization
	void Start () 
	{
		sp.Open();
		sp.ReadTimeout=100; 
	}
	
	// Update is called once per frame
	void Update () 
	{
		if(sp.IsOpen)
		{
			try
			{
				Button(sp.ReadByte());
				Debug.Log(sp.ReadByte());
			}
			catch(System.Exception)
			{

			}

		}
	}

	public void Button(int nisja)
	{
		if(nisja == 1)
		{
			GameObject.Find("/sd/Button/Button1").GetComponent<ButtonScript>().Starting();
		} else
        if (nisja == 0 || nisja == 2 )
        {
            GameObject.Find("/sd/Button/Button2").GetComponent<ButtonScript>().Stopping();
        }
    }
}
