let main=document.querySelector(".main"); 
                 //main links..

       // upper uses....
let border=document.querySelector("#border");
let RealHome=document.querySelector("#RealHome");
let Hom=document.querySelector("#Hom");
let abouts=document.querySelector("#abouts");
let sells=document.querySelector("#sells");
let services=document.querySelector("#services");
let rents=document.querySelector("#rents");
let products=document.querySelector("#products");
let register=document.querySelector("#register");
let starteds=document.querySelector("#starteds");

        // slide image.....
let slide=document.querySelector(".image-Container");
const images = [
  {
    url: "https://www.constructionweekonline.com/cloud/2023/05/24/Dubai-property-market-GettyImages-1417041621.jpg",
    transition: "all 3s ease-in"
  },
  {
    url: "https://assets-news.housing.com/news/wp-content/uploads/2019/12/23065223/Gurugram-to-have-the-first-Indo-Japanese-real-estate-project-Krisumi-Waterfall-Residences-FB-1200x725-compressed.jpg",
    transition: "all 5s ease-in"
  },
  {
  url: "https://dandbdubai.ae/wp-content/uploads/2023/01/real-estate-projects-in-dubai-1024x768.jpg",
  transition: "all 7s ease-in"
  }
];

let index = 0;

setInterval(() => {
  const image = images[index];

  slide.style.transition = image.transition;
  slide.style.backgroundImage = `url('${image.url}')`;
  slide.style.backgroundSize = "auto"; // ya "100px 100px"
  slide.style.backgroundRepeat = "repeat";
  slide.style.backgroundPosition = "center";

  index = (index + 1) % images.length;
}, 9000); // Total time between changes

           //use of link
let dtl=document.querySelector("#details");
let qua=document.querySelector("#quality");
let view=document.querySelector("#view");
let protect=document.querySelector("#protect");
let mirror=document.querySelector("#mirror");
let text=document.querySelector(".text"); 
let the=document.querySelector("#the");
let abhi=document.querySelector("#abhi");
let goa=document.querySelector("#goa");
let ri=document.querySelector("#ri");

      // 2nd part link....
let texts=document.querySelector(".texts");
let Pacifica=document.querySelector("#Pacifica");
let Address=document.querySelector("#Address");
let Sobha=document.querySelector("#Sobha");
let park=document.querySelector("#park");

       // new launch...
let nw=document.querySelector("#new");

     //detail 2nd....
let detail=document.querySelector("#detail");

    // video ka yah pr....
let qualitys=document.querySelector("#qualitys");

     // inner part... text..
let innner=document.querySelector(".inner");
let innners=document.querySelector(".inners");
let pgaph=document.querySelector(".pgaph");
let page=document.querySelector(".page");
let lower=document.querySelector(".lower");



     //upper uses...
RealHome.addEventListener("mouseover",function(){
  RealHome.style.color="blue";
});
RealHome.addEventListener("mouseout",function(){
  RealHome.style.color="white";
});
Hom.addEventListener("mouseover",function(){
  Hom.style.color="blue";
});
Hom.addEventListener("mouseout",function(){
  Hom.style.color="white";
});
abouts.addEventListener("mouseover",function(){
  abouts.style.color="blue";
});
abouts.addEventListener("mouseout",function(){
  abouts.style.color="white";
});
sells.addEventListener("mouseover",function(){
  sells.style.color="blue";
});
sells.addEventListener("mouseout",function(){
  sells.style.color="white";
});
services.addEventListener("mouseover",function(){
  services.style.color="blue";
});
services.addEventListener("mouseout",function(){
  services.style.color="white";
});
rents.addEventListener("mouseover",function(){
  rents.style.color="blue";
});
rents.addEventListener("mouseout",function(){
  rents.style.color="white";
});
products.addEventListener("mouseover",function(){
  products.style.color="blue";
});
products.addEventListener("mouseout",function(){
  products.style.color="white";
});
register.addEventListener("mouseover",function(){
  register.style.color="blue";
});
register.addEventListener("mouseout",function(){
  register.style.color="white";
});
starteds.addEventListener("mouseover",function(){
  starteds.style.color="blue";
});
starteds.addEventListener("mouseout",function(){
  starteds.style.color="white";
});
                   //use of link...
qua.addEventListener("mouseover", function(){  
    qua.style.color="red";
    qua.style.backgroundColor="white";
});
qua.addEventListener("mouseout", function(){
    qua.style.color="white";
    qua.style.backgroundColor="red";
});
view.addEventListener("mouseover", function(){
    view.style.color="red";
    view.style.backgroundColor="white";
});
view.addEventListener("mouseout", function(){
    view.style.color="white";
    view.style.backgroundColor="red";
});
protect.addEventListener("mouseover", function(){
    protect.style.color="red";
    protect.style.backgroundColor="white";
});
protect.addEventListener("mouseout", function(){
    protect.style.color="white";
    protect.style.backgroundColor="red";
});
mirror.addEventListener("mouseover", function(){
    mirror.style.color="red";
    mirror.style.backgroundColor="white";
});
mirror.addEventListener("mouseout", function(){
    mirror.style.color="white";
    mirror.style.backgroundColor="red";
});

              //use of link...
