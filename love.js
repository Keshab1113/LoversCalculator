var name=prompt("What is your name?");
    var time=document.getElementById('time');
    time.innerHTML="Welcome "+ name;
    var result=document.getElementById('result');
    var text=document.getElementById('text');
    var a=Math.random()*100;
    a=Math.floor(a)+1;  
    add = document.getElementById("button");
        add.addEventListener("click", getAndUpdate);
    function getAndUpdate(){
        tit = document.getElementById('own').value;
        desc = document.getElementById('gf').value;
        localStorage.clear();
        time.innerHTML= tit +"&#128151"+ desc;
        result.innerHTML= "Your Love Score Is "+a+"%";
        console.log(a);
        localStorage.clear();
        if (localStorage.getItem('itemsJson')==null){
            itemJsonArray = [];
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
        else{
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([tit, desc]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
        }
    if(a<50){
        text.innerHTML="The chance of a relationship working out between you and your partner is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You will have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it."
    }
    else if(a >= 50){
        text.innerHTML="True love stories never have endings."+ "Love is composed of a single soul inhabiting two bodies."+ "The best thing to hold onto in life is each other." +"You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
    }
    else if(a===100){
        text.innerHTML="Congratulations You Are The Best Couple In The World.  ||  "+"True love is eternal, infinite, and always like itself. It is equal and pure, without violent demonstrations: it is seen with white hairs and is always young in the heart. True love is selfless. It is prepared to sacrifice.";
    }
    a=Math.random()*100;
    a=Math.floor(a)+1;
}
function clearStorage(){
    if (confirm("Do you want to clear the list?")){
    console.log('Clearing the storage')
    localStorage.clear();
    }
    document.getElementById('gf').value = '';
    document.getElementById('own').value = '';
    var name=prompt("What is your name?");
    time.innerHTML="Welcome "+ name;
    result.innerHTML="Please Fill The Input Box.";
    a=Math.random()*100;
    a=Math.floor(a)+1;
}