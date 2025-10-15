var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Project_AOI_2 = new ol.format.GeoJSON();
var features_Project_AOI_2 = format_Project_AOI_2.readFeatures(json_Project_AOI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Project_AOI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Project_AOI_2.addFeatures(features_Project_AOI_2);
var lyr_Project_AOI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Project_AOI_2, 
                style: style_Project_AOI_2,
                popuplayertitle: 'Project_AOI',
                interactive: false,
                title: '<img src="styles/legend/Project_AOI_2.png" /> Project_AOI'
            });
var format_Landuse_3 = new ol.format.GeoJSON();
var features_Landuse_3 = format_Landuse_3.readFeatures(json_Landuse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_3.addFeatures(features_Landuse_3);
var lyr_Landuse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landuse_3, 
                style: style_Landuse_3,
                popuplayertitle: 'Landuse',
                interactive: true,
    title: 'Landuse<br />\
    <img src="styles/legend/Landuse_3_0.png" /> Administrative<br />\
    <img src="styles/legend/Landuse_3_1.png" /> Agriculture<br />\
    <img src="styles/legend/Landuse_3_2.png" /> Commercial<br />\
    <img src="styles/legend/Landuse_3_3.png" /> Forest<br />\
    <img src="styles/legend/Landuse_3_4.png" /> Manufucturing & Storagel<br />\
    <img src="styles/legend/Landuse_3_5.png" /> Mixed Residential<br />\
    <img src="styles/legend/Landuse_3_6.png" /> Pure Residential<br />\
    <img src="styles/legend/Landuse_3_7.png" /> Recreational<br />\
    <img src="styles/legend/Landuse_3_8.png" /> Services<br />\
    <img src="styles/legend/Landuse_3_9.png" /> Special Function<br />\
    <img src="styles/legend/Landuse_3_10.png" /> Transport<br />' });
var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);
var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                popuplayertitle: 'Buildings',
                interactive: true,
    title: 'Buildings<br />\
    <img src="styles/legend/Buildings_4_0.png" /> <br />\
    <img src="styles/legend/Buildings_4_1.png" /> <br />\
    <img src="styles/legend/Buildings_4_2.png" /> <br />' });
var format_Streams_5 = new ol.format.GeoJSON();
var features_Streams_5 = format_Streams_5.readFeatures(json_Streams_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streams_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streams_5.addFeatures(features_Streams_5);
var lyr_Streams_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streams_5, 
                style: style_Streams_5,
                popuplayertitle: 'Streams',
                interactive: false,
    title: 'Streams<br />\
    <img src="styles/legend/Streams_5_0.png" /> B_RIVER<br />\
    <img src="styles/legend/Streams_5_1.png" /> L_STREAM<br />' });
var format_Road_6 = new ol.format.GeoJSON();
var features_Road_6 = format_Road_6.readFeatures(json_Road_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_6.addFeatures(features_Road_6);
var lyr_Road_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_6, 
                style: style_Road_6,
                popuplayertitle: 'Road',
                interactive: false,
    title: 'Road<br />\
    <img src="styles/legend/Road_6_0.png" /> Asphalt<br />\
    <img src="styles/legend/Road_6_1.png" /> Gravel<br />' });
var format_Existing_HealthFacility_7 = new ol.format.GeoJSON();
var features_Existing_HealthFacility_7 = format_Existing_HealthFacility_7.readFeatures(json_Existing_HealthFacility_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Existing_HealthFacility_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existing_HealthFacility_7.addFeatures(features_Existing_HealthFacility_7);
cluster_Existing_HealthFacility_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Existing_HealthFacility_7
});
var lyr_Existing_HealthFacility_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Existing_HealthFacility_7, 
                style: style_Existing_HealthFacility_7,
                popuplayertitle: 'Existing_Health Facility',
                interactive: true,
    title: 'Existing_Health Facility<br />\
    <img src="styles/legend/Existing_HealthFacility_7_0.png" /> Hospital<br />\
    <img src="styles/legend/Existing_HealthFacility_7_1.png" /> Specialty Center<br />\
    <img src="styles/legend/Existing_HealthFacility_7_2.png" /> Specialty Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_7_3.png" /> Health Center<br />\
    <img src="styles/legend/Existing_HealthFacility_7_4.png" /> Clinic<br />\
    <img src="styles/legend/Existing_HealthFacility_7_5.png" /> Pharmacy<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Project_AOI_2.setVisible(true);lyr_Landuse_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Streams_5.setVisible(true);lyr_Road_6.setVisible(true);lyr_Existing_HealthFacility_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_Project_AOI_2,lyr_Landuse_3,lyr_Buildings_4,lyr_Streams_5,lyr_Road_6,lyr_Existing_HealthFacility_7];
