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

  static RetrieveUserDetails(cookieToken){
    return fetch(`http://127.0.0.1:8000/api/user/me/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${cookieToken}`
        },
      }).then(response => response.json());
  }

  static UpdateUserDetails( cookieToken,
                            name = null,
                            email = null,
                          ) {
      const body = {};
      if (name !== null || name !== "") {
        body['name'] = name;
      }
      if (email !== null || email !== "") {
        body['email'] = email;
      }

      return fetch(`http://127.0.0.1:8000/api/user/me/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Token ${cookieToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(response => response.json());
    }

    static ChangeUserPassword( cookieToken,
                                password = null,
                              ) {
      const body = {};
      if (password !== null || password !== "") {
        body['password'] = password;
      }

      return fetch(`http://127.0.0.1:8000/api/user/me/`, {
        method: 'PATCH',
        headers: {
          Authorization: `Token ${cookieToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
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
                  min_sqm = null,
                  max_sqm = null,
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
    if (list_size !== null || list_size !== "") {
      body['list_size'] = list_size;
    }
    if (page_num !== null || page_num !== "") {
      body['page_num'] = page_num;
    }
    if (town !== null || town !== "") {
      body['town'] = town;
    }
    if (flat_type !== null || flat_type !== "") {
      body['flat_type'] = flat_type;
    }
    if (flat_model !== null || flat_model !== "") {
      body['flat_model'] = flat_model;
    }
    if (floor_area_sqm !== null || floor_area_sqm !== "") {
      body['floor_area_sqm'] = floor_area_sqm;
    }
    if (min_sqm !== null || min_sqm !== "") {
      body['min_sqm'] = min_sqm;
    }
    if (max_sqm !== null || max_sqm !== "") {
      body['max_sqm'] = max_sqm;
    }
    if (street_name !== null || street_name !== "") {
      body['street_name'] = street_name;
    }
    if (resale_price !== null || resale_price !== "") {
      body['resale_price'] = resale_price;
    }
    if (min_resale_price !== null || min_resale_price !== "") {
      body['min_resale_price'] = min_resale_price;
    }
    if (max_resale_price !== null || max_resale_price !== "") {
      body['max_resale_price'] = max_resale_price;
    }
    if (month !== null || month !== "") {
      body['month'] = month;
    }
    if (remaining_lease !== null || remaining_lease !== "") {
      body['remaining_lease'] = remaining_lease;
    }
    if (lease_commence_date !== null || lease_commence_date !== "") {
      body['lease_commence_date'] = lease_commence_date;
    }
    if (storey_range !== null || storey_range !== "") {
      body['storey_range'] = storey_range;
    }
    if (id_str !== null || id_str !== "") {
      body['id_str'] = id_str;
    }
    if (block !== null || block !== "") {
      body['block'] = block;
    }
    if (filter_param !== null || filter_param !== "") {
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

  static RetrieveUserFavourite(cookieToken){
    return fetch(`http://127.0.0.1:8000/api/favouriteshdb/favouriteshdb/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${cookieToken}`
        },
      }).then(response => response.json());
  }

  static DeleteUserFavourite(cookieToken, id) {
    return fetch(`http://127.0.0.1:8000/api/favouriteshdb/favouriteshdb/${id}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${cookieToken}`,
      },
    })
      .then((response) => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response;
      })
      .catch((error) => {
        console.error('Error deleting the resource:', error);
        throw error; // You can rethrow the error if you want to handle it further up the chain
      });
  }

  static AddUserFavourite(cookieToken, id, email){
    return fetch(`http://127.0.0.1:8000/api/favouriteshdb/favouriteshdb/`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${cookieToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id_str_hdb": id,
        "email": email,
      })
    }).then(response => response.json());
  }

  static ResetPasswordAPI(email){
    return fetch(`http://127.0.0.1:8000/api/user/password-reset/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
      }),
      credentials: 'include'
    }).then(response => response.json());
  }
}

