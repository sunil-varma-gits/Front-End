
const resEL = document.querySelector(".result")
// const detailsDb =  async() => {
//     const products = await fetch("https://fakestoreapi.com/products");
//     const response = await products.json();
//     //console.log(response[0]);
//     renderUserList(response);
// };
// const renderUserList = (response) => {
//     const productsEL = response.map(user => {
//         return `
//        <div class="product-center container">
            // <div class="column">
            //     <div class="product-header">
            //     <ol><name>${user.title}</name></ol>
                
            //     <img src="${user.image}"/>
            //     <ul class="icons">
            //             <span><i class="bx bx-heart"></i></span>
            //             <a href="cart.html"> <span><i class="bx bx-shopping-bag"></i></span>
            //             </a>
            //             <span><i class="bx bx-search"></i></span>
            //         </ul>
            //         </div>
            //         <div class="footer">
            //     <price> $ ${user.price}</price>
                
            //     <form action='cart.html'>
            //     <button data-username="${user.price}" id="btn">Add to cart</button>
            //     </form>
            //     </div>
            //     </div>
            // </div>
//         `
//     }) .join("");
//      document.querySelector(".result")
// .innerHTML = html 
// const buttons = document.querySelectorAll('.footer btn')
// for(let button of buttons){
//     button.addEventListener('click', () => {
//      const userlogin = button.getAttribute("data-username")
//      console.log(userlogin);
// })
// }
// }
// detailsDb();


fetch('https://fakestoreapi.com/products')
    .then(res => {
        if(!res.ok){
        throw Error("error");
    }
    return res.json();
})
    .then(data => {
        console.log(data)
        const html = data
            .map( user => {
                return  `
            <div class="product-center container">
            <div class="column">
                <div class="product-header">
                <ol><name>${user.title}</name></ol>
                
                <img src="${user.image}"/>
                <ul class="icons">
                        <span><i class="bx bx-heart"></i></span>
                        <a href="cart.html"> <span><i class="bx bx-shopping-bag"></i></span>
                        </a>
                        <span><i class="bx bx-search"></i></span>
                    </ul>
                    </div>
                    <div class="footer">
                <price> $ ${user.price}</price>
                
                <form action='cart.html'>
                <button data-username="${user.price}" id="btn">Add to cart</button>
                </form>
                </div>
                </div>
            </div>
                     `;
                
        })
        .join("");
        console.log(html);
       document.querySelector(".result")
       .innerHTML = html 
       const buttons = document.querySelectorAll('.footer btn')
       for(let button of buttons){
           button.addEventListener('click', () => {
            const userlogin = button.getAttribute("data-username")
            console.log(userlogin);
      })
     }
    })
      .catch(err => {
          console.log(err);
      });
      
  





      
      

          