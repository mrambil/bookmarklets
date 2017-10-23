$('table.data-table').each(function(k,table){
	console.log(k,table);
	$(table).find('tr').each(function(kt,line){
		$(line).find('td,th').each(function(kc,cell){
			$cell=$(cell);
			if(kc==0||kc==6||kc==7)
				$cell.remove();
			else{
				$cell.text($cell.text());
    	    }
        });
    });
}).parent().find('table,td,th').attr('style','border:1px solid black;border-collapse:collapse;font-family:Arial;padding:8px');

document.write($('table.data-table')[0].outerHTML);
