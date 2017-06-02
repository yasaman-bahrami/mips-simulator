function setEXMEMBuffer(MUX12Result, readData2, ALUResult1, ALUResult0, addResult, branchCS){
	var EXMEMBuffer;
	if(branchCS == 1)
		EXMEMBuffer = [MUX12Result, readData2, ALUResult1, ALUResult0, addResult];
	else
		EXMEMBuffer = [MUX12Result, readData2, ALUResult1, ALUResult0, "-"];
	return EXMEMBuffer;
}