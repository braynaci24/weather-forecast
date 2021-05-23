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
            
        }).fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'DİKKAT',
                text: 'LÜTFEN BİR ŞEHİR İSMİ GİRİNİZ',
            })
        });
    }

})