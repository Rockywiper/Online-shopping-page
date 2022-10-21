var customerlist=[
    {
        cid:0,
        name:"Prasanth",
        CART:[]
    },
    {
        cid:1,
        name:"Sriram",
        CART:[]
    }
];

var list=[
    {
        id:1,
        name:"Redmi 10 Prime",
        desc:"Phantom Black 4GB RAM 64GB | Helio G88 with extendable RAM Upto 2GB | FHD+ 90Hz Adaptive Sync Display",
        price:"10,999",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/mi.avif"
    },
    {
        id:2,
        name:"Huawei P50 Pro",
        desc:"4G Black | 8GB RAM | 256GB Storage",
        price:"74,000",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/huawei.jfif"
    },
    {
        id:3,
        name:"OnePlus 10 Pro",
        desc:" 5G Volcanic Black | 8GB RAM | 128GB Storage",
        price:"61,000",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/one plus.jfif"
    },
    {
        id:4,
        name:"Samsung Galaxy M33",
        desc:"5G Mystique Green, 6GB, 128GB Storage | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
        price:"15,499",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/samsung.jpg"
    },
    {
        id:5,
        name:"Vivo V23 Pro3",
        desc:" 5G Sunshine Gold | 8GB RAM | 128GB Storage",
        price:"37,990",
        src:"C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/vivo.png"
    }


];
var curid=1;

// var name="Redmi 10 Prime";
// var desc="Phantom Black 4GB RAM 64GB | Helio G88 with extendable RAM Upto 2GB | FHD+ 90Hz Adaptive Sync Display";
// var price="10,999";
// var src="C:/Users/91938/Desktop/visual studio html/Online shopping/Resources/Phones/mi.avif";

// do{
//     const myobject=JSON.stringify(customerlist);
//     localStorage.setItem("customerlist", myobject);
// }
// while(false);


var parent1=document.getElementById("parent");
var card=[];
var box=[];
var textbox=[];
var cart=[];
var btn=[];

var n=list.length;

function disp()
{
    document.getElementById("parent").innerHTML = "";
for (var j=0;j<n;j++)
{
    
    card[j]=document.createElement("div");
    card[j].classList.add("card");
    parent1.appendChild(card[j]);

    box[j]=document.createElement("div");
    box[j].setAttribute("id","img"+j);
    box[j].classList.add("box");
    card[j].appendChild(box[j]);

    var p=document.getElementById("img"+j);
    var i=document.createElement("img");
    i.src=list[j].src;
    i.alt=list[j].name;
    p.appendChild(i);

    textbox[j]=document.createElement("div");
    textbox[j].classList.add("boxtext");
    card[j].appendChild(textbox[j]);

    var br1=document.createElement("br");
    textbox[j].appendChild(br1);

    var head1=document.createElement("h1");
    head1.setAttribute("id","name"+j);
    textbox[j].appendChild(head1);
    document.getElementById("name"+j).innerHTML=list[j].name;

    var br2=document.createElement("br");
    textbox[j].appendChild(br2);

    var head2=document.createElement("h2");
    head2.setAttribute("id","desc"+j);
    textbox[j].appendChild(head2);
    document.getElementById("desc"+j).innerHTML=list[j].desc;

    var br3=document.createElement("br");
    textbox[j].appendChild(br3);
    textbox[j].appendChild(br3);

    var head3=document.createElement("h2");
    head3.setAttribute("id","price"+j);
    textbox[j].appendChild(head3);
    document.getElementById("price"+j).innerHTML=list[j].price;
    // alert("hi bro its working");

    cart[j]=document.createElement("div");
    cart[j].classList.add("cart");
    textbox[j].appendChild(cart[j]);
    // alert("hi bro its working");

    btn[j]=document.createElement("button");
    btn[j].classList.add("cart");
    btn[j].innerHTML="Add cart";
    btn[j].setAttribute("id", "btn"+j);
    btn[j].setAttribute("onclick", "added("+j+")");
    cart[j].appendChild(btn[j]);
  console.log(j);  

}
}

function added(a)
{
    var k=0;
    
    var l=customerlist.length;
    for(k=0;k<l;k++)
    {
        if(customerlist[k].cid==curid)
        {
            customerlist[k].CART.push(a);
            console.log(customerlist[k].CART);
            break;
        }
    }
    const myobject=JSON.stringify(customerlist);
    localStorage.setItem("customerlist", myobject);
alert(list[a].name+" is added to cart");

}

