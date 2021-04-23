const resultEl = document.querySelector(".result");
const detailsEl = document.querySelector(".details");



//to get users
// https://api.github.com/users

// to get repos of user
// https://api.github.com/users/<login>/repos
// for eg.
// https://api.github.com/users/mojombo/repos



fetch('https://api.github.com/users')
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
                <div class="result">
                <table>
                    <td>
                    <img src="${user.avatar_url}" height='150px' alt="${user.login}"/>
                    </td>
                    <th>
                    <name>${user.login}</name>
                    </th>
                    <th>
                    <button data-username="${user.login}">show details</button>
                    </th>
                 </table>
                </div>
                `;
                
        })
        .join("");
        console.log(html);
       document.querySelector(".result")
       .innerHTML = html 
       const buttons = document.querySelectorAll('.result button')
       for(let button of buttons){
           
       button.addEventListener('click', function getData(){
        const userlogin = button.getAttribute("data-username")
        fetch(`https://api.github.com/users/${userlogin}/repos`)
          .then((response) => response.json())
          .then((newdata) => {
              
    
              const name = newdata
              console.log(name)
              detailsEl.innerHTML = name
              .map(users => {
                  return `
                  <div class="details">
                  <li>
                  ${users.name}
                  </li>
                  `
              }).join("")
              console.log(name)
              buttons.innerHTML = name

          })
        })
       }

      
   
      })
      .catch(err => {
          console.log(err);
      });

    

































      
   

    
         
    