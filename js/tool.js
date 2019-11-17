measureControl= new ol.control.MeasureTool(opt_options){
	var options = opt_options || {};

    persist: true,  //保留绘制上次绘制的要素

    immediate: true,  //量算过程中实时显示测量结果

    geodesic: true,  //采用大地测量学方法计算

       //指定监听函数measure和measurepartial

    eventListeners: {

        'measure': measure,

        'measurepartial': measurepartial

    }

};
//添加测量控件

map.addControl(measureControl);

//暂且不要激活测量控件

measureControl.deactivate();



//“测量距离”按钮点击事件响应函数

function length()

{

   measureControl.updateHandler(OpenLayers.Handler.Path, {persist: true});

    if(!measureControl.active)

    {

        //激活测量控件

measureControl.activate();

    }

}

//“测量面积”按钮点击事件响应函数

function area()

{

   measureControl.updateHandler(OpenLayers.Handler.Polygon, {persist:true});

    if(!measureControl.active)

    {

              //激活测量控件

        measureControl.activate();

    }

}

//“停止测量”按钮点击事件响应函数

function stop()

{

    if(measureControl.active)

    {

measureControl.deactivate();

    }

   document.getElementById("mea_result").value = "";

}



//该函数用于最终显示测量结果

function measure(event)

{

    var message = event.measure + " "+ event.units;

    if(event.order>1) {

              //如果测量类型为测量面积

        message += "2";

    }

       //显示测量结果

   document.getElementById("mea_result").value = message;

}

//该函数用于实时显示测量结果

function measurepartial(event)

{

    var message = event.measure + " "+ event.units;

    if(event.order>1) {

              //如果测量类型为测量面积

        message += "2";

    }

   document.getElementById("mea_result").value = message;

}
