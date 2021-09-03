function enes(){
    const dizi = document.getElementById('satir').textContent.split(" ");
    var strokeCount = -1;
	document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            let enes = ++strokeCount;
            document.getElementById('yaziyaz').value = dizi[enes]; 
    
        }
	}
}
enes();
