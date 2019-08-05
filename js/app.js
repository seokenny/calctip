var numberOfPeople = 0;

document.querySelector(".people_key").addEventListener("click",function(){
    if(this.classList.contains("pkey_3")){
        this.classList.add("selected_key");
        numberOfPeople = 3;
        for(var i = 3; i > 3 && i < 11; i++){
            document.querySelector(".pkey_" + i).classList.remove("selected_key");
        }
    }
    else if(this.classList.contains("pkey_4")){
        this.classList.add("selected_key");
        numberOfPeople = 4;
        for(var i = 3; i < 11 && i != 4; i++){
            document.querySelector(".pkey_" + i).classList.remove("selected_key");
        }
    }
});