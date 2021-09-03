function enes(){
    const dizi = document.getElementById('satir').textContent.split(" ");
    var sayi = -1;
	document.body.onkeyup = function(e){
		if(e.keyCode == 32){
		    let enes = ++sayi;
		    document.getElementById('yaziyaz').value = dizi[enes]; 
		}
	}
}
enes();
