function setIDEXBuffer(opcode,registers, IFIDBuffer2, IFIDBuffer3, pc){
	var	IDEXBuffer = [];
	if(opcode == "add")
		IDEXBuffer = [IFIDBuffer3,"-",32, registers[1], registers[0], pc];
	else if(opcode == "sub")
		IDEXBuffer = [IFIDBuffer3,"-",34, registers[1], registers[0], pc];
	else
		IDEXBuffer = ["-",IFIDBuffer2,IFIDBuffer3, registers[1], registers[0], pc];
	return IDEXBuffer;
}