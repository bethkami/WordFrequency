//When text box clicked remove text
var textArea = document.querySelector("textArea");
textArea.addEventListener("click", function(){
    textArea.textContent="";
});


var button = document.querySelector("button");

//Mouse hover over button to change background color
button.addEventListener("mouseover",function(){
    button.classList.add("buttonHover");
});
button.addEventListener("mouseout",function(){
    button.classList.remove("buttonHover");
});

//Click button to calculate frequency, sort and print table
button.addEventListener("click", function(){
    button.classList.add("buttonHover");
    var input = document.getElementById("text").value;
    if (input == 0 || input == "Please enter your text here"){
        alert("Text box is empty. Try again.");
    }else{
        var words = input.split(" ");
        var counts = {};
        var keys=[]; 

        //Look at each word and determine if new word - if yes add, if no don't add
        for(var i=0; i<words.length;i++){
            var word=words[i];
            if(!/\d+/.test(word)){ //Exclude digits
                if(counts[word] === undefined){
                    counts[word]=1;
                    keys.push(word);
                }else{
                    counts[word]=counts[word]+1;
                }
            }
        }

        //Sort words in Array by count
        keys.sort(compare);

        //function compares counts for each word to be returned to sort the word
        function compare(a,b){
            var countA = counts[a];
            var countB = counts[b];
            return countB-countA;
        }

        for (var i = 0; i < keys.length; i++){
            var key = keys[i];       
        }


        //Print words in dynamic table with highest frequency at top
        var makeTable = document.getElementById("TableCount"); 
        var headers = ["Frequency", "Word"];

        //Create header row
        var head = document.createElement("tr");
        for (var i=0; i<headers.length; i++){
            var td = document.createElement("td");
            var text = document.createTextNode(headers[i]);
            td.appendChild(text);
            head.appendChild(td);

            head.classList.add("head");

        }
        makeTable.appendChild(head);

        //Populate table with words and frequencies
        for (var i=0; i<keys.length;i++){
            var tr = document.createElement("tr");
            var td=document.createElement("td");
            var text = document.createTextNode(keys[i]);
            var td2 = document.createElement("td");
            var text2= document.createTextNode(counts[keys[i]]);
            td.appendChild(text);
            tr.appendChild(td);
            td2.appendChild(text2);
            tr.appendChild(td2);
            makeTable.appendChild(tr);
        }
    

    }
})





