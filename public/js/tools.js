function crop(value){//Дороботанный аналог parseInt
	if(typeof(value)=='number')
		return value;
	if(typeof(value)!='string')
		return 0;
	var result = "";
	for(var i = 0; parseInt(value[i]) || value[i]=='0';i++)
	{	
		result += value[i];
	}
	if(result!="")
		return parseInt(result);
	return 0;
}
function deleteChild(obj,param){//(param не является обязательным аргументом) param==1 - УДАЛЕНИЕ ОБЪЕКТА И ВСЕХ ЕГО ДОЧЕРНИХ ЭЛЕМЕНТОВ иначе удаление ТОЛЬКО дочерних элементов но не объекта!
	if(arguments.length==1)
		param = 0;
	for(i = obj.childNodes.length-1; i>=0;i--)
	{
		if(obj.childNodes[i].legnth>0)
			deleteChild(obj.childNodes[i]);//рекурсия
		obj.removeChild(obj.childNodes[i]);
	}
	if(param==1)
		obj.parentNode.removeChild(obj);
		
}
function position(obj,param)
{
	switch(param)
	{
		case "center": $(obj).css({
		'position': 'absolute',
		'left': ($(document).width()/2)-($(obj).outerWidth()/2),
		'top': ($(document).height()/2)-($(obj).outerHeight()/2)		
		}); 
			break;	
	}
}
Number.prototype.toRadian = function () {
    return this * Math.PI / 180;
};