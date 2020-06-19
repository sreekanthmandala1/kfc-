function BillSummary(){
  var txtName=document.getElementById("txtName");
  var txtMobile=document.getElementById("txtMobile");

  var optBurger=document.getElementById("optBurger");
  var optRoller=document.getElementById("optRoller");

  var customerName=txtName.value;
  var mobileNumber=txtMobile.Value;
  var mealName="";
  var adonName="";
  var mealCost= 0;
  var adonCost= 0;
  var total=0;

  if(optBurger.checked) {
    mealName= optBurger.value;
    mealCost= 150;
} 

  if(optRoller.checked){
    mealName=optRoller.value;
    mealCost=120;
  }
  if(optcocacola.checked){
    adonName+=optcocacola.value+"<br>";
    adonCost=60;
    mealCost=mealCost+adonCost;
  }
  if(optpepsi.checked){
    adonName+=optpepsi.value+"<br>";
    adonCost=40;
    mealCost=mealCost+adonCost;
  }
  if(optkfcdrink.checked){
    adonName+=optkfcdrink.value+"<br>";
    adonCost=120;
    mealCost=mealCost+adonCost;
  }
  total=mealCost;
  document.getElementById("lblName").innerHTML=customerName;
            document.getElementById("lblMobile").innerHTML = mobileNumber;
            document.getElementById("lblMeal").innerHTML = mealName;
            document.getElementById("lblAdOn").innerHTML = adonName;
            document.getElementById("lblTotal").innerHTML = "&#8377;" + total;
}