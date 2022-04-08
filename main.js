
    var form = document.createElement("form");
form.setAttribute("id" , "form");
form.setAttribute("class" , "form");

var h2 = document.createElement("h2");
var h2_text = document.createTextNode("Rgister With Us");
h2.appendChild(h2_text);

var form_control_1 = document.createElement("div");
form_control_1.setAttribute("class","form-control");


var form_control_2 = document.createElement("div");
form_control_2.setAttribute("class","form-control");

var form_control_3 = document.createElement("div");
form_control_3.setAttribute("class","form-control");

var form_control_4 = document.createElement("div");
form_control_4.setAttribute("class","form-control");

var form_control_5 = document.createElement("div");
form_control_5.setAttribute("class","form-mt");


/*  formControl 1 Start section */

var label_1 = document.createElement("label");
label_1.setAttribute("for","username");
var label_text1 = document.createTextNode("Username");
label_1.appendChild(label_text1);

var input_1  = document.createElement("input");
input_1.setAttribute("id","username")
input_1.setAttribute("placeholder" , " Enter Username");
input_1.setAttribute("type", "text");

/*  formControl 1 End section */



/*  formControl 2 Start section */
var label_2 = document.createElement("label");
label_2.setAttribute("for","email");
var label_text2 = document.createTextNode("Email");
label_2.appendChild(label_text2);


var input_2 = document.createElement("input");
input_2.setAttribute("id","email");
input_2.setAttribute("placeholder","Enter Email");
input_2.setAttribute("type","text");
/*  formControl 2 End section */


/*  formControl 3 Start section */

var label_3 = document.createElement("label");
label_3.setAttribute("for","password");
var label_text3 = document.createTextNode("Password");
label_3.appendChild(label_text3);

var input_3 = document.createElement("input");
input_3.setAttribute("id","password");
input_3.setAttribute("placeholder","Password");
input_3.setAttribute("type","text");
/*  formControl 3 End section */


/*  formControl 4 Start section */
var label_4 = document.createElement("label");
label_4.setAttribute("for","password2");
var label_text4 = document.createTextNode("Confirm Password");
label_4.appendChild(label_text4);

var input_4 = document.createElement("input");
input_4.setAttribute("id","password2");
input_4.setAttribute("placeholder","Confirm Pssword");
input_4.setAttribute("type","text");
/*  formControl 4 End section */


/*  formControl Button Start */

var button = document.createElement("button");
button.setAttribute("type", "submit");
var button_text = document.createTextNode("Submit");
button.appendChild(button_text);

/*  formControl Button End */


/*  formControl radio Button Start */
var radio_1 = document.createElement("input");
radio_1.setAttribute("name","1");
radio_1.setAttribute("type","radio");
radio_1.setAttribute("value","1");
/*  formControl radio Button ENd */


var radio_2 = document.createElement("input");
radio_2.setAttribute("name","1");
radio_2.setAttribute("type","radio");
radio_2.setAttribute("value","2");
/*  formControl radio Button ENd */




document.getElementById("container").appendChild(form);
form.appendChild(h2);



form.appendChild(form_control_1);
form_control_1.appendChild(label_1);
form_control_1.appendChild(input_1);


form.appendChild(form_control_2);
form_control_2.appendChild(label_2);
form_control_2.appendChild(input_2);

form.appendChild(form_control_3);
form_control_3.appendChild(label_3);
form_control_3.appendChild(input_3);

form.appendChild(form_control_4);
form_control_4.appendChild(label_4);
form_control_4.appendChild(input_4);

form.appendChild(form_control_5);
form_control_5.appendChild(radio_1);
form.appendChild(form_control_5);
form_control_5.appendChild(radio_2);

form.appendChild(button);