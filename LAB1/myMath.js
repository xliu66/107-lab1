module.exports = {
    funMath: function(){
        console.log("This is math module");
    },
    sum: function(num1,num2){
        return num1 + num2;
    },
    greater: function(num1,num2){
        // return the greater (biggest) number
        if (num1>num2)return num1;
        else return num2;
    },
    smaller: function(num1,num2){
        // return the smaller of the two parameters
        if (num1<num2)return num1;
        else return num2;
    },
    division: function(number,by){
        if(by == 0){
            console.log("DO NOT DIVIDE BY 0, PLEASE!");
            return 0;
        }
        else return number / by;

    },

    isEven: function(num){
        var res = num % 2;
        if (res ==0 )return true;
        else return false;
    }
};