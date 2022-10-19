# rockjai_time_hud
* FiveM HUD - show the actual time in life
* No any dependencies files or framework
* Can be use for any framework in FiveM
# Features
* Show the actual time in life
* Changeable time zone and format of the time(Instruction below)
# Installction
1. Extract the file
2. Drop it into you resouces file
3. Add ``ensure rockjai_time_hud`` in your ``server.cfg`` or ``resouces.cfg`` or whatever you call it
# Dependencies
* **No dependencies are required for this hud** 
# Settings
You can change the time zone, language and format of the time in this hud easily.
* You can look up the ```timezone_and_format_list``` to check what format and time zone is avaliable 
***
Change the for format in this code: script.js

* ``` function setDatetime(){
  function setDatetime(){
	if(isOpen == true){
		document.getElementById("datetime").innerHTML = new Date().toLocaleString("zh-hk", { timeZone: "Asia/Hong_Kong" });
		setTimeout(setDatetime, 500);
	}
  }
  ```
  
  Change the ```zh-hk``` and ```Asia/Hong_Kong``` to your one in the ```timezone_and_format_list``` 
# Language of the HUD


