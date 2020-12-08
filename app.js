async function userList(){

    let url = "users.json";
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;

    for(let i = 0; i < arrayLength; i++){               
       console.log(commits.customers[i].user_name);
    }
}

//userList(); //Cette fonction affiche la liste des utilisateur dans la console

async function userPets(){
    let arrayPets = [];
    let url = "users.json";
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;

    for(let i = 0; i < arrayLength; i++){    
        let arrayPetLength = commits.customers[i].user_pets.length;
        for(let x = 0; x < arrayPetLength; x++){          
            arrayPets.push(commits.customers[i].user_pets[x].pet_name);
        }
    }
    console.log(arrayPets.sort().join(" "));
}

//userPets(); //Cette fonction affiche la liste des animals dans l'ordre alphabétique

async function userWithPets(){
    let url = "users.json";
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;

    for(let i = 0; i < arrayLength; i++){    
        let arrayPetLength = commits.customers[i].user_pets.length;
        if(arrayPetLength >= 1){
            console.log(commits.customers[i].user_name)
        }
    }
}

//userWithPets();  //Cette fonction affiche la des utilisateurs avec au moins un animal

async function addMickey(){
    let url = "users.json";
    let response = await fetch(url);
    let commits = await response.json();
    let arrayLength = commits.customers.length;
    let Mickey = {pet_name: "Mickey", pet_type: "mouse", pet_age: "0,1"};

    for(let i = 0; i < arrayLength; i++){    
        let arrayPetLength = commits.customers[i].user_pets.length; 
        commits.customers[i].user_pets[arrayPetLength] = Mickey;       
        console.log(commits.customers[i].user_pets);    
    }
}

//addMickey(); //Cette fonction ajoute une souris Mickey à chaqun des utilisateurs


var request = new XMLHttpRequest()
request.open('GET', 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5', true)
request.onload = function () {
    var data = JSON.parse(this.response)
    data.forEach((fact) => {
        console.log(fact.text);
    })
}

//request.send()