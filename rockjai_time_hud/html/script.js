var isOpen = false

window.addEventListener('message', (event) => {
	var item = event.data;
	if (item.showUI === true) {
		isOpen = true;
		setDatetime();
		$('#time').show();
	} else {
		isOpen = false;
		$('#time').hide();
	}
});

function setDatetime(){
	if(isOpen == true){
		document.getElementById("datetime").innerHTML = new Date().toLocaleString("zh-hk", { timeZone: "Asia/Hong_Kong" });
	                                                                      /*change these to your local format and time zone*/
		setTimeout(setDatetime, 500);
	}
}