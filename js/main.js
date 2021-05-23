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
            $('.save').show();
        }).fail(function () {
            Swal.fire({
                icon: 'error',
                title: 'DİKKAT',
                text: 'LÜTFEN BİR ŞEHİR İSMİ GİRİNİZ',
            })
        });
    }

    $('.save').click(function () {
        let saveInfo = {
            name: $('.city-name').text(),
            degree: $('.degree-value').text(),
            degreeValueName: $('.degree-value-name').text(),
            history: $('.history').text(),
            month: $('.month').text(),
        }
        $('.table').append(`<thead>
        <tr>
          <th class="list-element"> ŞEHİR ADI:  <span class="list-element-style">${saveInfo.name}</span></th>
          <th class="list-element">DERECE:  <span class="list-element-style">${saveInfo.degree}</span></th>
          <th class="list-element"> HAVA DURUMU:  <span class="list-element-style">${saveInfo.degreeValueName}</span></th>
          <th class="list-element"> TARİH: <span class="list-element-style">${ saveInfo.history} ${ saveInfo.month}</span></th>
        </tr>
      </thead>
     `)
    })

})