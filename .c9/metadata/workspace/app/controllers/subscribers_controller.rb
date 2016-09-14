{"filter":false,"title":"subscribers_controller.rb","tooltip":"/app/controllers/subscribers_controller.rb","undoManager":{"mark":50,"position":50,"stack":[[{"start":{"row":5,"column":14},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":6,"column":0},"end":{"row":6,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":6,"column":6},"end":{"row":17,"column":33},"action":"insert","lines":["        token = params[:stripeToken]","        ","        customer = Stripe::Customer.create(","            card: token,","            plan: 1020,","            email: current_sign_in.email","        ","            )","            current_user.subscribed = true","            current_user.stripeid = customer.id","            current_user.save","            redirect_to root_path"],"id":4}],[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["#"],"id":5}],[{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"insert","lines":["#"],"id":6}],[{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"remove","lines":["#"],"id":7}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"insert","lines":["#"],"id":8}],[{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"insert","lines":["#"],"id":9}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["#"],"id":10}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["#"],"id":11}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["#"],"id":12}],[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"insert","lines":["#"],"id":13}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["#"],"id":14}],[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["#"],"id":15}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["#"],"id":16}],[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"remove","lines":["#"],"id":17}],[{"start":{"row":23,"column":8},"end":{"row":23,"column":9},"action":"remove","lines":["#"],"id":18}],[{"start":{"row":24,"column":11},"end":{"row":24,"column":12},"action":"remove","lines":["#"],"id":19}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"remove","lines":["#"],"id":20}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"remove","lines":["#"],"id":21}],[{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"remove","lines":["#"],"id":22}],[{"start":{"row":29,"column":10},"end":{"row":29,"column":11},"action":"remove","lines":["#"],"id":23}],[{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"remove","lines":["#"],"id":24}],[{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"remove","lines":["#"],"id":25}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"remove","lines":["#"],"id":26}],[{"start":{"row":33,"column":7},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":27},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":32,"column":33},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":33,"column":0},"end":{"row":33,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":33,"column":12},"end":{"row":35,"column":29},"action":"insert","lines":["rescue Stripe::CardError => e","  flash[:error] = e.message","  redirect_to new_charge_path"],"id":32}],[{"start":{"row":35,"column":2},"end":{"row":35,"column":4},"action":"insert","lines":["  "],"id":33}],[{"start":{"row":35,"column":4},"end":{"row":35,"column":8},"action":"insert","lines":["    "],"id":34}],[{"start":{"row":34,"column":2},"end":{"row":34,"column":4},"action":"insert","lines":["  "],"id":35}],[{"start":{"row":34,"column":4},"end":{"row":34,"column":8},"action":"insert","lines":["    "],"id":36}],[{"start":{"row":34,"column":8},"end":{"row":34,"column":12},"action":"insert","lines":["    "],"id":37}],[{"start":{"row":35,"column":29},"end":{"row":35,"column":30},"action":"remove","lines":["e"],"id":38}],[{"start":{"row":35,"column":28},"end":{"row":35,"column":29},"action":"remove","lines":["g"],"id":39}],[{"start":{"row":35,"column":27},"end":{"row":35,"column":28},"action":"remove","lines":["r"],"id":40}],[{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"remove","lines":["a"],"id":41}],[{"start":{"row":35,"column":25},"end":{"row":35,"column":26},"action":"remove","lines":["h"],"id":42}],[{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"remove","lines":["c"],"id":43}],[{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":["s"],"id":44}],[{"start":{"row":35,"column":25},"end":{"row":35,"column":26},"action":"insert","lines":["u"],"id":45}],[{"start":{"row":35,"column":26},"end":{"row":35,"column":27},"action":"insert","lines":["b"],"id":46}],[{"start":{"row":35,"column":27},"end":{"row":35,"column":28},"action":"insert","lines":["s"],"id":47}],[{"start":{"row":35,"column":28},"end":{"row":35,"column":29},"action":"insert","lines":["c"],"id":48}],[{"start":{"row":35,"column":29},"end":{"row":35,"column":30},"action":"insert","lines":["r"],"id":49}],[{"start":{"row":35,"column":30},"end":{"row":35,"column":31},"action":"insert","lines":["i"],"id":50}],[{"start":{"row":35,"column":31},"end":{"row":35,"column":32},"action":"insert","lines":["b"],"id":51}],[{"start":{"row":35,"column":32},"end":{"row":35,"column":33},"action":"insert","lines":["e"],"id":52}],[{"start":{"row":7,"column":0},"end":{"row":17,"column":35},"action":"remove","lines":["        ","        customer = Stripe::Customer.create(","            card: token,","            plan: 1020,","            email: current_sign_in.email","        ","            )","            current_user.subscribed = true","            current_user.stripeid = customer.id","            current_user.save","            redirect_to root_path  "],"id":53}],[{"start":{"row":6,"column":42},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":54}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":42},"action":"remove","lines":["              token = params[:stripeToken]"],"id":55}],[{"start":{"row":5,"column":14},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":56}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":14},"end":{"row":5,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1473827687159,"hash":"bb940ca36d0c67d8c4f097479e743391ad26c38c"}