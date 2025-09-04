let input=document.getElementById('in')

let buttons = document.querySelectorAll('button');

let string= " "; // jisme ham apna result store karenge
 let arr =Array.from(buttons); // all button ka array bna lenge
 arr.forEach(button => { // for each loop chalayenge for array
    button.addEventListener('click', (e) =>{ //  jab bhi koi button par click krega to kya perform krega 
                                        // jab bhi hu button par click krenge to "e" pass hoga
                                        
        if(e.target.innerHTML == '='){ // agar equal to eval function chala denge
            string =eval(string) //eval maens evaluate string ko mathemetically convert karta hai
            input.value=string;
        }
        else if(e.target.innerHTML== "AC"){
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML=="DEL"){
            string = string.substring(0, string.length-1)
            input.value = string;
        }
            
        else{
            string+=e.target.innerHTML;
            input.value = string;
        }

        
    
    })
 })
