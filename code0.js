gdjs.relogioComparadorCode = {};
gdjs.relogioComparadorCode.GDrelogioPrincipalObjects1= [];
gdjs.relogioComparadorCode.GDrelogioPrincipalObjects2= [];
gdjs.relogioComparadorCode.GDpontaMedicaoObjects1= [];
gdjs.relogioComparadorCode.GDpontaMedicaoObjects2= [];
gdjs.relogioComparadorCode.GDbasePinoMedicaoObjects1= [];
gdjs.relogioComparadorCode.GDbasePinoMedicaoObjects2= [];
gdjs.relogioComparadorCode.GDblockPontaObjects1= [];
gdjs.relogioComparadorCode.GDblockPontaObjects2= [];
gdjs.relogioComparadorCode.GDplataformaApoioObjects1= [];
gdjs.relogioComparadorCode.GDplataformaApoioObjects2= [];
gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects1= [];
gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects2= [];
gdjs.relogioComparadorCode.GDdebugObjects1= [];
gdjs.relogioComparadorCode.GDdebugObjects2= [];
gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects1= [];
gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects2= [];

gdjs.relogioComparadorCode.conditionTrue_0 = {val:false};
gdjs.relogioComparadorCode.condition0IsTrue_0 = {val:false};


gdjs.relogioComparadorCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("pontaMedicao"), gdjs.relogioComparadorCode.GDpontaMedicaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ponteiroMarcadoePrincipal"), gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("valMedidoMMtxt"), gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects1);
{for(var i = 0, len = gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects1.length ;i < len;++i) {
    gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects1[i].setString(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString((((Math.floor((( gdjs.relogioComparadorCode.GDpontaMedicaoObjects1.length === 0 ) ? 0 :gdjs.relogioComparadorCode.GDpontaMedicaoObjects1[0].getPointY(""))) - 601) * 1.8) / (-(3.6))) / 100), 0, 5) + " mm");
}
}{for(var i = 0, len = gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects1.length ;i < len;++i) {
    gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects1[i].setAngle(-((Math.floor(((( gdjs.relogioComparadorCode.GDpontaMedicaoObjects1.length === 0 ) ? 0 :gdjs.relogioComparadorCode.GDpontaMedicaoObjects1[0].getPointY(""))) - 601) * 1.8)));
}
}}

}


};gdjs.relogioComparadorCode.eventsList1 = function(runtimeScene) {

{


gdjs.relogioComparadorCode.eventsList0(runtimeScene);
}


};

gdjs.relogioComparadorCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.relogioComparadorCode.GDrelogioPrincipalObjects1.length = 0;
gdjs.relogioComparadorCode.GDrelogioPrincipalObjects2.length = 0;
gdjs.relogioComparadorCode.GDpontaMedicaoObjects1.length = 0;
gdjs.relogioComparadorCode.GDpontaMedicaoObjects2.length = 0;
gdjs.relogioComparadorCode.GDbasePinoMedicaoObjects1.length = 0;
gdjs.relogioComparadorCode.GDbasePinoMedicaoObjects2.length = 0;
gdjs.relogioComparadorCode.GDblockPontaObjects1.length = 0;
gdjs.relogioComparadorCode.GDblockPontaObjects2.length = 0;
gdjs.relogioComparadorCode.GDplataformaApoioObjects1.length = 0;
gdjs.relogioComparadorCode.GDplataformaApoioObjects2.length = 0;
gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects1.length = 0;
gdjs.relogioComparadorCode.GDponteiroMarcadoePrincipalObjects2.length = 0;
gdjs.relogioComparadorCode.GDdebugObjects1.length = 0;
gdjs.relogioComparadorCode.GDdebugObjects2.length = 0;
gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects1.length = 0;
gdjs.relogioComparadorCode.GDvalMedidoMMtxtObjects2.length = 0;

gdjs.relogioComparadorCode.eventsList1(runtimeScene);
return;

}

gdjs['relogioComparadorCode'] = gdjs.relogioComparadorCode;
