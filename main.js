var caption=[
    "Prince Philip",
    "Prince Harry",
    "Duchess Kate",
    "Princess Diana",
  ];
  var images=[
    "https://media2.s-nbcnews.com/i/newscms/2021_07/3450639/210217-prince-philip-mc-1443_3145d10cc6a844c46a7f3287301c41ef.JPG",
    "https://www.hellomagazine.com/imagenes/royalty/20210503112315/prince-harry-solo-appearance-without-meghan-markle-vax-live-concert/0-542-565/prince-harry-vax-live-t.jpg",
    "https://www.thecelebritycastle.com/wp-content/uploads/2020/02/The-Palace-Announced-New-Engagement-For-Duchess-Kate.jpg",
    "https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTQzMzAxMjk3OTQ3Mjg5MTYw%2Fdiana_gettyimages-515185764jpg.jpg",
  ];
  
  var i=0;
  function nextpic(){
    document.getElementById("person1").innerHTML=caption[i];
     document.getElementById("img1").src=images[i];
    i++;
    document.getElementById("audio1").play();
  }