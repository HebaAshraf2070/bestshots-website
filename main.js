let registerBtn = document.getElementById('registerBtn');
let signBackBtn = document.getElementById('signBackBtn');
let regForm = document.getElementById('regForm');
let logForm = document.getElementById('logForm');
let signBackBtn2 = document.getElementById('signBackBtn2');
let registerBtn2 = document.getElementById('registerBtn2');
// var username = document.getElementById('username');

let regInputList = [];


registerBtn.addEventListener('click', function registerForm() {

    regForm.classList.remove('d-none')
    logForm.classList.add('d-none');

})

signBackBtn.addEventListener('click', function loginForm() {
    regForm.classList.add('d-none')
    logForm.classList.remove('d-none');
})


signBackBtn2.addEventListener('click', function loginForm2() {
    regForm.classList.add('d-none')
    logForm.classList.remove('d-none');
})

registerBtn2.addEventListener('click', function backToLoginForm2() {
    regForm.classList.remove('d-none')
    logForm.classList.add('d-none');

})


// login 
//888888888888888888888888888888888888888888888888888888888888888888

let emailInput = document.getElementById('emailInput');
let passInput = document.getElementById('passInput');
let loginBtn = document.getElementById('loginBtn');
let reg = document.getElementById('reg');
let newuser = document.getElementById('newuser');



var usersession = JSON.parse(localStorage.getItem('usernames'));




loginBtn.addEventListener('click', function loginto() {
    var found = false;

    for (var i = 0; i < regInputList.length; i++) {

        if ((regInputList[i].email === emailInput.value || regInputList[i].phone === emailInput.value) &&
            regInputList[i].pass1 === passInput.value) {


            usersession = regInputList[i].firstName;
            localStorage.setItem('usernames', JSON.stringify(usersession))
            console.log("exist ok log in");
            found = true;
            break;
        }

    }

    if (found) {
        //   Login successful, do something
        console.log('Login successful');
        container.classList.add('d-none');
        container2.classList.remove('d-none');
        newuser.classList.add('d-none');
        reg.classList.remove('d-none');
        imgsadded.classList.remove('d-none');
    } else {
        //   Login failed, do something
        console.log('Login failed');
        container.classList.remove('d-none');
        container2.classList.add('d-none');
        imgsadded.classList.add('d-none');
        newuser.classList.remove('d-none');
        reg.classList.add('d-none');

    }



})


let fNameInput = document.getElementById('fNameInput');
let surNameInput = document.getElementById('surNameInput');
let emailRegInput = document.getElementById('emailRegInput');
let phoneInput = document.getElementById('phoneInput');
let pass1RegInput = document.getElementById('pass1RegInput');
let pass2RegInput = document.getElementById('pass2RegInput');
let siginUpBtn = document.getElementById('siginUpBtn');
let container = document.getElementById('container');
let logoutbtn = document.getElementById('logoutbtn');
let container2 = document.querySelector('.container2');
let signinback1 = document.getElementById('signinback1');
let signinback2 = document.getElementById('signinback2');


if (localStorage.getItem('regInput') != null) {
    regInputList = JSON.parse(localStorage.getItem('regInput'));

}



siginUpBtn.addEventListener('click', function check() {

    if (isAllInputValid() && isExistInput() == false) {

        var RegInput = {
            firstName: fNameInput.value,
            surname: surNameInput.value,
            email: emailRegInput.value,
            phone: phoneInput.value,
            pass1: pass1RegInput.value,

        }

        regInputList.push(RegInput);
        localStorage.setItem('regInput', JSON.stringify(regInputList));

        console.log('Registration successful.');
        container.classList.add('d-none');
        container2.classList.remove('d-none');
        signinback1.classList.remove('d-none');
        signinback2.classList.add('d-none');
    } else {
        console.log('Invalid input or existing input found');
        container.classList.remove('d-none');
        container2.classList.add('d-none');
        signinback2.classList.remove('d-none');
        signinback1.classList.add('d-none');
    }
});



document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is already logged in
    var usersession = JSON.parse(localStorage.getItem('usernames'));

    if (usersession) {
        showLoggedInPage();
    }
});

logoutbtn.addEventListener('click', function outpage() {
    container2.classList.add('d-none');
    imgsadded.classList.add('d-none');
    container.classList.remove('d-none');
    localStorage.removeItem('usernames');
    imgsadded.classList.add('d-none');
    showLoggedOutPage();
})

var imgsadded = document.getElementById('imgsadded');
var username = document.getElementById('username');

// Assuming you have some value for i
// var i = 0;


function showLoggedInPage() {
    container.classList.add('d-none');
    container2.classList.remove('d-none');
    newuser.classList.add('d-none');
    reg.classList.remove('d-none');
    imgsadded.classList.remove('d-none');
    // username.innerHTML = `Welcome ${regInputList[i].firstName} ${regInputList[i].surname}!`;

}

function showLoggedOutPage() {
    container.classList.remove('d-none');
    container2.classList.add('d-none');
    newuser.classList.remove('d-none');
    reg.classList.add('d-none');
    imgsadded.classList.add('d-none');
}






