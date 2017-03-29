            /* Arrays Assignment */

    /* Question-1 and 2 */
function first_second() {
    var new_array = [];     /*JS Literal Notation */
    var array_new = new Array();    /*JS Object Notation */
    document.write("<p>They are Decleared as:<br/><br/>JS Literal Notation:<br>var new_array = [];<p>");
    document.write("JS Object Notation:<br>var array_new = new Array();<p>");
    document.write("<br/><br/><a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-3 */
function third(){
var string_array = ["First_String","Second_String","Third_String"];
document.write("<p>"+string_array+"</p>");
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}
    /* Question-4 */
function fourth(){
var number_array = [1,2,3,4];
document.write("<p>"+number_array+"</p>");
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-5 */
function fifth(){
var bool_array = [true,false];
document.write("<p>"+bool_array+"</p>");
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-6 */
function sixth(){
    var mixed = ["String",10,true,];
    document.write("<p>"+mixed+"</p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-7 */
function seventh(){
    var networks = ["Telenor","Ufone","Mobilink","Zong","Warid"];
    document.write("<p>"+networks+"</p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-8 */
function eight(){
    var education  = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD",];
    document.write("<p>Qualifications:</p>");
    for(var a=0;a < education.length;a++){
        document.write((a+1)+") "+education[a]+"<br/>");
    }
    document.write("<br/><a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-9 */
function ninth(){
    var movies = [];
    movies[0] = "Avengers: Age of Ultron";
    movies[1] = "Spectre";
    movies[2] = "Jurassic World";
    movies[3] = "Inside Out";
    document.write("<h2>Top Movies of 2015</h2>")
    for(var a=0;a < movies.length;a++){
        document.write((a+1)+") "+movies[a]+"<br/>");
    }
    document.write("<h3>Length of Array: "+movies.length+"</h3>")
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-10 */
function tenth(){
    var cars = ["Mustang"," Lamborghini"," Nissan"," Dodge Challenger"];
    document.write("<h2>Favourite Cars</h2><br/>"+cars)
    var first_index = cars.indexOf("Mustang");
    var last_index = cars.indexOf(" Dodge Challenger");
    var first_car = cars.shift();
    var last_car = cars.pop();
    document.write("<p>First Index of The Array: "+first_index+"</p>");
    document.write("<p>First Car of The Array: "+first_car+"</p>");
    document.write("<p>Last Index of The Array: "+last_index+"</p>");
    document.write("<p>Last Car of The Array:"+last_car+"</p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-11 */
function eleventh(){
    var students = ["Hasan", " Mohib", " Qamar", " Asim"];
    var score = [450, 460, 455, 485];
    for(var a = 0; a < students.length; a++){
        document.write("<p>Score Of "+students[a]+" is "+score[a]+" . Percentage: "+((score[a]/500)*100)+"%</p>");
    }
        document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-12 */
function twelfth(){
    var b_colors;
    var colors = ["Red", "Orange", "Blue", "Green"];
    document.write("<p><strong>Original Colours:</strong> "+colors+"</p>");
    window.setTimeout(b_question,100);
    
    function b_question(){
        b_colors = prompt("Which color you want to add in the Beginning");
        colors.unshift(b_colors);
        document.write("<p><strong>Color Added: </strong>"+colors+"</p>");
        window.setTimeout(e_question,100);  /**Setting delay to prompt to show previous data of Array, see (window.setTimeout()) */
    }

    function e_question(){
        b_colors = prompt("Which color you want to add in the End");
        colors.push(b_colors);
        document.write("<p><strong>Color Added: </strong>"+colors+"</p>");
        colors.unshift("Purple","Indigo");
        document.write("<p><strong>Two Color Added: </strong>"+colors+"</p>");
        colors.shift();
        document.write("<p><strong>First Color Removed: </strong>"+colors+"</p>");
        colors.pop();
        document.write("<p><strong>Last Colour Removed: </strong>"+colors+"</p>");
        window.setTimeout(f_question,100);
    }
    function f_question(){
        var indexx = +prompt("At Which Position you Want to Add a Colour?");
        var color_name = prompt("Which Color You Want To Add at That Position?");
        colors.splice(indexx,0,color_name);
        document.write("<p><strong>Color Added at Your Desired Position: </strong>"+colors+"</p>");
        window.setTimeout(g_question,100);
    }
    function g_question(){
    var indexx = prompt("At Which Position You Want to Delete Color from?");
    var color_amount = prompt("How Many Colours You Want To Delete?");
    colors.splice(indexx,color_amount);
    document.write("<p><strong>Color/s removed from your Desired Position: </strong>"+colors+"</p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
    }
}

    /* Question-13 */
function thirteenth(){
var s_student = [240, 140, 560, 400];
document.write("<p>Score of Students: "+s_student+"</p>");
document.write("<p>Score of Students: "+s_student.sort()+"</p>");
document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-14 */
function fourteenth(){
    var fruits = ["Apple","Mango","Banana","Orange"];
    document.write("<p>Fruit List: "+fruits+"</p>");
    document.write("<p>Ordered Fruit List: "+fruits.sort()+"</p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-15 */
function fifteenth(){
    var cities = ["Karachi","Lahore","Islamabad","Multan","Quetta","Peshawar"];
    document.write("<p><strong>Cities</strong>: "+cities+"</p>");
    document.write("<p><strong>Selected Cities</strong>: "+cities.slice(0,3)+"</p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-16 */
function sixteenth(){
    var j_array = ["This","Is","My","Cat"];
     document.write("<p><strong>Array</strong>: "+j_array+"</p>");
     document.write("<p><strong>String</strong>: "+j_array.join(" ")+"</p>");
     document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-17 */
function seventeenth(){
    var devices = ["Keyboard", "Mouse","Printer", "Monitor"];
    document.write("<p>Devices:<br/>"+devices+"</p>")
    for(var a = 0; a < devices.length; a++){
        document.write("<p>Out:<br/>"+devices[a]+"</p>")
    }
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-18 */
function eighteenth(){
    var devices = ["Keyboard", "Mouse","Printer", "Monitor"];
    document.write("<p>Devices:<br/>"+devices+"</p>")
    devices.reverse();
    for(var a = 0; a < devices.length; a++){
        document.write("<p>Out:<br/>"+devices[a]+"</p>")
    }
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-19 */
function nineteenth(){
    var phones = ["Apple", "Samsung","Motorolla","Nokia","Sony"];
    document.write("<select>");
    for(var a=0; a < phones.length; a++){
        document.write("<option>"+phones[a]+"</option>");
    }
    document.write("</select>");
    document.write("<br/><br/><a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-20 */
function twentieth(){
    var multi_array = [[]];
    document.write("<p>It's Decleared as:<br/>var multi_array = [[]];<p>");
    document.write("<a href = 'index.html'><button>Go Back</button></a>");
}

    /* Question-21 */
function twenty_first(){
    var multi_array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
    for(var a=0;a < multi_array.length; a++){
        for(var b=0; b < multi_array[a].length;b++){
            document.write(multi_array[a][b]+" ")
        }
        document.write("<br/>");
    }
    document.write("<br/><a href = 'index.html'><button>Go Back</button></a>");
}