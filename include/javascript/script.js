function show() {
    let dropdown = document.querySelector('.dropdown-content');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function block() {
    let dropdown = document.querySelector('.background');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}


function none() {
    let dropdown = document.querySelector('.background');
    if (dropdown.style.display === 'block' || dropdown.style.display === '') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}