

function display(number) {
    document.getElementById("result").value +=number;
    }


    function Result(){
        try{
            document.getElementById("result").value=eval( document.getElementById("result").value) ;
        }
        catch(err){
            alert("You have entered invalid input, Please enter valid input for calculation")
        }
    }

   
    function clr(){
        document.getElementById("result").value=" ";
    }
    function DE(){
        document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
    }