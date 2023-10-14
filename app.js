var light = document.querySelector('.light');
var dark = document.querySelector('.dark');
var night = document.querySelector('.night');
var sidebar = document.querySelector('.sidebar');
var activeListItem = document.querySelector('.list-item.active');
 



dark.addEventListener('click', ()=>{
    sidebar.className = "sidebar";
    activeListItem = 'list-item active';
})

night.addEventListener('click', ()=>{
    sidebar.className = "sidebar night";
    activeListItem = 'list-item active night';
})
light.addEventListener('click', ()=>{
    sidebar.className = "sidebar light";
    activeListItem = 'list-item active light';
})