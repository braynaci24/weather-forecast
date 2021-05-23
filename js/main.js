/* $(document).ready(function(){
  var tarih = new Date();
  var aylar = ['OCK','SBT', 'MRT', 'NSN', 'MYS', 'HZR', 'TMZ', 'AĞS', 'EYL', 'EKM', 'KSM', 'ARLK']
  var city = 'Paris'
  $('.searched-city').keydown(function(e){
    if (e.key == 'Enter'){
      city = $(this).val();
      getWeatherData(city);
    }
  })

  function getWeatherData(cityname){
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&lang=tr&appid=c6fbcef60aef10c84cef90ea86309961"
      $.get(url, function(data) {
        $('.city-name .name').text(data.name);
        $('.city-name .name-2').text(data.sys.country);
        $('.information-degree .number').text(parseInt(data.main.temp_min));
        $('.information-degree .status').text(data.weather[0].description);
        $('.history .history-number ').text(tarih.getDate());
        $('.history .month').text(aylar[tarih.getMonth()])
        $('.weather-icon').html('<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">');
      }).fail(function(){
        alert('Bulunamadı')
      });
  }
}) */
$(document).ready(function () {
    let history = new Date();
    let month = ['OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN', 'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'];
    $('.searched-city').keydown(function (e) {
        if (e.key == 'Enter') {
            city = $(this).val()
            getWeatherData(city)
            $(this).val("")
        }
    })

    function getWeatherData(cityname) {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=metric&lang=tr&appid=c6fbcef60aef10c84cef90ea86309961"
        $.get(url, function (data) {
            $('.city-name').text(data.name.toUpperCase());
            $('.degree-value').text(parseInt(data.main.temp_min));
            $('.degree-value-name').text(data.weather[0].description);
            $('.history').text(history.getDate());
            $('.month').text(month[history.getMonth()]);
            $('.status-icon').html('<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">');
            if ($('.degree-value') == 1) {
                console.log(123213)
            }
        }).fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'DİKKAT',
                text: 'LÜTFEN BİR ŞEHİR İSMİ GİRİNİZ20',
            })
        });
    }

})