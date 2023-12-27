function registerUser(name:string ,birthYear:number){
    const value:boolean =checkAge(birthYear);
    if(value){
        console.log("NAME : ",name);
        console.log("Birthyear : ",birthYear);
        console.log(name,"Successfully Registered !");

    }     
    else{
        console.log("User registeration is failed !")

    }
    function checkAge(birthYear: number):boolean{
        const year=2023;
        const age=year-birthYear;
        return age>=18;
                    
    }
}

registerUser("Nishana",2001)
export{}