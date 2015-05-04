$('#subtitle').click(function(){
	$('#subtitle').hide();
});

$('#username').keyup(function(){
	var username_value = $('#username').val();
	$('#username_feedback').html(username_value.length);
});

$('#date_it').click(function(){
	var from_date_val = $('#from_date').val();
	$('#from_date_feedback').html('URL: http://openpse.com/api/quotes/?stocks=BDO&from_date=' + from_date_val);
});