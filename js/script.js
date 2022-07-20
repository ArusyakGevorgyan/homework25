    const mobileMenuBtn = document.querySelector('#mobile_menu_btn');
    const navList = document.querySelector('#nav-list');
    const text = document.querySelector("#text");
    const btn = document.querySelector(".h-btn");
    const li = document.querySelectorAll("li");
    const liItem = document.querySelector(".li-item");

    btn.addEventListener("click", () => {
        text.style.color = "#0cb8b6";
        btn.style.backgroundColor = "#666";
      });
    
    mobileMenuBtn.addEventListener('click', () => {
        navList.classList.toggle('menu_active');
    });

     li.forEach((item, i) => {

        console.log(i)
        console.log(item)
    }) 


  