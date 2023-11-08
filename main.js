import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

let list = document.querySelector('.cardListArea');
let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];


 let str="";

 data.forEach (function(item){
   str+=`
        <li class="tickCard col-4" >
              <div class="card h-100">
                <div class="position-relative">
                  <div class="bg-softblue text-light fs-5 position-absolute rounded-end px-3 py-2 areaTag">${item.area}</div>
                  <div class="bg-primary text-light position-absolute rounded-end px-3 py-2 areaStarts">${item.rate}</div>
                  <img src="${item.imgUrl}" alt="${item.name}" class="card-img-top cardImgUrl">
                </div>

                <div class="card-body pt-4 d-flex flex-column justify-content-between">
                  
                  <div>
                    <h3 class="hs-5 text-primary mb-0 cardTitle border-bottom border-2 border-primary lh-base">
                        <a href="#">${item.name}</a>
                    </h3>
                    <p class="card-text text-graymedia pt-3 lh-base">
                        ${item.description}
                    </p>
                  </div>
                  
                  <p class="ticketNumber d-flex justify-content-between text-primary mb-0">
                    <span class="d-flex align-items-center fs-6">
                      <span class="material-symbols-outlined text-primary">
                        error
                      </span>
                      剩下最後${item.group}組
                    </span>
                    <span class="d-flex align-items-center">
                      <span class="pe-1">TWD</span>
                      <span class="priceStyle fs-2">$${item.price}</span>
                    </span>
                  </p>

                </div>
              </div>
            </li>`
 });
   list.innerHTML=str;