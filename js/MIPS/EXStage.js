function MUX12(IDEXBuffer0, IDEXBuffer1, regDst){
	if (regDst == 0)
		MUX12Result = IDEXBuffer1;
	else if (regDst == 1)
		MUX12Result = IDEXBuffer0;
	else
		MUX12Result = "-";
	return MUX12Result;
}
function ALUControlValue(IDEXBuffer2, ALUOP){
	var ALUInput1 = IDEXBuffer2;
	var ALUControlResult = [ALUInput1, ALUOP];
	return ALUControlResult;
}
function ALU(readData1, MUX11Result, ALUControlValueResult){
	var zero = 0;
	var ALUResult1;
	if(ALUControlValueResult[1] == "10"){
		if(ALUControlValueResult[0]==32)
			ALUResult1 = parseInt(readData1)+parseInt(MUX11Result);
		else if(ALUControlValueResult[0]==34)
			ALUResult1 = parseInt(readData1)-parseInt(MUX11Result);
	}else if(ALUControlValueResult[1] == "01"){
		if(readData1 == MUX11Result)
			zero = 1;
		ALUResult1 = "-";
	}else if(ALUControlValueResult[1] == "00"){
		ALUResult1 = parseInt(ALUControlValueResult[0])+ parseInt(readData1);
	}
	var ALUResult = [zero, ALUResult1];
	return ALUResult;
}
function MUX11(IDEXBuffer2, IDEXBuffer3, ALUSrc){
	var MUX11Result;
	if (ALUSrc == 0)
		MUX11Result = IDEXBuffer3;
	else
		MUX11Result = IDEXBuffer2;
	return MUX11Result;
}
function shiftLeft2(IDEXBuffer2){
	var shiftLeft2;
	if(IDEXBuffer2 != "-")
		shiftLeft2 = parseInt(IDEXBuffer2)*4;
	else shiftLeft2 = "-"
	return shiftLeft2;
}
function add(shiftLeft2Result, IDEXBuffer5){
	var input1 = IDEXBuffer5;
	var input2 = shiftLeft2Result;
	var addResult;
	if(input2 != "-")
		addResult = parseInt(input1)+parseInt(input2);
	else
		addResult = "-";
	return addResult;
}