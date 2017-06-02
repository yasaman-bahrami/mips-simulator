var registerOutput = "";
function registers(IFIDBuffer, registers){
	var readRegister1;
	var readRegister2
	var readData1;
	var readData2;
	var registersResult = "-";
	var registerObject = getRegistersObject(registers);
	readRegister1 = IFIDBuffer[1];
	readData1 = getRegisterValue(readRegister1, registerObject);
	readRegister2 = IFIDBuffer[2];
	readData2 = getRegisterValue(readRegister2, registerObject);
	registersResult = [readData1, readData2];
	return registersResult;
}
function registerWrite(writeRegister, writeData, regWrite, registers){
	if(regWrite == 1){
		registerOutput = "";
		var registerObject = getRegistersObject(registers);
		for(var i=0; i<registerObject.length; i++){
			if(registerObject[i].number == writeRegister && writeData!= "-")
				registerObject[i].value = writeData;
		}
		for(i=0; i<registerObject.length; i++){
			registerOutput = registerOutput+"R"+registerObject[i].number+"<"+registerObject[i].value+">";
			if(i!= registerObject.length - 1)
				registerOutput = registerOutput+"\n";
		}
		return registerObject;
	}
}
function getRegistersObject(registers){
	if(registers.length>0){
		var arrayRegister = registers.split("\n");
		var objectRegister = [];
		for(var i=0; i<arrayRegister.length; i++)
			objectRegister.push({
				number: arrayRegister[i].substring(1, arrayRegister[i].indexOf("<")),
				value: arrayRegister[i].substring(arrayRegister[i].indexOf("<")+1, arrayRegister[i].indexOf(">"))
			});
		return objectRegister;
	}
}
function getRegisterValue(address, registerObject){
	for(var i=0; i< registerObject.length; i++){
		if(registerObject[i].number == address)
			return registerObject[i].value;
	}	
}