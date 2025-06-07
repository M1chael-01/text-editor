

const fontSizeElement = document.querySelector("#fontSize"),
fontName = document.querySelector("#fontName");
options = document.querySelectorAll(".options button");
textArea = document.querySelector("#text-input"),
backColor = document.querySelector("#backColor");

const fonts = ["Arial" , "Times new Roman" , "Poppins", "sans-serif"];
const styles = {
    fontSize:"fontsize",
    fontFamily:"font name",
  };
  let userText = "",splitted,selectedText = "",selectionEnd = "";

function setFontSize(){
    for(let i = 10;i<=40;i+=2){
        const optionSize = document.createElement("option");
        optionSize.value = i;
        optionSize.textContent = `${i} px`;
        fontSizeElement.appendChild(optionSize);
    }
}

function setFontFamily(){
    fonts.forEach((i) =>{
        const optionFontFamily = document.createElement("option");
        optionFontFamily.value = i;
        optionFontFamily.textContent = i;
        fontName.appendChild(optionFontFamily);
    })
}

function setStyle(style) {
    const selection = document.getSelection();
    switch (style) {
        case "bold":
           document.execCommand("bold", false, null);
            break;
        case "italic":
            document.execCommand("italic", false, null);
            break;
        case "underline":
            document.execCommand("underline", false, null);
            break;
         case "strikethrough":
            document.execCommand("strikethrough", false, null);
            break;
        case "superscript":
            document.execCommand("superscript", false, null);
            break;
        case "subscript":
            document.execCommand("subscript", false, null);
            break;
        case "insertOrderedList":
            document.execCommand("insertOrderedList" , false , null);
            break;   
        case "insertUnorderedList":
            document.execCommand("insertUnorderedList" , false , null);
            break;   
         case "undo":
            document.execCommand("undo" , false , null);
            break;   
        case "redo":
            document.execCommand("redo", false, null);
            break;      
        case "createLink":
            document.execCommand("createLink" , false , null);
            break;  
        case "unlink":
            document.execCommand("unlink" , false , null);
            break;
        case "justifyLeft":
            document.execCommand("justifyLeft", false, null);
            break;
         case "justifyCenter":
            document.execCommand("justifyCenter", false, null);
            break;
         case "justifyRight":
            document.execCommand("justifyRight" , false , null);
            break;   
         case "justifyFull":
            document.execCommand("justifyFull" , false , null);   
         case "indent":
            document.execCommand("indent" , false , null);
            break;
        case "outdent":
            document.execCommand("outdent");
            break;
        case "fontSize":
            document.execCommand("fontSize" , false , styles.fontSize);
            break;
        case "fontFamily":
                document.execCommand("fontName" , false , styles.fontFamily);
                break;    
                
    }
selection.removeAllRanges();    
selection.removeAllRanges();
}

options.forEach((i) =>{
    i.onclick =  () => setStyle(i.id);
})

textArea.addEventListener("mouseup", function () {
        selectedText = document.getSelection().toString();
        selectionEnd = textArea.selectionEnd;
});

textArea.addEventListener("input" , ()=>{
    userText+= textArea.textContent
 splitted = userText.split("");
})

fontName.addEventListener("change" , (e) =>{
    styles.fontFamily = (e.target.value);
    setStyle("fontFamily")
})
fontSizeElement.addEventListener("change" , (e) =>{
    styles.fontSize = (e.target.value);
    setStyle("fontSize");
})

backColor.addEventListener("input" , (e) =>{
    textArea.style.background = e.target.value;
})

onload = function(){
    setFontSize();
    setFontFamily();
}