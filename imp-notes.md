form materialize color set used colors
## Light mode colors
#00796b teal darken-2
#4527a0 deep-purple darken-3

## Dark mode colors
#212121 grey darken-4
#757575 grey darken-1
#616161 grey darken-2


#FBC02D
## Extras colors
#0091ea light-blue accent-4
#9575cd deep-purple lighten-2

note
first grid in the site is - col s12 m12 l4 
this one is the final one - col s12 m6 l3

### nav bar design and orders list name

 <!-- add all the pwa usages in this page how to use-->
- [x]  How to use 

- [x]  About us / who are we
- [x]  All Features
- [x]  Favorites pages
- [x]  Login page  + (Sign up page)

Drop down
- [x]  Disclaimer
- [x]  Contact us - use google form
- [x]  Privacy policy -  iska  idea hai
- [x]  Terms and conditions - iska idea hai

<!-- <details>
<summary>How do I dropdown?</summary>
<br>
This is how you dropdown.
</details> -->

### css for glass effect for cards 
/* Auto Layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 16px 10px;

position: relative;
width: 301px;
height: 231px;

background: linear-gradient(109.37deg, rgba(255, 255, 255, 0.4) 12.9%, rgba(255, 255, 255, 0.1) 77.62%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.28);
backdrop-filter: blur(18px);

/* Note: backdrop-filter has minimal browser support */
border-radius: 15px;


### icons to includes 
- favorite_border ->  
<!-- <i class="material-icons right">favorite_border</i> -->
- brightness_4
- brightness_7
- favorite
- notifications
- notifications_activenotifications_active
- notifications_nonenotifications_none
- notifications_offnotifications_off
- star
- star_borderstar_border


### jo lika hoga to idar likna 
-> use in exp.cal all elements 
- [] model for help preview 
- [] select /drop down for different currencys 
- [] Collapsible for history/income/expence 
- [] Chips for tags in expense
- [c] all types of text inputs for all the fields
- [x] cards for the hole content --- "failed"
- [] grids for the whole content inside init 
. tabs -- optinal 

Col s12 m7 l6 - for exp. Tracking title 
Col s12 m5 l6 - for ur bal , num, select
₹ $ £ ¥


code for the expense cal 
`code`

different currency selection
<!-- Currency selection -->
<!-- 
 <div class="container">
    <div class="row">
      <div class="col s12 m2 l1">
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            <option value="rs">₹</option>
            <option value="drs">$</option>
            <option value="eur">£</option>
            <option value="jpy">¥</option>
          </select>
          <label>Currency</label>
        </div>
      </div>
     </div>
  </div>

<a href="#" class="dropdown-trigger btn" data-target="currency">
      <i class="material-icons right">arrow_drop_down</i>Currency</a>

       <!-- dropdown for different currency -->
  <!-- <ul id="currency" class="dropdown-content">
    <li><a href="#">₹</a></li>
    <li><a href="#">$</a></li>
    <li><a href="#">£</a></li>
    <li><a href="#">¥</a></li>
  </ul>  -->

<!-- <section>
      <h3><b>Expense Tracker</b></h3>
      <p class="right-align"><b>Your Balance</b></p>
      <h2 class="right-align" id="balance">0.00</h2>
      <div class="input-field">
        <select>
          <option value="" disabled selected>Choose your Currency</option>
          <option value="1">₹</option>
          <option value="2">$</option>
          <option value="3">₤</option>
          <option value="4">¥</option>
          <option value="5">¢</option>
        </select>
        <label>Currency's select </label>
      </div>
</section> -->

- tabs code in todo list 
  <!-- tabs are created  -->
  <!-- <div class="center">
    <h2>todo list</h2>
    <ul class="tabs  z-depth-1" id="tabs-swipe">
      <li class="tab active"><a href="#tab-tasks">Tasks</a></li>
      <li class="tab"><a href="#tab-completed">Completed</a></li>
    </ul>
  </div> -->
<!-- 
<div class="white container">
  <div id="tab-tasks">
    <div class="input-field">
      <div class="input-field">
        <i class="material-icons prefix">text_fields</i>
        <input type="text" onfocus="this.value=''"  placeholder="What is your tasks ?" @keydown.enter="addToList()">
        <p  class="btn-floating btn-large waves-effect waves-light deep-purple darken-3 right" id="btnadd">
          <i class="material-icons">add</i></p>
    </div>
    fixme: have to under the code 
    <div class="collection">
      <uncompleted
        v-for="(item, index) in items"
        v-if="!item.done"
        v-bind:text="item.text"
        v-bind:done="item.done"
        v-bind:index="index"
        v-on:act-remove="removeFromList"
        v-on:act-update="updateStatus"
      ></uncompleted>
    </div>
    </div>
    <div id="tab-completed">
      <div class="collection">
        <completed
        v-for="(item, index) in items"
        v-if="item.done"
        v-bind:text="item.text"
        v-bind:done="item.done"
        v-bind:index="index"
        v-on:act-remove="removeFromList"
        v-on:act-update="updateStatus"
        ></completed>
      </div>
    </div>
  </div>
