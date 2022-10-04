
const observer_x = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show_vertical"); 
        } else {
            entry.target.classList.remove("show_vertical");
        }
    }); 
}); 

const observer_y = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show_horizontel"); 
        } else {
            entry.target.classList.remove("show_horizontel"); 
        }
    }); 
}); 

// Animation from vertical position
const hidden_left_Elements = document.querySelectorAll('.hidden_left'); 
const hidden_right_Elements = document.querySelectorAll('.hidden_right');

hidden_right_Elements.forEach((el) => observer_x.observe(el)); 
hidden_left_Elements.forEach((el) => observer_x.observe(el)); 

// Animation from the horizontel position
const hidden_bottom_Elements = document.querySelectorAll('.hidden_bottom');
const hidden_top_Elements = document.querySelectorAll('.hidden_top'); 

hidden_bottom_Elements.forEach((el) => observer_y.observe(el)); 
hidden_top_Elements.forEach((el) => observer_y.observe(el)); 