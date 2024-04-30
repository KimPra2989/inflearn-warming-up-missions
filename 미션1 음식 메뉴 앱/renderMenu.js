function renderMenu(data, selected) {
    // clearing
  document.querySelector(".menu-list").innerHTML = "";
  
  if (selected != "all") {
    data = data.filter((data) => data.category == selected);
  }

  data.forEach((item, idx) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item")
    document.querySelector(".menu-list").appendChild(menuItem);

    const menuImage = document.createElement("img");
    menuImage.src = item.image;
    menuItem.appendChild(menuImage);

    const menuName = document.createElement("span");
    menuName.innerText = item.name;    
    menuItem.appendChild(menuName);
  });
}

export default renderMenu;
