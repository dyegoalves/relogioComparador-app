gdjs.ajudaCode = {};
gdjs.ajudaCode.GDtxtVoltarObjects1= [];
gdjs.ajudaCode.GDtxtVoltarObjects2= [];
gdjs.ajudaCode.GDtituloTxt01Objects1= [];
gdjs.ajudaCode.GDtituloTxt01Objects2= [];
gdjs.ajudaCode.GDtxtTituloPontoContato_951Objects1= [];
gdjs.ajudaCode.GDtxtTituloPontoContato_951Objects2= [];
gdjs.ajudaCode.GDtxt1_951Objects1= [];
gdjs.ajudaCode.GDtxt1_951Objects2= [];
gdjs.ajudaCode.GDtxt1_952Objects1= [];
gdjs.ajudaCode.GDtxt1_952Objects2= [];
gdjs.ajudaCode.GDtxt1_953Objects1= [];
gdjs.ajudaCode.GDtxt1_953Objects2= [];
gdjs.ajudaCode.GDtxtTituloGiroRelogioPrincipal_952Objects1= [];
gdjs.ajudaCode.GDtxtTituloGiroRelogioPrincipal_952Objects2= [];
gdjs.ajudaCode.GDtxt2_951Objects1= [];
gdjs.ajudaCode.GDtxt2_951Objects2= [];
gdjs.ajudaCode.GDtxt2_952Objects1= [];
gdjs.ajudaCode.GDtxt2_952Objects2= [];
gdjs.ajudaCode.GDtxtTituloGiroRelogioVoltas3Objects1= [];
gdjs.ajudaCode.GDtxtTituloGiroRelogioVoltas3Objects2= [];
gdjs.ajudaCode.GDtxt3_951Objects1= [];
gdjs.ajudaCode.GDtxt3_951Objects2= [];
gdjs.ajudaCode.GDbtVoltarObjects1= [];
gdjs.ajudaCode.GDbtVoltarObjects2= [];

gdjs.ajudaCode.conditionTrue_0 = {val:false};
gdjs.ajudaCode.condition0IsTrue_0 = {val:false};
gdjs.ajudaCode.condition1IsTrue_0 = {val:false};


gdjs.ajudaCode.mapOfGDgdjs_46ajudaCode_46GDbtVoltarObjects1Objects = Hashtable.newFrom({"btVoltar": gdjs.ajudaCode.GDbtVoltarObjects1});gdjs.ajudaCode.eventsList0 = function(runtimeScene) {

{


gdjs.ajudaCode.condition0IsTrue_0.val = false;
{
gdjs.ajudaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ajudaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.ajudaCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.ajudaCode.GDbtVoltarObjects1);
{for(var i = 0, len = gdjs.ajudaCode.GDbtVoltarObjects1.length ;i < len;++i) {
    gdjs.ajudaCode.GDbtVoltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltar"), gdjs.ajudaCode.GDbtVoltarObjects1);

gdjs.ajudaCode.condition0IsTrue_0.val = false;
{
gdjs.ajudaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ajudaCode.mapOfGDgdjs_46ajudaCode_46GDbtVoltarObjects1Objects, runtimeScene, true, false);
}if (gdjs.ajudaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ajudaCode.GDbtVoltarObjects1 */
{for(var i = 0, len = gdjs.ajudaCode.GDbtVoltarObjects1.length ;i < len;++i) {
    gdjs.ajudaCode.GDbtVoltarObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.ajudaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.ajudaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ajudaCode.GDtxtVoltarObjects1.length = 0;
gdjs.ajudaCode.GDtxtVoltarObjects2.length = 0;
gdjs.ajudaCode.GDtituloTxt01Objects1.length = 0;
gdjs.ajudaCode.GDtituloTxt01Objects2.length = 0;
gdjs.ajudaCode.GDtxtTituloPontoContato_951Objects1.length = 0;
gdjs.ajudaCode.GDtxtTituloPontoContato_951Objects2.length = 0;
gdjs.ajudaCode.GDtxt1_951Objects1.length = 0;
gdjs.ajudaCode.GDtxt1_951Objects2.length = 0;
gdjs.ajudaCode.GDtxt1_952Objects1.length = 0;
gdjs.ajudaCode.GDtxt1_952Objects2.length = 0;
gdjs.ajudaCode.GDtxt1_953Objects1.length = 0;
gdjs.ajudaCode.GDtxt1_953Objects2.length = 0;
gdjs.ajudaCode.GDtxtTituloGiroRelogioPrincipal_952Objects1.length = 0;
gdjs.ajudaCode.GDtxtTituloGiroRelogioPrincipal_952Objects2.length = 0;
gdjs.ajudaCode.GDtxt2_951Objects1.length = 0;
gdjs.ajudaCode.GDtxt2_951Objects2.length = 0;
gdjs.ajudaCode.GDtxt2_952Objects1.length = 0;
gdjs.ajudaCode.GDtxt2_952Objects2.length = 0;
gdjs.ajudaCode.GDtxtTituloGiroRelogioVoltas3Objects1.length = 0;
gdjs.ajudaCode.GDtxtTituloGiroRelogioVoltas3Objects2.length = 0;
gdjs.ajudaCode.GDtxt3_951Objects1.length = 0;
gdjs.ajudaCode.GDtxt3_951Objects2.length = 0;
gdjs.ajudaCode.GDbtVoltarObjects1.length = 0;
gdjs.ajudaCode.GDbtVoltarObjects2.length = 0;

gdjs.ajudaCode.eventsList1(runtimeScene);
return;

}

gdjs['ajudaCode'] = gdjs.ajudaCode;
