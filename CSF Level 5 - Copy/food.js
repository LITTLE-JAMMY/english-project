const buttons = document.querySelectorAll('.type');
const items = document.querySelectorAll('.item');
const notice = document.querySelector('.notice');

 
//for Each function to work each button
buttons.forEach((button) => {
    button.addEventListener('click', (e) =>  {
        //prevent button from going to top
        e.preventDefault();
        const filter = e.target.dataset.filter;

        items.forEach((item) => {
            if(filter === "all"){
                item.style.display = "block";
            }else {
                 if(item.classList.contains(filter)){
                    item.style.display = "block";
                 }else {
                    item.style.display = "none";
                 }
          }
        })
    })
})



const search = document.getElementById('search-box');

search.addEventListener('keyup', e => {
    const searchFilter = e.target.value.toLowerCase().trim();

    items.forEach((item) => {
        if(item.textContent.includes(searchFilter)) {
            item.style.display = "block";
            notice.style.display = "none";
        }else{
            if(item.style.display == "block") {
                for(let i = 0; i < items.length; i++){

                   items[i].style.display = "none"
                }
                notice.style.display = "block";
            }
        }
    })
})