function formatHTML(string) {
    var html = string.replace('<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head>','')
                    .replace('</html>','')
                    .replace('<body','<div')
                    .replace('</body>','<div>')
                    .replaceAll('<table','<table id="unchanged"')
    return html
}
function markdownTables(html) {
    var count = (html.match(/<table/g) || []).length;
    var result = html
    console.log(count);
    for (let i=0;i<count;i++) {
        result= result.replace('<table id="unchanged"',`<button data-table="table-${i}" onclick="selectTable(this)">Select this table</button><table id="table-${i}"`)
    }
    console.log(result)
    return result
}
function tableCallback (table) {

}
function selectTable(element) {
    var id = element.dataset.table;
    var table = document.getElementById(id);
    console.log(table);
    return tableCallback(table)
}
function cleanHTML(html) {
    var count = (html.match(/<table/g) || []).length;
    var result = html
    console.log(count);
    for (let i=0;i<count;i++) {
        result= result.replace(`<button data-table="table-${i}" onclick="selectTable(this)">Select this table</button><table id="table-${i}"`,'<table id="unchanged"')
    }
    console.log(result)
    return result
}
function getComputedStyleCSSText(element) {
    var style = window.getComputedStyle(element), cssText;
   
    if (style.cssText != "") {
      return style.cssText;
    }
   
    cssText = "";
    for (var i = 0; i < style.length; i++) {
      cssText += style[i] + ": " + style.getPropertyValue(style[i]) + "; ";
    }
    
    return cssText;
  }