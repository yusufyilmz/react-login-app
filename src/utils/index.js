export const genderOptions = () => {
    return [
        {
            "text": "",
            "value": "",
        },
        {
            "text": "Male",
            "value": "male",
        },
        {
            "text": "Female",
            "value": "female",
        },

    ];
}



export const checkLocalStoreForm = (index) => {

    let storeUser = JSON.parse(localStorage.getItem('user'))
    if (index === 1) {
        if (storeUser && storeUser.name && storeUser.age) {
            return {
                name: storeUser.name,
                age: storeUser.age
            }
        }
        else {
            return null;
        }
    }

     if (index === 2) {
        if (storeUser && storeUser.gender && storeUser.birthdate) {
            return {
                gender: storeUser.gender,
                birthdate: storeUser.birthdate
            }
        }
        else {
            return null;
        }
    }

}