</div> -->


- local storage code 

$("#getName").on("click", event => {
  name = $("#myname").val();
  if (localStorage.hasOwnProperty(name)) {
    data = JSON.parse(localStorage.getItem(name));
    console.log(data);
  } else {
    data.name = name;
    localStorage.setItem(name, JSON.stringify(data));
  }

  $(".addmyname").css("display", "none");
  $(".navigate").css("display", "block");
  if (data.expense.length === 0) {
    $(".expenseDiv").css("display", "block");
  } else {
    $(".chart").css("display", "block");
    generateGraph();
    generateMonthbar();
  }
});


$("#addexpense").on("click", event => {
  var date = new Date($("#date").val());
  var amount = parseInt($("#amount").val());
  var Category = "";
  if ($("#catagory").val() == "type") {
    Category = $("#addcatagory").val();
  } else {
    Category = $("#catagory").val();
  }

  var expense = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    date: date,
    amount: amount,
    category: Category
  };
  if (data.categories.hasOwnProperty("" + Category + "")) {
    data.categories[Category].amount += parseInt(amount);
  } else {
    data.categories[Category] = {
      amount: parseInt(amount)
    };
  }
  data.expense.push(expense);
  localStorage.setItem(name, JSON.stringify(data));

  $("#date, #amount, #catagory").val("");
});


------

<--- js for todo list created by me --->

const container = document.querySelector('.collection-item');
var inputValue = document.querySelector('.input');
const add = document.querySelector('#btnadd');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

<!-- var t = '<li class="collection-item"> <i class="material-icons deep-purple-text text-darken-3 left">description</i> <div>' + task_title + '<a href="#!" class="secondary-content"><i class="material-icons red-text cdel" id="cdelete">delete_forever</i></a></div> </li>'; -->

class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name){
        var itemBox = document.createElement('li');
        itemBox.classList.add('collection-item');

        var icons =document.createElement('i')
        icons.classList.add('material-icons deep-purple-text text-darken-3 left');
        icons.value = description;
        
        var input = document.createElement('div');
        input.value = name;
        input.type = "text";
        input.classList.add('item_input');

        var a =document.createElement('a')
        a.classList.add('secondary-content');
        
        var remove = document.createElement('i');
    	remove.classList.add('material-icons red-text cdel');
        icons.value = delete_forever;
    	remove.innerHTML = "delete_forever";
    	remove.addEventListener('click', () => this.remove(itemBox, name));


        container.appendChild(itemBox);

        itemBox.appendChild(icons);
        itemBox.appendChild(input);
        itemBox.appendChild(a);
        itemBox.appendChild(remove);

    }

    remove(itemBox,name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})

function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
		inputValue.value = "";
	}
}

for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}
---------


<!-- navbar in common  -->
  <div class="navbar-fixed">
        <nav class="yellow darken-2">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo black-text">
                    <!-- &nbsp; Last Hope Church -->
                    <img src="/assets/img/logo.png" alt="brand-logo" id="logo" class="lhc-logo">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav" class="right hide-on-med-and-down">
                    <li><a href="/" title="Home" class="black-text">Home</a></li>
                    <li><a href="/pages/aboutus.html" class="black-text">About Us</a></li>
                    <li><a href="#events" class="black-text">Events</a></li>
                    <li><a href="#ministeries" class="black-text">Ministries</a></li>
                    <li><a href="/pages/prayer.html" class="black-text">Prayer</a></li>
                    <li><a href="#support" class="black-text">Support</a></li>
                    <li><a href="#footer" class="black-text">Visit Us</a></li>
                    <!-- dropdown-trigger -->
                    <li>
                        <a href="#" class="dropdown-trigger" data-target="more-options">
                            <i class="material-icons black-text right">more_vert</i>
                        </a>
                    </li>
                    <!-- darkmode button  -->
                    <li>
                        <a href="#" class="btn  btn-wages indigo"
                            onclick="localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')"
                            title="Dark/light">Dark mode
                            <i class="material-icons right">dark_mode</i>
                        </a>
                    </li>
                </ul>
                <!-- dropdown menus -->
                <ul id="more-options" class="dropdown-content">
                    <li><a href="/pages/disclamer.html" class="blue-text">Disclamer</a></li>
                    <li><a href="/pages/privacy.html" class="blue-text">Privacy Policy</a></li>
                    <li><a href="/pages/tnc.html" class="blue-text">Terms & Conditions</a></li>
                </ul>
            </div>
        </nav>
    </div>

    <!-- Here is the Mobile side navbar   -->
    <ul class="sidenav" id="mobile-demo">
        <!-- darkmode button  -->
        <li>
            <a href="#" class="btn  btn-wages indigo"
                onclick="localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')"
                title="Dark/light">Dark mode
                <i class="material-icons right">dark_mode</i>
            </a>
        </li>
        <li><a href="/pages/aboutus.html">About Us</a></li>
        <li><a href="#ministeries">Ministries</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="/pages/prayer.html">Prayer</a></li>
        <li><a href="#support">Support</a></li>
        <li><a href="#footer">Visit Us</a></li>
        <li><a href="/pages/disclamer.html">Disclamer</a></li>
        <li><a href="/pages/privacy.html">Privacy Policy</a></li>
        <li><a href="/pages/tnc.html">Terms & Conditions</a></li>
    </ul>