the.addEventListener("mouseover",function(){
  the.style.color="blue";
});
the.addEventListener("mouseout",function(){
  the.style.color="black";
});
abhi.addEventListener("mouseover",function(){
  abhi.style.color="blue";
});
abhi.addEventListener("mouseout",function(){
  abhi.style.color="black";
});
goa.addEventListener("mouseover",function(){
  goa.style.color="blue";
});
goa.addEventListener("mouseout",function(){
  goa.style.color="black";
});
ri.addEventListener("mouseover",function(){
  ri.style.color="blue";
});
ri.addEventListener("mouseout",function(){
  ri.style.color="black";
});

          //2nd link use....
Pacifica.addEventListener("mouseover",function(){
  Pacifica.style.color="blue";
});
Pacifica.addEventListener("mouseout",function(){
  Pacifica.style.color="black";
});
Address.addEventListener("mouseover",function(){
  Address.style.color="blue";
});
Address.addEventListener("mouseout",function(){
   Address.style.color="black";
});
Sobha.addEventListener("mouseover",function(){
  Sobha.style.color="blue";
});
Sobha.addEventListener("mouseout",function(){
  Sobha.style.color="black";
});
park.addEventListener("mouseover",function(){
  park.style.color="blue";
});
park.addEventListener("mouseout",function(){
  park.style.color="black";
});

          // new launch...
nw.addEventListener("mouseover", function(){  
    nw.style.color="red";
    nw.style.backgroundColor="white";
});
nw.addEventListener("mouseout", function(){
    nw.style.color="white";
    nw.style.backgroundColor="red";
});

         // usess of secong detail.....
qualitys.addEventListener("mouseover", function(){  
    qualitys.style.color="red";
    qualitys.style.backgroundColor="white";
});
qualitys.addEventListener("mouseout", function(){
    qualitys.style.color="white";
    qualitys.style.backgroundColor="red";
});
views.addEventListener("mouseover", function(){
    views.style.color="red";
    views.style.backgroundColor="white";
});
views.addEventListener("mouseout", function(){
    views.style.color="white";
    views.style.backgroundColor="red";
});
protects.addEventListener("mouseover", function(){
    protects.style.color="red";
    protects.style.backgroundColor="white";
});
protects.addEventListener("mouseout", function(){
    protects.style.color="white";
    protects.style.backgroundColor="red";
});
mirrors.addEventListener("mouseover", function(){
    mirrors.style.color="red";
    mirrors.style.backgroundColor="white";
});
mirrors.addEventListener("mouseout", function(){
    mirrors.style.color="white";
    mirrors.style.backgroundColor="red";
});

      // video ka yah pr...
ren.addEventListener("mouseover", function(){
    ren.style.color="red";
    ren.style.backgroundColor="white";
});
ren.addEventListener("mouseout", function(){
    ren.style.color="white";
    ren.style.backgroundColor="red";
});

          // innner part... text..
quick.addEventListener("mouseover",function(){
  quick.style.color="blue";
});
quick.addEventListener("mouseout",function(){
  quick.style.color="white";
});
support.addEventListener("mouseover",function(){
  support.style.color="blue";
});
support.addEventListener("mouseout",function(){
  support.style.color="white";
});
touch.addEventListener("mouseover",function(){
  touch.style.color="blue";
});
touch.addEventListener("mouseout",function(){
  touch.style.color="white";
});
home.addEventListener("mouseover",function(){
  home.style.color="blue";
});
home.addEventListener("mouseout",function(){
  home.style.color="white";
});
about.addEventListener("mouseover",function(){
  about.style.color="blue";
});
about.addEventListener("mouseout",function(){
  about.style.color="white";
});
email.addEventListener("mouseover",function(){
  email.style.color="blue";
});
email.addEventListener("mouseout",function(){
  email.style.color="white";
});
buy.addEventListener("mouseover",function(){
  buy.style.color="blue";
});
buy.addEventListener("mouseout",function(){
  buy.style.color="white";
});
contact.addEventListener("mouseover",function(){
  contact.style.color="blue";
});
contact.addEventListener("mouseout",function(){
  contact.style.color="white";
});
state.addEventListener("mouseover",function(){
  state.style.color="blue";
});
state.addEventListener("mouseout",function(){
  state.style.color="white";
});
sell.addEventListener("mouseover",function(){
  sell.style.color="blue";
});
sell.addEventListener("mouseout",function(){
  sell.style.color="white";
});
Privacy.addEventListener("mouseover",function(){
  Privacy.style.color="blue";
});
Privacy.addEventListener("mouseout",function(){
  Privacy.style.color="white";
});
rent.addEventListener("mouseover",function(){
  rent.style.color="blue";
});
rent.addEventListener("mouseout",function(){
  rent.style.color="white";
});
term.addEventListener("mouseover",function(){
  term.style.color="blue";
});
term.addEventListener("mouseout",function(){
  term.style.color="white";
});