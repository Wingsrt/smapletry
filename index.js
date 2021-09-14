


function navbar(){

return` <nav id="nav"  >
<ul>
    <input type="text" id="bo">
    <button id="box">submit</button>
    <li><a href="today_menu.html">TODAYS MENU</a></li>
    <li><a href="latest_receipe.html">about</a></li>
</ul>

</nav>
<div id="ape"></div>




`


}



function show(a){

    return` <nav id="nav"  >
    <ul>
        <input type="text" id="bo">
        <button id="box">submit</button>
        <li><a href="today_menu.html">TODAYS MENU</a></li>
        <li><a href="latest_receipe.html">about</a></li>
    </ul>
    
    </nav>
    <div id="ape"></div>
    <div id="cont"></div>
    
    `


}


async function search(a){

    let res = await fetch(`http://www.omdbapi.com/?s=${a}&apikey=c84b0dd3`)
    
    let data= await res.json()
    console.log(data);
    
    
    }
export {show,navbar,search}

 








