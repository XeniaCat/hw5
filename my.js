let button = document.querySelector('.save');
let inputName = document.getElementById('name');
let inputPhone = document.getElementById('phone');
let div = document.getElementById('li');
let ul = document.createElement('ul');
div.appendChild(ul);

if (localStorage.length)  {
    for (let i = 0; i < localStorage.length; i++ ) {
    const li = document.createElement('li');
    ul.appendChild(li);
    let m = {}
     m = JSON.parse(localStorage.getItem(`user${i}`));
    li.innerHTML = `${m.name} - ${m.phone}` ;
    li.id = `user${i}` 
     };
};
// Event click on button
button.addEventListener('click', function (event) {
    event.preventDefault();
    let formName = inputName.value;
    let formPhone = inputPhone.value;
    let user = {};
    if (formName !== '' && formPhone !== '') {
        user.name = formName;
        user.phone = formPhone;
        console.log(`${user.name} ${user.phone}`);
        localStorage.setItem(`user${localStorage.length}`, JSON.stringify(user));
        inputName.value = '';
        inputPhone.value = '';
        const li = document.createElement("li");
        ul.appendChild(li);
        li.id = `user${localStorage.length - 1}` ;
        li.innerHTML = `${user.name} - ${user.phone}` ;
    } else {
        alert('Fill the form');
    }
});
document.querySelector('.delete-all').onclick = myClick;
function myClick() {
    localStorage.clear() ;
    ul.innerHTML = '' ;
};
li.onclick = click ;
function click (event) {
console.log(event.target)
let del = document.getElementById(event.target.id)
del.remove()
localStorage.removeItem(event.target.id)
};
