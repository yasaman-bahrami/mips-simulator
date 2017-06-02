function setControllers(opcode){
	var regWrite = setRegWrite(opcode);
	var regDst = setRegDst(opcode);
	var ALUOpt = setALUOpt(opcode);
	var ALUSrc = setALUSrc(opcode);
	var branchCS = setBranchCS(opcode);
	var memRead = setMemRead(opcode);
	var memWrite = setMemWrite(opcode);
	var memtoReg = setMemtoReg(opcode);
	var controllers = [regDst, ALUOpt, ALUSrc, branchCS, memRead, memWrite, regWrite, memtoReg];
	return controllers;
}
function setRegWrite(opcode){
	var regWrite;
	if(opcode=="sub" || opcode=="add" || opcode=="lw")
		regWrite = 1;
	else
		regWrite = 0;
	return regWrite;
}
function setRegDst(opcode){
	var regDst;
	if(opcode == "sub" || opcode == "add")
		regDst = 1;
	else if(opcode == "lw")
		regDst = 0;
	else
		regDst = "-";
	return regDst;
}
function setALUOpt(opcode){
	var ALUOpt;
	if(opcode == "sub" || opcode == "add")
		ALUOpt = "10";
	else if(opcode == "lw" || opcode == "sw")
		ALUOpt = "00";
	else
		ALUOpt = "01";
	return ALUOpt;
}
function setALUSrc(opcode){
	var ALUSrc;
	if(opcode == "sub" || opcode == "add" || opcode == "beq")
		ALUSrc = 0;
	else if(opcode == "lw" || opcode == "sw")
		ALUSrc = 1;
	return ALUSrc;
}
function setBranchCS(opcode){
	var branchCS;
	if(opcode == "sub" || opcode == "add" || opcode == "lw" || opcode == "sw")
		branchCS = 0;
	else if(opcode == "beq")
		branchCS = 1;
	return branchCS;
}
function setMemRead(opcode){
	var memRead;
	if(opcode == "sub" || opcode == "add" || opcode == "beq" || opcode == "sw")
		memRead = 0;
	else if(opcode == "lw")
		memRead = 1;
	return memRead;
}
function setMemWrite(opcode){
	var memWrite;
	if(opcode == "sub" || opcode == "add" || opcode == "beq" || opcode == "lw")
		memWrite = 0;
	else if(opcode == "sw")
		memWrite = 1;
	return memWrite;
}
function setMemtoReg(opcode){
	var memtoReg;
	if(opcode == "sub" || opcode == "add")
		memtoReg = 0;
	else if(opcode == "lw")
		memtoReg = 1;
	else
		memtoReg = "-";
	return memtoReg;
}
