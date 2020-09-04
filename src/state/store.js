import {createStore} from "redux"
import reducer from './reducer'

const initialState = {
    shipping: {
      "payment_method": "Cash on delivery",
      "billing": {
        "first_name": "Lenoid",
        "last_name": "Shalaev",
        "city": "ekaterinburg",
        "email": "leonidShalaev@gmail.com",
        "phone": "9220213469",
      },
      "customer_note": "",
      "shipping": {
        "address_1": "Малышева 125",
        "city": "ekaterinburg",
      },
      "line_items": [
        {
          "product_id": "396",
          "quantity": "1"
        },
        {
          "product_id": "397",
          "quantity": "1",
          "variation_id": "472"
        }
      ]
    }
}

const store = createStore(reducer, initialState)

export default store

