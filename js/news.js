function showAlert(){
    var x = document.getElementsByClassName("alertMsg");
    var y = document.getElementsByClassName("tinp");
    r = confirm("Are you sure you want to do this??")
    if (r == true) {
        x[0].style.display = 'inline';
        setTimeout(function(){ x[0].style.display='none'; }, 5000)
        for(i = 0 ; i < y.length ; i++){
            y[i].value = '';
        }
    }
}