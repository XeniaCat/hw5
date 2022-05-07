let button = document.querySelector('.save');
let inputName = document.getElementById('name');
let inputPhone = document.getElementById('phone');
let div = document.getElementById('li');
let ul = document.createElement('ul');
div.appendChild(ul);
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
        let m = null
        for (let i = 0; i < localStorage.length; i++) {
            const li = document.createElement('li');
            ul.appendChild(li);
            m =localStorage.getItem(`user${i}`);
            li.innerHTML = m;
          }
    } else {
        alert('Fill the form');
    }
});
document.querySelector('.delete-all').onclick = myClick;
function myClick() {
    localStorage.clear()
    ul.innerHTML = ''
};
li.onclick = click
function click () {
    li.innerHTML = ''
    localStorage.removeItem
}