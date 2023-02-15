const container1 = document.querySelector("#products-list-1");
const container2 = document.querySelector("#products-list-2");
const container3 = document.querySelector("#products-list-3");
const container4 = document.querySelector("#products-list-4");
const listcard1 = [
    {
        image: "img/product/product-1.jpg",
        title: "Soda Sparkling Water Maker (Rose Gold)",
    },
    {
        image: "img/product/product-2.jpg",
        title: "Mangosteen Organic From VietNamese",
    },
    {
        image: "img/product/product-3.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
    {
        image: "img/product/product-4.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
    {
        image: "img/product/product-5.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
    {
        image: "img/product/product-6.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
];
const listcard2 = [
    {
        image: "img/product/product-7.jpg",
        title: "Soda Sparkling Water Maker (Rose Gold)",
    },
    {
        image: "img/product/product-8.jpg",
        title: "Mangosteen Organic From VietNamese",
    },
    {
        image: "img/product/product-9.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
    {
        image: "img/product/product-10.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
    {
        image: "img/product/product-11.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
    {
        image: "img/product/product-12.jpg",
        title: "Ginger Fresh, Whole, Organic - 250gram",
    },
];

function returnCards(container, listcard) {
    listcard.forEach((element) => {
        container.innerHTML += `<div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="" class="card-product rounded-2">
            <div class="thumb">
                <img src="${element.image}" alt="" />
                <div class="sale">-50%</div>
            </div>
            <div class="content">
                <p class="cate">Fresh vegetable</p>
                <h3 class="title">${element.title}</h3>
                <div class="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <span>$ 56.00</span>
                    <span>$ 69.00</span>
                </div>
            </div>
            <div class="info">
                <button type="button" class="btn btn-primary w-100 rounded-pill">Add to card</button>
                <ul>
                    <li>Type: Organic</li>
                    <li>MFG: August 4.2021</li>
                    <li>LIFE: 60 days</li>
                </ul>
            </div>
        </a>
    </div>`;
    });
}

returnCards(container1, listcard1);
returnCards(container2, listcard2);
returnCards(container3, listcard2);
returnCards(container4, listcard1);
