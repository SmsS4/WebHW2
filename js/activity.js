function swap(id){
    let first = document.getElementById(id).children[0].src;
    let second = document.getElementById(id).children[1].children[0].src;
    document.getElementById(id).children[0].src = second;
    document.getElementById(id).children[1].children[0].src = first;
}


function rearrange(id) {
    div = document.getElementById(id);
    elements = div.children;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == "activity__images"){
            images = elements[i]
        }else{
            desc = elements[i]
        }
    }
    for (var i = 0; i < elements.length; i++)
        div.removeChild(div.children[0]);    
    more = desc.children[2]
    desc.removeChild(desc.children[2])
    div.appendChild(desc)
    div.appendChild(images)
    div.appendChild(more)
}


function rearrangeAll(){
    if (window.matchMedia("(max-width: 600px)").matches){
        rows = document.getElementsByClassName('activity__row')
        for(j=0; j < rows.length; j++)
           rearrange(rows[j].id);
    }
}

