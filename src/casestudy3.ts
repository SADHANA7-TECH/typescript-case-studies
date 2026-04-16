let city : string = "South Korea";
let temperature : number =35;
let israining  = true;

function weatherReport(city: string, temperature:number, israining: boolean){
    console.log("In "+city+ ", it is "+temperature+ "°C.Is it raining? " +israining);
}
weatherReport(city, temperature, israining);
export {};