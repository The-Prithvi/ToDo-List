function getAndUpdate(){
    task = document.getElementById('inpp').value;   
    if(localStorage.getItem('itemJson') == null){
        itemJsonArr = [];
        itemJsonArr.push([task]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArr));
    }
    else{
        itemJsonStr = localStorage.getItem('itemJson')
        itemJsonArr = JSON.parse(itemJsonStr);
        itemJsonArr.push([task]);
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArr));
    }
    document.getElementById('inpp').value = "";   
    update();
}


function update(){
    if(localStorage.getItem('itemJson') == null){
        itemJsonArr = [];
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArr));
    }
    else{
        itemJsonStr = localStorage.getItem('itemJson')
        itemJsonArr = JSON.parse(itemJsonStr);
    }
    let li = document.getElementById("hoja"); 
    let str = "";  
    itemJsonArr.forEach((element, index) => {
        str += `<li>${index + 1}. ${element[0]}<span class="remove"><a onclick = "del(${index})" href="">Remove</a></span></li>`      
    });
    li.innerHTML = str;
}
update();
document.getElementById("addbtn").addEventListener("click", getAndUpdate);

function del(indexy){
        itemJsonStr = localStorage.getItem('itemJson')
        itemJsonArr = JSON.parse(itemJsonStr);
        itemJsonArr.splice(indexy, 1)
        localStorage.setItem('itemJson', JSON.stringify(itemJsonArr));
        update();
}