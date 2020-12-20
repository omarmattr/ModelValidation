id = localStorage.length;

function ch(){
     event.preventDefault();
    // var name= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/

    if( document.forms["form"]["fullname"].value!=""  && document.forms["form"]["email"].value!= ""  && document.forms["form"]["pass"].value!="" && document.forms["form"]["repass"].value!="") {
    event.preventExtensions;
document.getElementById("check").innerHTML='<div class="alert alert-success" role="alert">User registered successfully ^_^</div>';
    }else{
    document.getElementById("check").innerHTML='<div class="alert alert-danger" role="alert"> Error! Fields cannot be empty</div>';}
    
}
                    

function check(input) {
                        if (document.getElementById('repass').value != document.getElementById('pass').value) {
                            input.setCustomValidity('Password Must be Matching.');
                        }else{
                            input.setCustomValidity('');
                        }
                    }


function create_user() {
    Myform.id.value = id;
    //ما بعيد تحميل الصفحة
    event.preventDefault();
    
    var username = Myform.name.value;
    var email = Myform.email.value;
    var password = Myform.pass.value;

    user = {
        id: id,
        username: username,
        email: email,
        password: password
    };

    tbody = document.getElementById("tbody");
    row = tbody.insertRow(-1);

    cell0 = row.insertCell(0).innerHTML = id;
    cell1 = row.insertCell(1).innerHTML = username;
    cell2 = row.insertCell(2).innerHTML = password;
    cell3 = row.insertCell(3).innerHTML = email;
    cell4 = row.insertCell(4).innerHTML = '<span onclick="edit_user(this)"><img  src="https://img.icons8.com/material-rounded/24/000000/edit.png"><span>';
    cell5 = row.insertCell(5).innerHTML = `<span onclick="delete_user(this)"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#e74c3c"><path d="M74.53333,17.2c-1.53406,-0.02082 -3.01249,0.574 -4.10468,1.65146c-1.09219,1.07746 -1.70703,2.54767 -1.70704,4.08187h-34.32161c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h103.2c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-34.32161c-0.00001,-1.53421 -0.61486,-3.00442 -1.70704,-4.08187c-1.09219,-1.07746 -2.57061,-1.67228 -4.10468,-1.65146zM34.4,45.86667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h80.26667c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-91.73333z"></path></g></g></svg><span>`;

//تخزين  نص 
    localStorage.setItem(id, JSON.stringify(user));
    id++;
    //تفريغ
    Myform.id.value = id;

    Myform.name.value = null;
    Myform.email.value = null;
    Myform.pass.value = null;

}

function read_data() {
    tbody = document.getElementById("tbody");
    tbody.innerHTML = null;



    for (i = 0; i < localStorage.length; i++) {
        row = tbody.insertRow(-1);
        cell0 = row.insertCell(0);
        cell1 = row.insertCell(1);
        cell2 = row.insertCell(2);
        cell3 = row.insertCell(3);
        cell4 = row.insertCell(4);
        cell5 = row.insertCell(5);
        //تحويل العنصر المخزن من النص 
        user_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

        cell0.innerHTML = user_data.id;
        cell1.innerHTML = user_data.username;
        cell2.innerHTML = user_data.email;
        cell3.innerHTML = user_data.password;
        cell4.innerHTML = '<span onclick="edit_user(this)"><img  src="https://img.icons8.com/material-rounded/24/000000/edit.png"><span>';
        cell5.innerHTML = `<span onclick="delete_user(this)"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#e74c3c"><path d="M74.53333,17.2c-1.53406,-0.02082 -3.01249,0.574 -4.10468,1.65146c-1.09219,1.07746 -1.70703,2.54767 -1.70704,4.08187h-34.32161c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h103.2c2.06765,0.02924 3.99087,-1.05709 5.03322,-2.843c1.04236,-1.78592 1.04236,-3.99474 0,-5.78066c-1.04236,-1.78592 -2.96558,-2.87225 -5.03322,-2.843h-34.32161c-0.00001,-1.53421 -0.61486,-3.00442 -1.70704,-4.08187c-1.09219,-1.07746 -2.57061,-1.67228 -4.10468,-1.65146zM34.4,45.86667v91.73333c0,6.33533 5.13133,11.46667 11.46667,11.46667h80.26667c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-91.73333z"></path></g></g></svg><span>`;

    }}
function delete_all(){
    localStorage.clear();
    read_data();
}

function delete_user(obj){
    row = obj.parentElement.parentElement;
    id = row.firstElementChild.innerHTML;
    localStorage.removeItem(id);
    row.remove();
}

function edit_user(obj) {
    row = obj.parentElement.parentElement.children;
    Myform.id.value = row[0].innerHTML;
    Myform.name.value = row[1].innerHTML;
    Myform.email.value = row[2].innerHTML;
    Myform.pass.value = row[3].innerHTML;
}

function update_user() {
var id = Myform.id.value;
var username = Myform.name.value;
    var email = Myform.email.value;
    var password = Myform.pass.value;
    user = {
        id: id,
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem(id, JSON.stringify(user));
    read_data();
}
function cal(){
    event.preventDefault();
    var mark1=document.getElementById("Mark1").value;
    var mark2=document.getElementById("Mark2").value;
    var mark3=document.getElementById("Mark3").value;
    var mark4=document.getElementById("Mark4").value;
    
    var huors1=document.getElementById("huors1").value;
    var huors2=document.getElementById("huors2").value;
    var huors3=document.getElementById("huors3").value;
    var huors4=document.getElementById("huors4").value;
    var value=((mark1*huors1)+(mark2*huors2)+(mark3*huors3)+(mark4*huors4));
    var value2=(huors1*1)+(huors2*1)+(huors3*1)+(huors4*1);
    var sum=value/value2
    document.getElementById("contner").innerHTML='<span>Cumulative average='+sum+'</span>';
     
    
    
}
