function currencyEDconverter(number,input,output){
    number=Number(number)
    input=input.toLowerCase()
    output=output.toLowerCase()

        var mm = 1000.0;
        var cm = 100.0;
        var mi = 0.000621371192;
        var inn = 39.3700787;
        var km = 0.001;
        var ft = 3.2808399;
        var yd = 1.0936133;
        var m = 1.0;
 
        if (input == "mm") { number = number / mm; }
        else if (input == "cm") { number = number / cm; }
        else if (input == "mi") { number = number / mi; }
        else if (input == "in") { number = number / inn; }
        else if (input == "km") { number = number / km; }
        else if (input == "ft") { number = number / ft; }
        else if (input == "yd") { number = number / yd; }
        else if (input == "m") { number = number / m; }
       
 
        if (output == "mm") { number = number * mm; }
        else if (output == "cm") { number = number * cm; }
        else if (output == "mi") { number = number * mi; }
        else if (output == "in") { number = number * inn; }
        else if (output == "km") { number = number * km; }
        else if (output == "ft") { number = number * ft; }
        else if (output == "yd") { number = number * yd; }
        else if (output == "m") { number = number * m; }
        number=String(number)
        console.log(`${number.toFixed(number.length-1)} ${output}`);
}

currencyEDconverter(150,'mi','in')