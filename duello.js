function duello(){
    const dizi = document.getElementById('yazilacak-metin').textContent.split(" ");
    var sayi = -1;
	document.body.onkeyup = function(e){
		if(e.keyCode == 32){
		    let index = ++sayi;
		    document.getElementById('yazilan-metin').value = dizi[index]; 
		}
	}
}
duello();