lyr_Project_AOI_2.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Landuse_3.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Buildings_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ZONE_': 'ZONE_', 'WOREDA': 'WOREDA', 'KEBELE': 'KEBELE', 'CODE_BID': 'CODE_BID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Streams_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_': 'FID_', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetyp': 'EntLinetyp', 'LyrLnType': 'LyrLnType', 'BlkLinetyp': 'BlkLinetyp', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Road_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Meters': 'Meters', 'Oneway': 'Oneway', 'TF_Minutes': 'TF_Minutes', 'FT_Minutes': 'FT_Minutes', 'Road_Name': 'Road_Name', 'Road_Type': 'Road_Type', });
lyr_Existing_HealthFacility_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Altitude': 'Altitude', 'Ownership': 'Ownership', 'Type': 'Type', 'admin3Name': 'admin3Name', 'admin2Name': 'admin2Name', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'City': 'City', 'Kebele': 'Kebele', 'Status': 'Status', });
lyr_Project_AOI_2.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Landuse_3.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Buildings_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ZONE_': 'Range', 'WOREDA': 'Range', 'KEBELE': 'Range', 'CODE_BID': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Streams_5.set('fieldImages', {'OBJECTID': 'Range', 'FID_': 'Range', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'Range', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetyp': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetyp': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Road_6.set('fieldImages', {'OBJECTID': 'Range', 'Id': 'Range', 'Shape_Leng': 'TextEdit', 'Meters': 'TextEdit', 'Oneway': 'TextEdit', 'TF_Minutes': 'TextEdit', 'FT_Minutes': 'TextEdit', 'Road_Name': 'TextEdit', 'Road_Type': 'TextEdit', });
lyr_Existing_HealthFacility_7.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Altitude': 'TextEdit', 'Ownership': 'TextEdit', 'Type': 'TextEdit', 'admin3Name': 'TextEdit', 'admin2Name': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'City': 'TextEdit', 'Kebele': 'TextEdit', 'Status': 'TextEdit', });
lyr_Project_AOI_2.set('fieldLabels', {'ZONE_': 'no label', 'LUSE_CODE': 'no label', 'Use_Type': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'WOREDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Landuse_3.set('fieldLabels', {'ZONE_': 'hidden field', 'LUSE_CODE': 'hidden field', 'Use_Type': 'inline label - always visible', 'AREA': 'hidden field', 'PERIMETER': 'hidden field', 'WOREDA': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Buildings_4.set('fieldLabels', {'AREA': 'inline label - always visible', 'PERIMETER': 'hidden field', 'ZONE_': 'inline label - always visible', 'WOREDA': 'inline label - always visible', 'KEBELE': 'hidden field', 'CODE_BID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Streams_5.set('fieldLabels', {'OBJECTID': 'no label', 'FID_': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetyp': 'no label', 'LyrLnType': 'no label', 'BlkLinetyp': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Road_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Shape_Leng': 'no label', 'Meters': 'no label', 'Oneway': 'no label', 'TF_Minutes': 'no label', 'FT_Minutes': 'no label', 'Road_Name': 'no label', 'Road_Type': 'no label', });
lyr_Existing_HealthFacility_7.set('fieldLabels', {'Id': 'hidden field', 'Name': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Altitude': 'hidden field', 'Ownership': 'inline label - always visible', 'Type': 'inline label - always visible', 'admin3Name': 'hidden field', 'admin2Name': 'hidden field', 'admin1Name': 'hidden field', 'admin1Pcod': 'hidden field', 'City': 'inline label - always visible', 'Kebele': 'hidden field', 'Status': 'hidden field', });
lyr_Existing_HealthFacility_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});