function MUX14(MEMWBBuffer2, MEMWBBuffer1, memtoReg){
	var MUX14Result;
	if(memtoReg == 0)
		MUX14Result = MEMWBBuffer1;
	else if (memtoReg == 1)
		MUX14Result = MEMWBBuffer2;
	else
		MUX14Result = "-";
	return MUX14Result;
}