function setIFIDBuffer(opcode, operand1, operand2, operand3,pc){
	var	IFIDBuffer;
	if(opcode == "add")
		IFIDBuffer = [0, operand2, operand3, operand1, 0, 32, pc];
	else if(opcode == "sub")
		IFIDBuffer = [0, operand2, operand3, operand1, 0, 34, pc];
	else if(opcode == "lw")
		IFIDBuffer = [35, operand3, operand1, operand2, pc];
	else if(opcode == "sw")
		IFIDBuffer = [43, operand3, operand1, operand2, pc];
	else
		IFIDBuffer = [4, operand1, operand2, operand3, pc];
	return IFIDBuffer;
}
function setTableHeader(element, opcode){
	element.innerHTML = "";
	var header;
	if(opcode == "sub" || opcode == "add")
		header = ["op", "rs", "rt", "rd", "shamt", "funct", "pc"];
	else
		header = ["op", "rs", "rt", "offset","pc"];
	var row = element.insertRow(0);
	for (var i=0; i<header.length; i++)
		row.insertCell(i).innerHTML = header[i];
}