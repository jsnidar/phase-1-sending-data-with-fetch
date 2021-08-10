function submitData(userName, userEmail) {
    let userObj = {
        name: `${userName}`,
        email: `${userEmail}`
    }

    // appendUserInfo = function () {
    //     const userId = document.createElement('div')
    //     userId.innerText = object.id
    //     document.body.appendChild(userId);
    // }

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify(userObj) 
    })
    .then(response => response.json())
    .then((object) => {
        let userId = document.createElement('div')
        userId.innerHTML = object.id
        document.body.appendChild(userId);
    })
    .catch(function(error) {
        let errorMsg = document.createElement('div')
        errorMsg.innerHTML = ("Unauthorized Access")
        document.body.appendChild(errorMsg)
        console.log(error);
    });
}

