const API_key = 'e825e308780a7c4e1e4c49278958f4572';
var city = ''
let mostrartemp= document.getElementById('temp');
let mostrarhumedad= document.getElementById('humedad');
let mostrarname = document.getElementById('name');
let mostrarweather= document.getElementById('weather')
let mostrarwind= document.getElementById('wind')

function cambiarfondo(){
    document.body.style.backgroundImage= "url('https://cdn.pixabay.com/photo/2018/04/05/23/30/sky-3294543_1280.jpg')"
    document.getElementById('city').style.display = 'none';
    document.getElementById('submit').style.display='none';
};

function fondocalido(){
    document.body.style.backgroundImage= "url('https://conpacto.com.ar/wp-content/uploads/2021/02/sol-cielo-azul-calido-destello-lente-solar-cielos-despejados-dia-soleado-rayos-luz-solar-ilustracion_102902-1349.jpg')"
    document.getElementById('city').style.display = 'none';
    document.getElementById('submit').style.display='none';
};

function buscar(){
    document.getElementById('buscar').innerHTML = `<input type="text" id="nuevobuscar" class="nuevobuscar" placeholder="Hacer otra busqueda">`
    let texto= document.getElementById("nuevobuscar")
    texto.addEventListener('keyup', function(event){
        if (event.code === 'Enter'){
            console.log(document.getElementById('nuevobuscar').value)
            var city = document.getElementById('nuevobuscar').value
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=825e308780a7c4e1e4c49278958f4572')
  .then(response => response.json())
  .then(data => {
console.log(data)
let humedad = Math.round(data.main.humidity)
let temperatura = Math.round(data.main.temp-273.15)
let wind = Math.round((data.wind.speed)*3.8)
let name = [data.name]
let country = [data.sys.country]
let weather= [data.weather[0].description]
mostrartemp.innerHTML= `<h1>Temperatura Actual ${temperatura}C</h1>`
mostrarhumedad.innerHTML=`<li> Humedad: ${humedad}%</li>`
mostrarname.innerHTML=`<h1>${name},${country}</h1>`
mostrarweather.innerHTML=`<li>${weather}</li><img src='https://cdn.pixabay.com/photo/2012/05/07/02/11/cloud-47582_640.png'>`
mostrarwind.innerHTML=`<li>Viento: ${wind} km/h</li><img src='https://cdn.pixabay.com/photo/2012/05/04/09/07/tornado-46793_640.png'`

if (temperatura<25){
    cambiarfondo()
    buscar()
}
else{
    fondocalido()
    buscar()
}

});
}
            
            
        }
    )}








function getcity(){
    var city= document.getElementById("city").value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=825e308780a7c4e1e4c49278958f4572')
  .then(response => response.json())
  .then(data => {
console.log(data)
let humedad = Math.round(data.main.humidity)
let temperatura = Math.round(data.main.temp-273.15)
let wind = Math.round((data.wind.speed)*3.8)
let name = [data.name]
let country = [data.sys.country]
let weather= [data.weather[0].description]
mostrartemp.innerHTML= `<h1>Temperatura Actual ${temperatura}C</h1>`
mostrarhumedad.innerHTML=`<li> Humedad: ${humedad}%</li>`
mostrarname.innerHTML=`<h1>${name},${country}</h1>`
mostrarweather.innerHTML=`<li>${weather}</li><img src='https://cdn.pixabay.com/photo/2012/05/07/02/11/cloud-47582_640.png'>`
mostrarwind.innerHTML=`<li>Viento: ${wind} km/h</li><img src='https://cdn.pixabay.com/photo/2012/05/04/09/07/tornado-46793_640.png'`

if (temperatura<25){
    cambiarfondo()
    buscar()
}
else{
    fondocalido()
    buscar()
}

});
}










