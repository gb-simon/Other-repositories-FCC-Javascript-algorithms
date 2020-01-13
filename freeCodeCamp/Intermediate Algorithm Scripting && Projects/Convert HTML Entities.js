function convertHTML(str) {

    var newStr = str.replace(/&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;");
        
            return newStr;
    
        
}

console.log(convertHTML('Stuff in "quotation marks"'))