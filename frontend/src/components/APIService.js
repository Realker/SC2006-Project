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

}