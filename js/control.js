var list=new Array();
var i=0;
function doList(){ 
    var item=document.getElementById("items").value;
    list[i++]=item;
    document.getElementById("items").value="";
    var ols=document.getElementById("newList");
    var newLi=document.createElement("li");
    newLi.textContent=item ;
    ols.appendChild(newLi);   
}
var x=0;
function save(){
    var ols=document.getElementById("newList");
     ols.innerHTML="";
     var saveOl=document.createElement("ol");
     var parent=document.getElementById("display");
     parent.appendChild(saveOl);
     var listName=document.getElementById("listName").value;
     x++;
     saveOl.insertAdjacentHTML("beforebegin","<span>"+ x +" " + listName+"</span>");
     saveOl.style.backgroundColor="white";
     for(var j=0;j<i;j++){
        var saveLi=document.createElement("li");
        saveLi.textContent=list[j];
        saveOl.appendChild(saveLi);
     }
     i=0;
     document.getElementById("listName").value="";
     
}

function Remove(){
    var index=document.getElementById("remove").value;
    list.splice(index-1,1);
    i--;
    alert("Done, Will remove when you saved a list you can continue now");    
    document.getElementById("remove").value="";
}
