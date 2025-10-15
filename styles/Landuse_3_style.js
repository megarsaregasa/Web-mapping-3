var size = 0;
var placement = 'point';
function categories_Landuse_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Administrative':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(197,97,97,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Agriculture':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(136,240,132,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Commercial':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(253,149,149,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Forest':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(124,175,83,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Manufucturing & Storagel':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,113,224,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mixed Residential':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(236,169,68,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pure Residential':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(244,247,95,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Recreational':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(71,226,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Services':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,147,215,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Special Function':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(183,183,183,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Transport':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(160,159,163,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Landuse_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Use_Type");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Landuse_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
