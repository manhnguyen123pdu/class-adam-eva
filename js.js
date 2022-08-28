class apple{
    weight;
    constructor(){
        this.weight=10;
    }
    getWeight(){
        return this.weight;
    }
    decrese(){
        this.weight--;
    }
    isEmpty(){
        if(this.weight==0){
            return true;
        }
    }

}


class human{
    name;
    gender;
    weight;
    speak;
    constructor(name,gender,weight,speak){
        this.name=name;
        this.gender=gender;
        this.weight=weight;
        this.speak=speak;
    }
    isMale(){
        if(this.gender=='male'){
            return true;
        }
        else{
            return false
        }
    }
    chekApple(apple){
        if(apple.weight>0){
            return true
        }
        else{
            return false;
        }
    }
    eat(apple){
        if(apple.weight>0){
            apple.weight--;//kl tao
            this.weight++; //kl người
        }
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight
    }
    setWeight(newWeight){
        this.weight=newWeight
    }

}

let apple1=new apple;
let adam = new human('adam','male','70','hello')
let eva = new human('eva','female','50','hi')