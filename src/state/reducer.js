// example of correct shipping data: 
//shipping: {
//      "payment_method": "Cash on delivery",
//      "billing": {
//       "first_name": "Lenoid",
//        "last_name": "Shalaev",
//        "city": "ekaterinburg",
//        "email": "leonidShalaev@gmail.com",
//        "phone": "9220213469",
//      },
//      "customer_note": "Домофон не работает пожалуйста позвоните по приезду",
//      "shipping": {
//        "address_1": "Малышева 125",
//        "city": "ekaterinburg",
//      },
//      "line_items": [
//        {
//          "product_id": "396",
//          "quantity": "1"
//        },
//        {
//          "product_id": "397",
//          "quantity": "1",
//          "variation_id": "472"
//        }
//      ] 
//    }

const reducer = (state, action) => {
    switch (action.type){
        case 'add payment method':
            return state
        default:
            return state
    }
}

export default reducer