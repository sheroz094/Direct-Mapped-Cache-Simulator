function calcAddress(address)
{
    let index=address%8;
    let tag=Math.floor(address/8);
    console.log("Address: ", address);
    console.log("Index: ", index);
    console.log("Tag: ",tag);
}

calcAddress(24);
calcAddress(32);
calcAddress(40);
