function nl2br (str, is_xhtml) {   
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

$('table.data-table').each(function(k,table){
	console.log(k,table);
	$(table).find('tr').each(function(kt,line){
		$(line).find('td,th').each(function(kc,cell){
			$cell=$(cell);
			if(kc==0||kc==6||kc==7)
				$cell.remove();
			else{
				$cell.html(nl2br($cell.text()));
    	    		}
        });
    });
}).parent().find('table,td,th').attr('style','border:1px solid black;border-collapse:collapse;font-family:Arial;padding:8px');

var win = window.open("", "Tasks report", "");
win.document.body.innerHTML = $('table.data-table')[0].outerHTML;
