let byName = prompt("Lütfen isminizi giriniz")

if( byName.length === 0 ) {
    document.getElementById("myName").innerHTML = `Ziyaretçi`;
} else {
    document.getElementById("myName").innerHTML = `${byName}`;
}

//document.getElementById---Dom içerisinden öğe seçimi yapar.
//innerHTML---öğe içerisine içerik yerleştirir.


function showTime() {

    let now = new Date(); // date---tarih ve saati tutar
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth()+1; //JS ayları 0dan başlattığı için +1 yaptık
    let year = now.getFullYear();
    
    let gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day2 = now.getDay()+1; // JS haftanın ilk gününü Pazar olarak aldığı için +1


    (hour<10) ? document.getElementById("hour").innerText = "0"+hour:
                document.getElementById("hour").innerText = hour;
                
    (minute<10) ? document.getElementById("minute").innerText ="0"+minute:           
                document.getElementById("minute").innerText = minute;

    (second<10) ? document.getElementById("second").innerText = "0"+second:
                document.getElementById("second").innerText = second;

    
    (month < 10) ? document.getElementById("date").innerHTML = day+ "/0" +month+ "/" +year:
                document.getElementById("date").innerHTML = day+ "/" +month+ "/" +year;

                document.getElementById("day").innerHTML = (gunler[now.getDay()]);
    
    };

    setInterval(function(){showTime();},1000);
    //setInterval---1000ms'de bir showTime fonksiyonunu işletir.