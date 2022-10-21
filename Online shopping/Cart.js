var list=[
    {
        id:0,
        name:"Redmi 10 Prime",
        desc:"Phantom Black 4GB RAM 64GB | Helio G88 with extendable RAM Upto 2GB | FHD+ 90Hz Adaptive Sync Display",
        price:"10,999",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/mi.avif"
    },
    {
        id:1,
        name:"Huawei P50 Pro",
        desc:"4G Black | 8GB RAM | 256GB Storage",
        price:"74,000",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/huawei.jfif"
    },
    {
        id:2,
        name:"OnePlus 10 Pro",
        desc:" 5G Volcanic Black | 8GB RAM | 128GB Storage",
        price:"61,000",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/one plus.jfif"
    },
    {
        id:3,
        name:"Samsung Galaxy M33",
        desc:"5G Mystique Green, 6GB, 128GB Storage | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
        price:"15,499",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/samsung.jpg"
    },
    {
        id:4,
        name:"Vivo V23 Pro3",
        desc:" 5G Sunshine Gold | 8GB RAM | 128GB Storage",
        price:"37,990",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/vivo.png"
    }
];


const cuslist=localStorage.getItem("customerlist");
const customerlist=JSON.parse(cuslist);
console.log(customerlist);

var n=list.length;
var curid=1;
var l=customerlist[curid].CART.length;

var parent1=document.getElementById("parent");
var card=[];
var box=[];
var textbox=[];
var cart=[];
var btn=[];

var x=0;

function showcart()
{
    for(var m=0;m<l;m++)
    {
        for(var k=0;k<n;k++)
        {
            if(customerlist[curid].CART[m]==list[k].id)
            {
                x=list[k].id;
                card[x]=document.createElement("div");
                card[x].classList.add("card");
                parent1.appendChild(card[x]);

                box[x]=document.createElement("div");
                box[x].setAttribute("id","img"+x);
                box[x].classList.add("box");
                card[x].appendChild(box[x]);

                var p=document.getElementById("img"+x);
                var i=document.createElement("img");
                i.src=list[x].src;
                i.alt=list[x].name;
                p.appendChild(i);

                textbox[x]=document.createElement("div");
                textbox[x].classList.add("boxtext");
                card[x].appendChild(textbox[x]);

                var br1=document.createElement("br");
                textbox[x].appendChild(br1);

                var head1=document.createElement("h1");
                head1.setAttribute("id","name"+x);
                textbox[x].appendChild(head1);
                document.getElementById("name"+x).innerHTML=list[x].name;

                var br2=document.createElement("br");
                textbox[x].appendChild(br2);

                var head2=document.createElement("h2");
                head2.setAttribute("id","desc"+x);
                textbox[x].appendChild(head2);
                document.getElementById("desc"+x).innerHTML=list[x].desc;

                var br3=document.createElement("br");
                textbox[x].appendChild(br3);
                textbox[x].appendChild(br3);

                var head3=document.createElement("h2");
                head3.setAttribute("id","price"+x);
                textbox[x].appendChild(head3);
                document.getElementById("price"+x).innerHTML=list[x].price;
                // alert("hi bro its working");

                cart[x]=document.createElement("div");
                cart[x].classList.add("cart");
                textbox[x].appendChild(cart[x]);
                // alert("hi bro its working");

                // btn[j]=document.createElement("button");
                // btn[j].classList.add("cart");
                // btn[j].innerHTML="Add cart";
                // btn[j].setAttribute("id", "btn"+j);
                // btn[j].setAttribute("onclick", "added("+j+")");
                // cart[j].appendChild(btn[j]);
                console.log(x);  
            }
        }
    }
    // console.log(customerlist[curid].CART);
    // var parent1=document.getElementById("parent");
    // alert("Its working"+curid);
    // alert(customerlist);
    // console.log(customerlist);
    // alert(customerlist[curid]);
    // alert(customerlist[curid].CART);
    // var alength=customerlist[curid-1].CART.length;
    // alert("alength"+alength);
    // for(var z=0;z<alength;z++)
    // {
    //     for(var x=0;x<n;x++)
    //     {
    //         if(customerlist[curid-1].CART[z]==list[x].id)
    //         {
    //             alert("entering if");
    //             card[x]=document.createElement("div");
    //             card[x].classList.add("card");
    //             parent1.appendChild(card[x]);

    //             box[x]=document.createElement("div");
    //             box[x].setAttribute("id","img"+x);
    //             box[x].classList.add("box");
    //             card[x].appendChild(box[x]);

    //             var p=document.getElementById("img"+x);
    //             var i=document.createElement("img");
    //             i.src=list[x].src;
    //             i.alt=list[x].name;
    //             p.appendChild(i);

    //             textbox[x]=document.createElement("div");
    //             textbox[x].classList.add("boxtext");
    //             card[x].appendChild(textbox[x]);

    //             var br1=document.createElement("br");
    //             textbox[x].appendChild(br1);

    //             var head1=document.createElement("h1");
    //             head1.setAttribute("id","name"+x);
    //             textbox[x].appendChild(head1);
    //             document.getElementById("name"+x).innerHTML=list[x].name;

    //             var br2=document.createElement("br");
    //             textbox[x].appendChild(br2);

    //             var head2=document.createElement("h2");
    //             head2.setAttribute("id","desc"+x);
    //             textbox[x].appendChild(head2);
    //             document.getElementById("desc"+x).innerHTML=list[x].desc;

    //             var br3=document.createElement("br");
    //             textbox[x].appendChild(br3);
    //             textbox[x].appendChild(br3);

    //             var head3=document.createElement("h2");
    //             head3.setAttribute("id","price"+x);
    //             textbox[x].appendChild(head3);
    //             document.getElementById("price"+x).innerHTML=list[x].price;
    //             // alert("hi bro its working");

    //             cart[x]=document.createElement("div");
    //             cart[x].classList.add("cart");
    //             textbox[x].appendChild(cart[x]);
    //             // alert("hi bro its working");

    //             // btn[j]=document.createElement("button");
    //             // btn[j].classList.add("cart");
    //             // btn[j].innerHTML="Add cart";
    //             // btn[j].setAttribute("id", "btn"+j);
    //             // btn[j].setAttribute("onclick", "added("+j+")");
    //             // cart[j].appendChild(btn[j]);
    //             console.log(x);  
    //             alert("cart is working");
    //         }
    //         else{
    //             alert("cart is empty");
    //         }
    //     }
    // }
}