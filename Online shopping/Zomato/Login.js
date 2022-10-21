var customerlist=[
    {
        cid:1,
        name:"prasanth",
        pass:12345
    },
    {
        cid:2,
        name:"sriram",
        pass:67890
    }

];

function login()
{
    var l=customerlist.length-1;
    var cusname=document.getElementById("username").value;
    var cuspass=document.getElementById("password").value;
    flag=0;

    while(l>=0)
    {
        if(flag==0)
        {
            if(customerlist[l].name==cusname)
            {
                if(customerlist[l].pass==cuspass)
                {
                    alert("welcome to Zomato "+cusname);
                    flag=1;
                }  
            }
        }
        
        l--;
    }
    if(flag==0)
    {
        alert("Invalid username or password");
    }

}