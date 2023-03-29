export default class APIService {

    static LoginUser(email, password){
        return fetch('http://127.0.0.1:8000/api/user/token/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": email,
              "password": password
            })
          }).then(response => response.json());
    }


    static RegisterUser(email, password, name){
        return fetch(`http://127.0.0.1:8000/api/user/register/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": email,
              "password": password,
              "name": name
            })
          }).then(response => response.json());
    }

    /* Need to create schema for this before authenticating
    static changePassword(password, newpassword, confirmpassword){
      return fetch(`http://127.0.0.1:8000/api/user/changepassword/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "oldpassword": password,
            "newpassword": newpassword,
            "confirmpassword": confirmpassword
          })
        }).then(response => response.json());
  }*/

}