
function ABC()
{
    var city=document.getElementById("city_name").value;
    let url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2680b46a226655a1a26250399825880e";
    let wData=fetch(url);
    wData.then((rwData)=>{
        rwData.json().then((data)=>
        {
            let{main:{temp,temp_min,temp_max}}=data;
            console.log(temp,temp_max,temp_min)
            let str="<h3>Avg_Temp : "+temp+"<br>Max_Temp : "+temp_max+"<br>Min_Temp : "+temp_min+"<h3>";
            document.getElementById("print").innerHTML=str;
        })  
    })
   ABC1();
}
function ABC1()
{
    var city=document.getElementById("city_name").value;
    let url="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=2680b46a226655a1a26250399825880e";
    let wData=fetch(url);
    wData.then((rwData)=>{
        rwData.json().then((data)=>
        {
            let weatherArr=data.list;
            // document.getElementById("result").innerHTML+="Country Name: "+d.main.country+"<br>";
            var we=[]; 
            var dt=[];
            for(var i=0;i<weatherArr.length;i+=8){
                //console.log(weatherArr[i].main.temp);
               
                we.push(weatherArr[i].main.temp);
                // console.log(weatherArr[i].dt_txt);
                dt.push(weatherArr[i].dt_txt.substring(0,11));
            }
            document.getElementById("print1").innerHTML="<h3>"+data.city.country+"</h3>";
            const ctx = document.getElementById('myChart');
            // let color=
            new Chart(ctx, {
              type: 'bar',
              data: {
                labels: dt,
                datasets: [{
                  label: '# of Votes',
                  data: we,
                  borderWidth: 1,
                  backgroundColor:["red","green","blue","pink","yellow"]
                }]
              },
              options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }
            });
        })
    })

}