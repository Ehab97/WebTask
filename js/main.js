 window.onload = () => {
         //variables
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
         //functions
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
         projects.addEventListener('click', () => {
             pro.style.display = "block";
             home.style.display = "none";
         });
         one.onclick = (e) => {

             pro.style.display = "none";
             home.style.display = "block";

         };
         two.onclick = () => {

             pro.style.display = "none";
             home.style.display = "block";
         };
         all.onclick = () => {
             for (let i = 0; i < allCourses.length; ++i) {
                 allCourses[i].parentNode.style.display = 'block';
             }

         };
         js.onclick = () => {
             for (let i = 0; i < allCourses.length; ++i) {
                 allCourses[i].parentNode.style.display = 'none';
             }
             for (let i = 0; i < jsC.length; ++i) {
                 jsC[i].parentNode.style.display = 'block';
             }

         };
         vue.onclick = () => {
             for (let i = 0; i < allCourses.length; ++i) {
                 allCourses[i].parentNode.style.display = 'none';
             }
             for (let i = 0; i < vueC.length; ++i) {
                 vueC[i].parentNode.style.display = 'block';
             }
         };
         php.onclick = () => {
             for (let i = 0; i < allCourses.length; ++i) {
                 allCourses[i].parentNode.style.display = 'none';
             }
             for (let i = 0; i < phpC.length; ++i) {
                 phpC[i].parentNode.style.display = 'block';
             }
         }

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
 var show = (x, y) => {
     //  home.style.height = 0;
     //  home.style.opacity = 0;
     //  pro.style.height = 'auto';
     //  pro.style.opacity = 1;
     y.style.display = 'block';
     x.style.display = 'none';
 }
 var hide = (x, y) => {
     //  pro.style.height = 0;
     //  pro.style.opacity = 0;
     //  home.style.height = 'auto';
     //  home.style.opacity = 1;
     y.style.display = 'none';
     x.style.display = 'block';
 }