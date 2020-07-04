function validasi() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;



    if (nama != "" && email!="" && password !="") {
        alert("berhasil");
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

// function myFunction() {
//     var 
//     var x = document.getElementById("mySelect").options.length;
//     document.getElementById("demo").innerHTML = "Found " + x + " options in the list.";
// }

var verify = confrm('are you sure?');
 if(verify===true){
     alert('press button sure');
 }else{
     alert('press button cancel');
 }