
       function fruitShop(arg1,arg2,arg3)
        {
            var fruit = arg1
            var day =arg2;
            var amount = Number(arg3);
 
            var price = 0;
 
 
 
            if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday" )
            {
                if (fruit == "banana")
                {
                    price = amount * 2.5;
                }
                else if (fruit == "apple")
                    price=amount*1.2
                {
                    price = amount * 1.20;
                }
                if (fruit == "orange")
 
                {
                    price = amount * 0.85;
                }
                else if (fruit == "grapefruit")
 
                {
                    price = amount * 1.45;
                }
                else if (fruit == "kiwi")
 
                {
                    price = amount * 2.70;
 
                }
                else if (fruit == "pineapple")
 
                {
                    price = amount * 5.50;
                }
                else if (fruit == "grapes")
 
                {
                    price = amount * 3.85;
                }
 
                else
                {
                    console.log("error");
                }
 
            }
 
 
                else if (day == "saturday" || day == "sunday")
                {
                    if (fruit == "banana")
                    {
                        price = amount * 2.7;
                    }
                    else if (fruit == "apple")
 
                    {
                        price = amount * 1.25;
                    }
                    else if (fruit == "orange")
                    {
                        price = amount * 0.90;
                    }
                    else if (fruit == "grapefruit")
 
                    {
                        price = amount * 1.60;
                    }
                    else if (fruit == "kiwi")
 
                    {
                        price = amount * 3.00;
 
                    }
                    else if (fruit == "pineapple")
 
                    {
                        price = amount * 5.60;
                    }
                    else if (fruit == "grapes")
 
                    {
                        price = amount * 4.20;
                    }
                    else
                    {
                      console.log("error");
                    }
                        console.log(price.toFixed(2));
                }
            }
fruitShop('apple','Tuesday',2)