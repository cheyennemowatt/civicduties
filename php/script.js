let selectMenu = document.querySelector("#politicians");
let category = document.querySelector(".right h2");
let container = document.querySelector(".politician-wrapper");
 
selectMenu.addEventListener("change", function(){
   let categoryName = this.value;
   category.innerHTML = this[this.selectedIndex].text;  
 
   let http = new XMLHttpRequest();
 
   http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        let response = JSON.parse(this.responseText);
        let out = "";
        for(let item of response){
            out += `
                <div class="politician">
                    <div class="left">
                    <img src="${item.image}" alt="">
                    </div>
                    <div class="right">
                    <p class="name">${item.name}</p>
                    <p class="email>${item.email}€</p>
                    <p class="description">${item.description}</p>
                    </div>
                </div>
            `;
        }
        container.innerHTML = out;
        };
    }
   http.open('POST', "script.php", true);
   http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
   http.send("category="+categoryName);
});