function isExistInput() {
    for (var i = 0; i < regInputList.length; i++) {
        if (regInputList[i].email == emailRegInput.value
            || regInputList[i].phone == phoneInput.value) {


            return true;
        }
    }
    // why we made return out of loop as we know when loop see
    // return it stop excuition of anything after return 
    // so this like we say to func go excute this loop and if 
    // inside loop is happened make loop return true if not then loop 
    // will be useless and go out the loop and make func return false 
    return false;
}





function isAllInputValid() {
    if (validusername() && validsurname() && validMailRegs() &&
        validphoneRegs() && validpass()) {

        return true;

    } else {
        return false;
    }
}



// first name validation
// 88888888888888888888888888888888888888888888888888888888888888888888
let fnamerror = document.querySelector('.fnamerror');
let fnamerror2 = document.querySelector('.fnamerror2');

function validusername() {
    console.log('Validating username...');
    var usernamepattern = /^[a-zA-Z0-9]{1,20}$/;
    if (usernamepattern.test(fNameInput.value) == true) {
        fNameInput.classList.add("is-valid");
        fNameInput.classList.remove("is-invalid");
        fnamerror.classList.add('d-none');
        fnamerror2.classList.add('d-none');
        return true;

    } else if (fNameInput.value == "") {
        fnamerror2.classList.remove('d-none');
        fNameInput.classList.add("is-invalid");
        fNameInput.classList.remove("is-valid");
        fnamerror.classList.add('d-none');
        return false;
    }

    else {
        fNameInput.classList.add("is-invalid");
        fnamerror.classList.remove('d-none');
        fnamerror2.classList.add('d-none');
        return false;
    }
};


// surname validation
let snamerror = document.querySelector('.snamerror');
let snamerror2 = document.querySelector('.snamerror2');

function validsurname() {
    console.log('Validating username...');
    var surnamepattern = /^[a-zA-Z0-9]{1,20}$/;
    if (surnamepattern.test(surNameInput.value) == true) {
        surNameInput.classList.add("is-valid");
        surNameInput.classList.remove("is-invalid");
        snamerror.classList.add('d-none');
        snamerror2.classList.add('d-none');
        return true;

    } else if (surNameInput.value == "") {
        snamerror2.classList.remove('d-none');
        surNameInput.classList.add("is-invalid");
        surNameInput.classList.remove("is-valid");
        snamerror.classList.add('d-none');
        return false;
    }

    else {
        surNameInput.classList.add("is-invalid");
        snamerror.classList.remove('d-none');
        snamerror2.classList.add('d-none');
        return false;
    }
};


//  email validation
// 88888888888888888888888888888888888888888888888888888888888888888888

let mailerror = document.querySelector('.mailerror');
let mailerror2 = document.querySelector('.mailerror2 ');



function validMailRegs() {
    console.log('Validating username...');
    var regexEmail = /^[a-zA-Z0-9_.+-]{1,30}@(gmail|yahoo).com$/;
    if (regexEmail.test(emailRegInput.value) == true) {
        emailRegInput.classList.add("is-valid");
        emailRegInput.classList.remove("is-invalid");
        mailerror.classList.add('d-none');
        mailerror2.classList.add('d-none');
        return true;

    } else if (emailRegInput.value == "") {
        mailerror2.classList.remove('d-none');
        emailRegInput.classList.add("is-invalid");
        emailRegInput.classList.remove("is-valid");
        mailerror.classList.add('d-none');
        return false;
    }

    else {
        emailRegInput.classList.add("is-invalid");
        mailerror.classList.remove('d-none');
        mailerror2.classList.add('d-none');
        return false;
    }
};


//  phone validation
// 88888888888888888888888888888888888888888888888888888888888888888888

let phonerror = document.querySelector('.phonerror');
let phonerror2 = document.querySelector('.phonerror2');



function validphoneRegs() {
    console.log('Validating username...');
    var regexPhone = /^(002|\+2)?01[0125][0-9]{8}$/;
    if (regexPhone.test(phoneInput.value) == true) {
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid");
        phonerror.classList.add('d-none');
        phonerror2.classList.add('d-none');
        return true;

    } else if (phoneInput.value == "") {
        phonerror2.classList.remove('d-none');
        phoneInput.classList.add("is-invalid");
        phoneInput.classList.remove("is-valid");
        phonerror.classList.add('d-none');
        return false;
    }

    else {
        phoneInput.classList.add("is-invalid");
        phonerror.classList.remove('d-none');
        phonerror2.classList.add('d-none');
        return false;
    }
};


// password validation
// 88888888888888888888888888888888888888888888888888888888888888888888



let wp = document.querySelector('.wp');
let mp = document.querySelector('.mp');
let sp = document.querySelector('.sp');
let wpd = document.querySelector('.wpd');
let mpd = document.querySelector('.mpd');
let passerror2 = document.querySelector('.passerror2');

