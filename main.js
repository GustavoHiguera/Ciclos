class App{

    cicleE(limit){
        let result=1;
        for(let i=1; i<=limit; i++){
        result += (1/this.factorial(i));
        }
        return result;
    }

    factorial(n){
        let total=1;
        for(let i=1; i<=n; i++){
            total *= i;
        }
        return total;
    }

    cicleS(limit){
        let total=4;
        let i=3;
        let counter=1;
        while(i<=limit){
            if(counter%2===0){
                total += (4/i);
                i += 2;
                counter++;
            } else{
                total -= (4/i);
                i += 2;
                counter++;
            }
        }
        return total;
    }
}

let app=new App();

console.log(app.cicleE(3));
console.log(app.cicleS(9));