<!-- footer in common  -->

 <footer class="page-footer yellow darken-2">
        <div class="container" id="footer">
            <div class="row">
                <div class="col l3 s12">
                    <!-- <h3 class="black-text">About Church</h3> -->
                    <h5 class="black-text">About the Church</h5>
                    <p class="black-text text-lighten-1">
                        <!-- Last Hope Vision is to bring Hope for the Hopeless humanity -->
                        Last Hope is a contemporary church led by Pastor Noel and Marceline Lewis. Our vision and
                        mission is to establish God's kingdom across the earth.
                    </p>
                    <!-- translate to hindi  -->
                    <span id="google_translate_element" title="translate to your langauge"></span>
                </div>
                <!-- <div class="col l4 offset-l2 s12"> -->
                <div class="col l3 s12">
                    <h5 class="black-text">Quick Links</h5>
                    <ul>
                        <li><a class="blue-text" href="/pages/prayer.html">New Comer Form</a></li>
                        <hr>
                        <li><a class="blue-text" href="#">Support Us</a></li>
                        <hr>
                        <li><a class="blue-text" href="#">Write Testimony</a></li>
                        <hr>
                        <li><a class="blue-text" href="#">Our Vision & Minisions</a></li>
                        <hr>
                    </ul>
                </div>
                <div class="col l3 s12 black-text">
                    <h5>Reach Us</h5>
                    <p>Address: Shop Number C1 Bappa Sitaram Market, opposite SBI, Moregaon Talao, Nalasopara East,
                        Maharashtra 401209</p>
                </div>
                <div class="col l3 s12">
                    <h5 class="black-text">Connect with us</h5>
                    <ul style="display:flex; justify-content: left; align-items: center;">
                        <!-- use flaticon for this  -->
                        <li><a class="btn red btn-floating" href="https://www.youtube.com/c/LASTHOPEGLOBAL"
                                target="_blank">
                                <i class="fab fa-youtube"></i>
                            </a></li>&nbsp;&nbsp;
                        <li><a class="btn pink btn-floating" href="https://www.instagram.com/lasthopeglobal/"
                                target="_blank">
                                <i class="fab fa-instagram"></i></a>
                        </li>&nbsp;&nbsp;
                        <li><a class="btn blue btn-floating" href="https://www.facebook.com/lasthope.church.5/"
                                target="_blank">
                                <i class="fab fa-facebook"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col l3 s12">
                    <h5 class="black-text">Contact us</h5>
                    <ul class="black-text">
                        <li>Call us :+910123456789</li>
                        <a href="mailto:lasthopechurch@gmail.com"><u>Email:lasthopechurch@gmail.com</u></a>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright yellow darken-3">
            <div class="container center black-text">
                Copyright © 2022 <a href="#" class="purple-text"><u>Last Hope Church</u></a> &nbsp;
                Created with <i class="material-icons red-text" style="font-size:15px ;">favorite</i> by <a
                    class="purple-text" href="https://pratapparui.me/" target="_blank" rel="dofollow">Mr Parui
                    Web</a>
            </div>
        </div>
    </footer>



    <!-- Facebook -->
                <a href="http://www.facebook.com/sharer.php?u=https://mrparuiweb.live" target="_blank">
                    <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                </a>
                <!-- instagram  -->
                <a href="http://www.instagram.com/sharer.php?u=https://lasthopeglobal.netlify.app/" target="_blank">
					<img src="https://simplesharebuttons.com/images/somacro/instagram.png" alt="Instagram" />
                    <!-- <i class="bi bi-instagram"></i> -->
			</a>

                <!-- Twitter -->
                <a href="https://twitter.com/share?url=https://lasthopeglobal.netlify.app/"
                    target="_blank">
                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                </a>

[link of zoom meeting](https://us02web.zoom.us/j/5181925148?pwd=NGlvRCtSKytNaW15eGpQYWRCUXhoZz09)

create table
  public.newmembers (
    id bigint generated by default as identity,
    created_at timestamp with time zone null default now(),
    first_name text not null,
    middle_name text null,
    last_name text not null,
    dob date not null,
    mobilenumber numeric not null,
    email text null,
    authorname text null,
    prayertime time without time zone not null,
    reference text null,
    address text null,
    prayerreq text null,
    g-recaptcha-response text null,
    constraint newmembers_pkey primary key (id)
  ) tablespace pg_default;