function validpass() {
    let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    let weakPasswordRegex = /^(?=.*[a-zA-Z\d]).{1,3}$/;
    let mediumPasswordRegex = /^(?=.*[a-zA-Z\d]).{4,7}$/;


    if (strongPasswordRegex.test(pass1RegInput.value)) {
        sp.classList.remove('d-none');
        mp.classList.add('d-none');
        wp.classList.add('d-none');
        mpd.classList.add('d-none');
        wpd.classList.add('d-none');
        passerror2.classList.add('d-none');
        pass1RegInput.classList.remove("is-invalid");
        pass1RegInput.classList.add("is-valid");
        return true;
    } else if (mediumPasswordRegex.test(pass1RegInput.value)) {
        sp.classList.add('d-none');
        mp.classList.remove('d-none');
        wp.classList.add('d-none');
        mpd.classList.remove('d-none');
        wpd.classList.add('d-none');
        passerror2.classList.add('d-none');
        pass1RegInput.classList.add("is-valid");
        pass1RegInput.classList.remove("is-invalid");
        return true;
    } else if (weakPasswordRegex.test(pass1RegInput.value)) {
        sp.classList.add('d-none');
        mp.classList.add('d-none');
        wp.classList.remove('d-none');
        mpd.classList.add('d-none');
        wpd.classList.remove('d-none');
        passerror2.classList.add('d-none');
        pass1RegInput.classList.add("is-invalid");
        pass1RegInput.classList.remove("is-valid");
        return true;
    } else if (pass1RegInput.value === "") {
        passerror2.classList.remove('d-none');
        sp.classList.add('d-none');
        mp.classList.add('d-none');
        wp.classList.add('d-none');
        mpd.classList.add('d-none');
        wpd.classList.add('d-none');
        pass1RegInput.classList.add("is-invalid");
        pass1RegInput.classList.remove("is-valid");
        return false;
    } else {
        console.log('e')
    }
};

//
// 888888888888888888888888888888888888888888888888888888888888888888

function handleFileSelect(event) {
    const fileInput = event.target;
    const imageTitleInput = document.getElementById('imageTitle');

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        // You can access the selected file using fileInput.files[0]
        // For example, you can display the file name in the image title input
        imageTitleInput.value = fileInput.files[0].name;
    }
}

// Function to handle image upload
function uploadImage() {
    const imageTitle = document.getElementById('imageTitle').value;
    // Add your logic to handle image upload here using the selected file and title
    console.log('Uploading image with title:', imageTitle);
}



document.addEventListener('DOMContentLoaded', function () {
    loadImages();
});

function uploadImage() {
    var uploadInput = document.getElementById('uploadInput');
    var imageTitleInput = document.getElementById('imageTitle');
    var gallery = document.getElementById('gallery');
    var imgadd = document.getElementById('imgadd');


    var file = uploadInput.files[0];
    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var imageData = e.target.result;

            // Save the image data and title to localStorage
            saveImage(imageData, imageTitleInput.value);

            // Display the image in the gallery
            displayImage(imageData, imageTitleInput.value, gallery);

            // Clear input fields after upload
            uploadInput.value = '';
            imageTitleInput.value = '';
        };

        reader.readAsDataURL(file);
    }
}

function saveImage(imageData, title) {
    // Get existing images from localStorage or initialize an empty array
    var images = JSON.parse(localStorage.getItem('galleryImages')) || [];

    // Add the new image data and title to the array
    images.push({ imageData: imageData, title: title });

    // Save the updated array back to localStorage
    localStorage.setItem('galleryImages', JSON.stringify(images));
}

function loadImages() {
    var imgadd = document.getElementById('imgadd');

    // Get existing images from localStorage
    var images = JSON.parse(localStorage.getItem('galleryImages')) || [];

    // Display each image in the gallery
    images.forEach(function (image) {
        displayImage(image.imageData, image.title, gallery);
    });
}

function displayImage(imageData, title, container) {
    var imgContainer = document.createElement('div');
    imgContainer.className = 'uploaded-image-container';

    var img = document.createElement('img');
    img.src = imageData;
    img.className = 'uploaded-image';

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function () {
        deleteImage(imgContainer, imageData);
    });

    imgContainer.appendChild(img);
    imgContainer.appendChild(deleteBtn);

    // Append the image to the gallery
    container.appendChild(imgContainer);

    // Add mouseover/mouseout event listeners to show/hide delete button
    imgContainer.addEventListener('mouseover', function () {
        deleteBtn.style.display = 'block';
    });

    imgContainer.addEventListener('mouseout', function () {
        deleteBtn.style.display = 'none';
    });
}

function deleteImage(container, imageData) {
    // Remove the image container from the gallery
    container.remove();

    // Get existing images from localStorage
    var images = JSON.parse(localStorage.getItem('galleryImages')) || [];

    // Filter out the deleted image based on imageData
    var updatedImages = images.filter(function (image) {
        return image.imageData !== imageData;
    });

    // Save the updated array back to localStorage
    localStorage.setItem('galleryImages', JSON.stringify(updatedImages));
}

// Attach event listener to the upload button
document.getElementById('uploadButton').addEventListener('click', function () {
    document.getElementById('uploadInput').click();
});

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888

