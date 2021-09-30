
async function foo(){
    let countryname=document.getElementById('country').value;
    let covidDetails=await fetch(`https://api.covid19api.com/dayone/country/${countryname}`)
    let covidData= await covidDetails.json();
     for(let i in covidData){
         var div=document.createElement('div')
         div.innerHTML=`
         Date:${covidData[i].Date},
         Confirmed Cases:${covidData[i].Confirmed},
         Deaths:${covidData[i].Deaths},
         Recovered Cases:${covidData[i].Recovered},
         `
         document.body.append(div)
        console.log(`
        Date:${covidData[i].Date},
        Confirmed Cases:${covidData[i].Confirmed},
        Deaths:${covidData[i].Deaths},
        Recovered Cases:${covidData[i].Recovered},
        `)
        
}
}
