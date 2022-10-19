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
The default language of this HUD are Chinese Traditional(Hong Kong), you can easily change the language in the ```ui.html``` 

```    
<body>
  <p id="time">現正時間為: <span id="datetime"></span></p>
  <!--"現正時間為:" = "now time is", translate this to your language-->                                                   
</body>
```
```現正時間為``` in the second line means ```Current time is``` in Cantonese, you can easily change this to you language.

## Example:
```    
<body>
  <p id="time">Current time is: <span id="datetime"></span></p>
  <!--"現正時間為:" = "now time is", translate this to your language-->                                                   
</body>
```
# Thanks to 
[Scorpion01](https://forum.cfx.re/u/Scorpion01) for helping me to improve the HUD, which makes the HUD a lot better❤️
