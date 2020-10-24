function$(id);{​​​​​​​​
returndocument.getElementById(id);
}​​​​​​​​
 
function$hide(id);{​​​​​​​​
$(id).style.display="none"; 
}​​​​​​​​
function$show(id);{​​​​​​​​
$(id).style.display="inline-block";
}​​​​​​​​
function$mapEvent(classname, callbackFn);{​​​​​​​​
let allElements=document.getElementsByClassName(classname);
for(leti=0; i<allElements.length; i++){​​​​​​​​
allElements[i].onclick=callbackFn;
    }​​​​​​​​
}​​​​​​​​

