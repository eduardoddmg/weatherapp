const btn = document.querySelector('.btn')
var input = document.querySelector('.input-search')
var text_temp = document.querySelector('.text-temp')
var title_temp = document.querySelector('.city-temp')
var div_img = document.querySelector('.img-clima')
var img = document.createElement('img')
img.classList.add('img-weather')
div_img.appendChild(img)

let resposta;

document.addEventListener('keypress', function (e)
{
  if (e.key == "Enter")
  {
    btn.click()
  }
})

btn.addEventListener('click', async () =>
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value.toLowerCase() + '&appid=7f18b9d0d153a29e9a70f8f2023abde8').then(function(response) {
      return response.json();
    }).then(function(data) {
      resposta = (data);
      img.src = "http://openweathermap.org/img/wn/"+ data["weather"][0]["icon"] + "@2x.png"
      text_temp.innerHTML = (data["main"]["temp"] - 273).toFixed(0) + "ºC"
      text_temp.style.display = "block"
      title_temp.innerHTML = input.value   
      title_temp.style.display = "block"
  });
})