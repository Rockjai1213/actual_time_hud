# Note
If you would like to add this HUD in your project, feel free to do so, remember to add the credit to me.

# rockjai_time_hud
* FiveM HUD - show the actual time in life
* No any dependencies files or framework
* Can be use for any framework in FiveM
* My first project for FiveM

# Preview
![image](https://user-images.githubusercontent.com/104734341/196799793-13ccb715-70e7-4c60-ad14-cf64a2308033.png)

![image](https://user-images.githubusercontent.com/104734341/196800318-44481e21-b32e-47ce-ab0f-0ce8569f23f0.png)



# Features
* Show the actual time in life
* Changeable time zone and format of the time ([Setting](https://github.com/Rockjai1213/rockjai_time_hud/edit/main/README.md#settings), [Language of the HUD](https://github.com/Rockjai1213/rockjai_time_hud/edit/main/README.md#language-of-the-hud))
* The HUD will be hide when the pause menu is showing
# Installction
1. Extract the file
2. Rename it to ```rockjai_time_hud```
3. Drop it into you resouces file
4. Add ``ensure rockjai_time_hud`` in your ``server.cfg`` or ``resouces.cfg`` or whatever you call it
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


