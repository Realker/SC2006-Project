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

  static RetrieveLatestHDB(list_size, page_num){
    return fetch(`http://127.0.0.1:8000/api/hdbflat/filter_using_post/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "page_num": page_num,
          "list_size": list_size
        })
      }).then(response => response.json());
  }

  static FilterHDB( list_size = null,
                    page_num = null,
                    town = null,
                    flat_type = null,
                    flat_model = null,
                    floor_area_sqm = null,
                    street_name = null,
                    resale_price = null,
                    min_resale_price = null,
                    max_resale_price = null,
                    month = null,
                    remaining_lease = null,
                    lease_commence_date = null,
                    storey_range = null,
                    id_str = null,
                    block = null,
                    filter_param = null
                  ) {
      const body = {};
      if (list_size !== null) {
      body['list_size'] = list_size;
      }
      if (page_num !== null) {
      body['page_num'] = page_num;
      }
      if (town !== null) {
      body['town'] = town;
      }
      if (flat_type !== null) {
      body['flat_type'] = flat_type;
      }
      if (flat_model !== null) {
      body['flat_model'] = flat_model;
      }
      if (floor_area_sqm !== null) {
      body['floor_area_sqm'] = floor_area_sqm;
      }
      if (street_name !== null) {
      body['street_name'] = street_name;
      }
      if (resale_price !== null) {
      body['resale_price'] = resale_price;
      }
      if (min_resale_price !== null) {
      body['min_resale_price'] = min_resale_price;
      }
      if (max_resale_price !== null) {
      body['max_resale_price'] = max_resale_price;
      }
      if (month !== null) {
      body['month'] = month;
      }
      if (remaining_lease !== null) {
      body['remaining_lease'] = remaining_lease;
      }
      if (lease_commence_date !== null) {
      body['lease_commence_date'] = lease_commence_date;
      }
      if (storey_range !== null) {
      body['storey_range'] = storey_range;
      }
      if (id_str !== null) {
      body['id_str'] = id_str;
      }
      if (block !== null) {
      body['block'] = block;
      }
      if (filter_param !== null) {
      body['filter_param'] = filter_param;
      }

      return fetch(`http://127.0.0.1:8000/api/hdbflat/filter_using_post/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(response => response.json());
    }
}