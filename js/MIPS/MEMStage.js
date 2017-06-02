var memoryOutput = "";
function DataMemory(EXMEMBuffer1, EXMEMBuffer2, memRead, memWrite, dataMemory){
	memoryOutput = "";
	var memory = getDataMemory(dataMemory);
	var readAddress = EXMEMBuffer2;
	var writeAddress = EXMEMBuffer2;
	var writeData = EXMEMBuffer1;
	var readData = "-";
	if(memRead == 1){
		for(var i=0; i<memory.length; i++){
			if(memory[i].address == readAddress)
				readData = memory[i].value;
		}
	}else if(memWrite == 1){
		for(var i=0; i<memory.length; i++){
			if(memory[i].address == writeAddress)
				memory[i].value = writeData;
		}
	}
		
	for(var i=0; i<memory.length; i++){
		memoryOutput = memoryOutput+"<"+memory[i].address+"><"+memory[i].value+">";
		if(i!= memory.length - 1)
			memoryOutput = memoryOutput+"\n";
	}
	return readData;
}
function branch(ALUResult0, branchCS){
	var branchResult = 0;
	if (ALUResult0 == 1 && branchCS == 1) 
		branchResult = 1;
	else
		branchResult = 0;
	return branchResult; 		
}
function MUX3(pc, addResult, branchResult){
	var MUX3Result;
	if(branchResult == 0)
		MUX3Result = pc;
	else
		MUX3Result = addResult;
	return MUX3Result;
}
function getDataMemory(dataMemory){
	if(dataMemory.length>0){
		var arrayMemory = dataMemory.split("\n");
		var objectMemory = [];
		var arrayObject;
		for(var i=0; i<arrayMemory.length; i++){
			arrayObject = arrayMemory[i].split("><");
			if(arrayObject[0]!="" && arrayObject[1]!=""){
				objectMemory.push({
					address: arrayObject[0].substring(1),
					value: arrayObject[1].substring(0, arrayObject[1].indexOf(">"))
				
				});
			}
		}
		return objectMemory;
	}
}