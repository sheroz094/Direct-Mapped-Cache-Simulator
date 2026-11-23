function calcAddress()
{
    let address=document.getElementById("address").value;
    let index=address%8;
    let tag=Math.floor(address/8);
    if(address=="")
    {
        alert("Address Field is Empty. Please Enter Valid Address.");
        return;
    }
    else if(address<=0 || address>255)
    {
        alert("Invalid Address 🤬 !!! Try Again 😊");
    }
    else
    {
        document.getElementById("index").innerHTML=index;
        document.getElementById("tag").innerHTML=tag;
        document.getElementById("result").innerHTML=address;
    }   
}
