function weatherForecast(){
    var input=document.getElementById("input").value;
    var url="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=2680b46a226655a1a26250399825880e";
    //let wData=fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=1eb020304c271ca87eb6279c2372f4f0");
    let wData=fetch(url);
    wData.then((rwData)=>{
        rwData.json().then((data)=>{
            let {main:{temp,temp_min,temp_max}}=data;
            document.getElementById("result").innerHTML+=temp+"<br>"+temp_min+"<br>"+temp_max;
            console.log(temp,temp_min,temp_max);
            // document.getElementById("result").innerText=data.main.temp+" "+data.main.temp_max+" "+data.main.temp_min;
        });
    })
}