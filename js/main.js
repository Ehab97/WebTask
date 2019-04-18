 window.onload = () => {
         //variables
         var body = document.querySelector('body');
         var projects = document.querySelector('#pro');
         var pro = document.querySelector('#projects');
         var home = document.querySelector('#home');
         var one = document.querySelector('#one');
         var two = document.querySelector('#two');
         var li = document.querySelectorAll('.nav-item');
         var lis = document.querySelectorAll('.tabs ul li');
         var all = document.querySelector('#all');
         var js = document.querySelector('#js');
         var vue = document.querySelector('#vue');
         var php = document.querySelector('#php');
         var allCourses = document.querySelectorAll('.course');
         var jsC = document.querySelectorAll('.js');
         var vueC = document.querySelectorAll('.vue');
         var phpC = document.querySelectorAll('.php');
         //  var liClass = document.querySelectorAll('.tabs ul .li');
         //  var liActive = document.querySelectorAll('.tabs .li .active');
         //functions
         var show = () => {
             home.style.height = 0;
             home.style.opacity = 0;
             pro.style.height = 'auto';
             pro.style.opacity = 1;
         }
         var hide = () => {
             pro.style.height = 0;
             pro.style.opacity = 0;
             home.style.height = 'auto';
             home.style.opacity = 1;
         }
         var changeColor = () => {
             for (let i = 0; i < li.length; i++) {
                 li[i].onclick = function() {
                     var c = 0;
                     while (c < li.length) {
                         li[c++].className = `nav-item`;
                     }
                     li[i].className = `nav-item active`;
                 };
             }

         }
         var changeColors = () => {
                 //  element = Array.from(element);
                 for (let i = 0; i < lis.length; i++) {
                     lis[i].onclick = function() {
                         var c = 0;
                         while (c < lis.length) {
                             lis[c++].className = `li`;
                         }
                         lis[i].className = `li active`;
                     };
                 }
             }
             //making interactivty
             //  changeColor();
         changeColors();
         changeColor();
         projects.addEventListener('click', (e) => {
             setTimeout(show(), 1000);
             pro.style.display = "block";
             //  e.target.classList += ' active';

         });
         one.onclick = (e) => {
             setTimeout(hide(), 1000);
             pro.style.display = "none";

         };
         two.onclick = () => {
             setTimeout(hide(), 1000);
             pro.style.display = "none";
         };





     }
     //toggle


 function toggleDivs(element1, element2) {
     //  var element1 = document.querySelector(`${selec1}`);
     //  var element2 = document.querySelector(`${selec2}`);

     if (element1.style.display != 'none') {
         element1.style.display = 'none';
         element2.style.display = 'inline';
     } else {
         element1.style.display = 'inline';
         element2.style.display = 'none';
     }
 }