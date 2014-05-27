/*
 <calle>9 DE JULIO</calle>
 <codSucursal>5738</codSucursal>
 <codigoPostal>5105</codigoPostal>
 <idLocalidad>0812030928hmuypzuAuO</idLocalidad>
 <idPartido>0812030928aizxyvvMrw</idPartido>
 <idProvincia>0812030928PqGXtYJmGW</idProvincia>
 <idRubro>29146245185500000547</idRubro>
 <idSucursal>29535335119001563372</idSucursal>
 <localidad>MENDOZA</localidad>
 <nombreSucursal>BANCO SUPERVIELLE - 34</nombreSucursal>
 <numero>1267</numero>
 <partido>CAPITAL</partido>
 <provincia>MENDOZA</provincia>
 <rubroAgente>BANCO</rubroAgente>
 <hDomingo>DOMINGOS: Cerrado</hDomingo>
 <hFeriado>FERIADOS: Cerrado</hFeriado>
 <hLunVie>LUN-VIER: 10:00 15:00</hLunVie>
 <hSabado>SABADOS: Cerrado</hSabado>
*/

window.SucursalService = {

    getActivas:function(success, fail){
    	
    	if(App.worksLocal()){
        	var sucursales = {
        					"return":
			        			[
									{
										"calle":"9 DE JULIO",
										"codSucursal":"5738",
										"codigoPostal":"5105",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"29146245185500000547",
										"idSucursal":"29535335119001563372",
										"localidad":"MENDOZA",
										"nombreSucursal":"BANCO SUPERVIELLE - 34",
										"numero":"1267",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"BANCO",
										"hDomingo":"DOMINGOS: Cerrado",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 10:00 15:00",
										"hSabado":"SABADOS: Cerrado"
									},
									{
										"calle":"AV C COLON",
										"codSucursal":"5761",
										"codigoPostal":"5500",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"29146245185500000547",
										"idSucursal":"29537063150501610393",
										"localidad":"MENDOZA",
										"nombreSucursal":"BANCO SUPERVIELLE - 64",
										"numero":"435",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"BANCO",
										"hDomingo":"DOMINGOS: Cerrado",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 10:00 15:00",
										"hSabado":"SABADOS: Cerrado"
									},
									{
										"calle":"GRAL LAS HERAS",
										"codSucursal":"5768",
										"codigoPostal":"5500",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"29146245185500000547",
										"idSucursal":"29537443861901610499",
										"localidad":"MENDOZA",
										"nombreSucursal":"BANCO SUPERVIELLE - 87",
										"numero":"452",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"BANCO",
										"hDomingo":"DOMINGOS: Cerrado",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 10:00 15:00",
										"hSabado":"SABADOS: Cerrado"
									},
									{
										"calle":"PEDRO MOLINA705",
										"codSucursal":"3624",
										"codigoPostal":"5500",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"0812030928GyfvOrqnil",
										"idSucursal":"38227112227300000619",
										"localidad":"MENDOZA",
										"nombreSucursal":"RAPIPAGO PEDRO MOLINA",
										"numero":"705",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"CENTRO DE COBRO",
										"hDomingo":"DOMINGOS: Cerrado",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 09:00 12:00 17:00 21:00",
										"hSabado":"SABADOS: 09:00 12:00 17:00 21:00"
									},
									{
										"calle":"Patricias Mendocinas",
										"codSucursal":"6806",
										"codigoPostal":"5500",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"0812030928iNRdTBaQue",
										"idSucursal":"33347055684500004402",
										"localidad":"MENDOZA",
										"nombreSucursal":"GALLAR VIVIANA ESTER",
										"numero":"1730",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"LOCUTORIO/ CIBER",
										"hDomingo":"DOMINGOS: 09:00 21:00",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 09:00 21:00",
										"hSabado":"SABADOS: 09:00 21:00"
									},
									{
										"calle":"SAN MARTÍN",
										"codSucursal":"7100",
										"codigoPostal":"5500",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"29146245185500000547",
										"idSucursal":"33932635436000000238",
										"localidad":"MENDOZA",
										"nombreSucursal":"BANCO SUPERVIELLE_7100",
										"numero":"841",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"BANCO",
										"hDomingo":"DOMINGOS: Cerrado",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 08:00 13:00",
										"hSabado":"SABADOS: Cerrado"
									},
									{
										"calle":"SANTIAGO DEL ESTERO",
										"codSucursal":"7676",
										"codigoPostal":"M5500DEA",
										"idLocalidad":"0812030928hmuypzuAuO",
										"idPartido":"0812030928aizxyvvMrw",
										"idProvincia":"0812030928PqGXtYJmGW",
										"idRubro":"0812030928mbhCfwkIIN",
										"idSucursal":"34226504057000003692",
										"localidad":"MENDOZA",
										"nombreSucursal":"MARQUEZ VILLEGAS TANIA MILENA",
										"numero":"25",
										"partido":"CAPITAL",
										"provincia":"MENDOZA",
										"rubroAgente":"POLIRUBRO/ MULTIVENTAS",
										"hDomingo":"DOMINGOS: 09:00 20:00",
										"hFeriado":"FERIADOS: Cerrado",
										"hLunVie":"LUN-VIER: 09:00 20:00",
										"hSabado":"SABADOS: 09:00 20:00"
									}
								]        			
        			
            			};
    		success(sucursales["return"]);
    		return;
    	}
    	
    	
		$.soap({
		    url: 'http://rpservice.desa.gire.com/ws/RapipagoService/',
		    method: 'getSucursalesActivas',

		    data: {
		        name: 'Remy Blom',
		        msg: 'Hi!'
		    },

		    success: function (soapResponse) {
				var a = soapResponse.toJSON();

				try{
					console.log("SOAP-inicio");
					var sucursales = a.Body.getSucursalesActivasResponse["return"];
					console.log("SOAP-fin");
					success(sucursales);
					console.log("SOAP-fin");
				}catch(e){
					fail(e.message);
				}
		    },
		    error: function (SOAPResponse) {
		        fail(SOAPResponse);
		    }
		});

        /*
    	var url = Constants.URL_BASE + Constants.URL_SUCURSAL_GET_ACTIVAS ;

    	$.getJSON(url, function(result) {
    		
    		if(result.status == Constants.JSON_RESPONSE_STATUS_OK){
        		success(result.data);
    		} else {
        		fail(result.error.message);
    		}
    		
    	}).error(function(result) {
    		fail(Constants.AJAX_JSON_ERROR_MESSAGE_GENERIC);
    	});*/

    }
	

};
