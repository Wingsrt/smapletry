
       async function fet(url){


       let res= await fetch(url);


       let data =await res.json();    
       return data
       }


       

    
   function wow(c,box){
        box.innerHTML = "";
       c.forEach(element => {
          // console.log(element.strMeal)
           var label=document.createElement('label')
           label.innerText=element.strMeal
           box.append(label)
           
       });

      

   }


       export {fet,wow};