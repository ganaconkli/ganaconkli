


$(document).ready(function(){


		//haremos un efecto ajax para llamar a los estados municipios y parroquia de  x lugar
		$("#idestado").change(function(){
				idestado = $(this).val();
				municipio=document.getElementById("idmunicipio");
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idestado:idestado,nivel:'estado'},function(data){
				municipio.disabled = false;
						$("#idmunicipio").html(data);
				});
			
		});//cierre del change  del select estado

    //haremos un efecto ajax para llamar a las parroquias del municipio y parroquia de  x lugar
		$("#idmunicipio").change(function(){
				idmunicipio = $(this).val();
				parroquia=document.getElementById("idparroquia");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idmunicipio:idmunicipio,nivel:'municipio'},function(data){
				parroquia.disabled = false;
						$(".select_parroquia").html(data);
				});
		});//cierre del change  del select municipio
		//haremos un efecto ajax para llamar a las parroquias del municipio y parroquia de  x lugar
		$("#cod_tmodalidad").change(function(){
				cod_tmodalidad = $(this).val();
				curso=document.getElementById("cod_tcurso");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{cod_tmodalidad:cod_tmodalidad,nivel:'UPEL_cursos'},function(data){
				curso.disabled = false;
						$("#cod_tcurso").html(data);
				});
		});//cierre del change  del select parroquia

		$("#idmunicipio").change(function(){
				idmunicipio = $(this).val();
				entidad=document.getElementById("identidad");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idmunicipio:idmunicipio,nivel:'entidad'},function(data){
				entidad.disabled = false;
						$("#identidad").html(data);
				});
		});//cierre del change  del select parroquia

		$("#identidad1").change(function(){
				identidad = $(this).val();
				departamento=document.getElementById("iddepartamento");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{identidad:identidad,nivel:'BIENES_entidad'},function(data){
				departamento.disabled = false;
						$("#iddepartamento").html(data);
				});
		});//cierre del change  del select parroquia

		$("#idmarca").change(function(){
				idmarca = $(this).val();
				modelo=document.getElementById("idmodelo");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idmarca:idmarca,nivel:'BIENES_marca'},function(data){
				modelo.disabled = false;
						$("#idmodelo").html(data);
				});
		});//cierre del change  del select parroquia

			$("#iddepartamento").change(function(){
				iddepartamento = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{iddepartamento:iddepartamento,nivel:'BIENES_dep1'},function(data){
					 var datos=data.split(",");
         																			
													
			$("#cedula").val(datos[0]);	
           $("#codigo").val(datos[1]);					
			$("#nombre1").val(datos[2]);	
	
				});
		});//cierre del change  del select de nombres
		
		$("#identidad").change(function(){
				identidad = $(this).val();
				departamento=document.getElementById("iddepartamento2");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{identidad:identidad,nivel:'BIENES_entidad'},function(data){
				departamento.disabled = false;
						$("#iddepartamento2").html(data);
				});
		});//cierre del change  del select parroquia

		$("#iddepartamento2").change(function(){
				iddepartamento = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/conEntrada.php",{iddepartamento:iddepartamento,nivel:'BIENES_entradadisp'},function(data){
							$("#datatable4").html(data);
				});
		});//cierre del change  del select parroquia
$(".select_obsoleto").change(function(){
				iddepartamento = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/conSalida.php",{iddepartamento:iddepartamento,nivel:'BIENES_obsoleto'},function(data){
							$("#transaccion").html(data);
				});
		});//cierre del change  del select parroquia

		
		
			$(".select_entidad").change(function(){
				identidad = $(this).val();
				departamento=document.getElementById("iddepartamento");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{identidad:identidad,nivel:'BIENES_entidad'},function(data){
				departamento.disabled = false;
						$(".select_departamento3").html(data);
				});
		});//cierre del change  del select parroquia

		$(".select_departamento3").change(function(){
				iddepartamento = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/conEntrada.php",{iddepartamento:iddepartamento,nivel:'BIENES_entradadesin'},function(data){
							$(".tablapaginacion").html(data);
				});
		});//cierre del change  del select parroquia

		//select ajax para escoger los tipos de cátedra...
		$("#idgrupo").change(function(){
		
				idgrupo = $(this).val();
				subgrupo=document.getElementById("id");	
	
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idgrupo:idgrupo,nivel:'BIENES_grupo'},function(data){
				//$.post('idsede.disabled = false;');
				subgrupo.disabled = false;
						$("#idsubgrupo").html(data);
						
				});
		});//cierre del change  del select de las catedras...

		//select ajax para escoger los tipos de cátedra...
		$("#idsubgrupo").change(function(){
		
				id = $(this).val();
				bienes=document.getElementById("idbienes");	
	
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{id:id,nivel:'BIENES_def'},function(data){
				//$.post('idsede.disabled = false;');
				bienes.disabled = false;
						$("#idbienes").html(data);
						
				});
		});//cierre del change  del select de las catedras...

		
		
		

$("#busquedep").keyup(function(){
			
					insert_busquedadep = $(this).val();
					
				//hacemos la funcion ajax
				$.post("control/conDepartamento.php",{insert_busquedadep:insert_busquedadep,nivel:'BIENES_dep'},function(data){
				//$.post('idsede.disabled = false;');
				//alert(''+busque+'');
				$(".select_dep").html(data);	
		      });
				
		});//cierre del change  de los empleados
		$("#busquedep2").keyup(function(){
			
					insert_busquedadep = $(this).val();
					
				//hacemos la funcion ajax
				$.post("control/conDepartamento.php",{insert_busquedadep:insert_busquedadep,nivel:'BIENES_dep5'},function(data){
				//$.post('idsede.disabled = false;');
				//alert(''+busque+'');
				$(".select_dep").html(data);	
		      });
				
		});//cierre del cha
		
	
			//haremos un efecto ajax para llamar a los empleados 
		$("#busque").keyup(function(){
			
					busque = $(this).val();
					
				//hacemos la funcion ajax
				$.post("control/conEmpleado.php",{busque:busque,nivel:'BIENES_empleado'},function(data){
				//$.post('idsede.disabled = false;');
				//alert(''+busque+'');
				$(".select_docente").html(data);	
		      });
				
		});//cierre del change  de los docentes
		
		//haremos un efecto ajax para llamar a los horarios 
		$("#ENTRADA_search").keyup(function(){
			
					ENTRADA_search = $(this).val();
					
				//hacemos la funcion ajax
				$.post("control/conEntrada.php",{ENTRADA_search:ENTRADA_search,nivel:'BIENES_search_Enter'},function(data){
				//$.post('idsede.disabled = false;');
				//alert(''+busque+'');
				$(".tablapaginacion").html(data);	
		      });
				
		});//cierre del change  de los docentes
		
		
		
		
		
		$("#idmodelo").change(function(){
				idmodelo = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idmodelo:idmodelo,nivel:'BIENES_descrip'},function(data){
					 var datos=data.split(",");
         											
			$("#marca").val(datos[0]);								
			
	
				});
		});//cierre del change  del select de nombres
		
		$("#select_usuario").change(function(){
				cedula = $('#select_usuario').val();
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{cedula:cedula,nivel:'BIENES_usuario'},function(data){
					 var datos=data.split(",");
         											
			$("#usuario").val(datos[0]);								
			$("#clave1").val(datos[1]);								
			$("#clave").val(datos[2]);								
			
	
				});
		});//cierre del change  del select de nombres
		
		

		
		$("#cod_tcurso").change(function(){
				cod_tcurso = $(this).val();
				 estudiante = $('#idestudiante').val();
				 cedula = $('#busqueda25').val();
				var a=',';
				if(cedula==''){
					swal('No existe ningún estudiante!');
					$('#cod_tcurso').val('');
					return false;
				}
				//hacemos la funcion ajax
				var cadena=cod_tcurso+a+estudiante;
				
				$.post("control/ajax_combo.php",{cadena:cadena,nivel:'UPEL_caract2'},function(data){
					 var datos=data.split(",");
         	 if (datos[0]=='Curso en Progreso!'){
				 swal('Usted tiene en progreso este Curso!');
				 $('#cod_tcurso').val('');
			 }else  if (datos[0]=='Curso Culminado!'){
				 swal('Ya Usted Culmino este Curso!');
				 $('#cod_tcurso').val('');
			 }else{
				 
			 }
          								
			
	
				});
		});
		 $("#cod_tcurso").change(function(){
				cod_tcurso = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{cod_tcurso:cod_tcurso,nivel:'UPEL_caract'},function(data){
					 var datos=data.split(",");
         											
			//$("#pre_inscripcion").prop("disabled",false);								
			//$("#inscripcion").prop("disabled",false);								
			//$("#txtcuota").val(datos[0]);
            $("#txtprecio").val(datos[1]);											
            $("#cant_hora").val(datos[2]);											
										
			
	
				});
		});
		 $("#inscripcion").change(function(){
				cantidad_cuota = $('#txtcuota').val();
				cantidad_inscripcion = $('#inscripcion').val();
				cantidad_pre_ins = $('#pre_inscripcion').val();
				precio = $('#monto_total').val();
				if (cantidad_cuota==''){
					swal('La cantidad de cuota no puede estar vacío!');
					return false;
				}
				if (precio==''){
					swal('Aun no has seleccionado ningún curso!');
					return false;
				}
				monto_cuota=parseFloat(precio)/parseInt(cantidad_cuota);
				monto_restante=(parseInt(cantidad_cuota)-1)*parseFloat(monto_cuota);
		TotalApagar=parseFloat(monto_cuota)+parseFloat(cantidad_inscripcion)+parseFloat(cantidad_pre_ins);
		$("#ajuste").css({"display":"block"});
		  				$('#total').val(TotalApagar.toFixed(2));
		  				$('#monto_restante').val(monto_restante.toFixed(2));
		  				$('#txtprecio').val(precio);
		  				$("#showTotal").text(TotalApagar.toFixed(2));
                      $("#showRestante").text(monto_restante.toFixed(2));
				//swal('Hola  '+cod_tcurso+'');
				//hacemos la funcion ajax
				
		});
		
		$("#txtcuota").blur(function(){
				cantidad_cuota = $(this).val();
				inscripcion=document.getElementById("inscripcion");
			
				if(cantidad_cuota=='' || cantidad_cuota.length==0){ //para no permitir que se queda en blanco
		swal('Ingrese la cantidad de cuota');cantidad_cuota.focus();
		return false;
		inscripcion.disabled=true;
	}else{
		
		inscripcion.disabled=false;
	}
	  		  	
		});

	//VALIDACIONES KLIBERT BOTON "registrar"
		
		/*$("#registrar").click(function(){
			boton=document.getElementById("registrar");
			boton.disabled=true;
			nombre = $("#nombre").val();
			nombre_archivo = $("#nombre_archivo").val();

			if(nombre==''  ){ //para no permitir que se queda en blanco
				swal('Ingrese la cédula');nombre.focus();
				permitido=false;
		    	obj_name=nombre.id;
				return false;
			}else if(!(/^\d{7,8}$/.test(nombre.replace(/^\s+|\s+$/gi,"")))){ //para no permitir que se queda en blanco
				swal('Ingrese una cédula válida');nombre.focus();
				permitido=false;
			    obj_name=nombre.id;
				return false;
			}else{
				
			}
		});*/
				

		
		$("#busqueda05").blur(function(){
				busqueda05 = $(this).val();
				if(busqueda05==''){ //para no permitir que se queda en blanco
		swal('Ingrese la cédula');busqueda05.focus();
		permitido=false;
	    obj_name=busqueda05.id;
		return false;
	}else if(!(/^\d{7,8}$/.test(busqueda05.replace(/^\s+|\s+$/gi,"")))){ //para no permitir que se queda en blanco
		swal('Ingrese una cédula válida');busqueda05.focus();
		permitido=false;
	    obj_name=busqueda05.id;
		return false;
	}
				//hacemos la funcion ajax
		 $.post("control/ajax_combo.php",{busqueda05:busqueda05,nivel:'UPEL_emp05'},function(data){
		 var datos=data.split(",");
		 if(datos!=''){
						swal('Empleado ya  se encuentra registrado');
						$("#busqueda05").val('');
					}else{
          											
		
							}
		});
		});//cierre del change  del select de nombres
		
		$("#busqueda25").blur(function(){
				busqueda25 = $(this).val();
				if(busqueda25==''){ //para no permitir que se queda en blanco
		swal('Ingrese la cédula');busqueda25.focus();
		permitido=false;
	    obj_name=busqueda25.id;
		return false;
	}else if(!(/^\d{7,8}$/.test(busqueda25.replace(/^\s+|\s+$/gi,"")))){ //para no permitir que se queda en blanco
		swal('Ingrese una cédula válida');busqueda25.focus();
		permitido=false;
	    obj_name=busqueda25.id;
		return false;
	}
				//hacemos la funcion ajax
		 $.post("control/ajax_combo.php",{busqueda25:busqueda25,nivel:'UPEL_estudiante'},function(data){
		 var datos2=data.split(",");
		 if(datos2==''){
						swal('Usted no es un estudiante de esa Institución');
						$("#busqueda2").val('');
					}else{
          //swal(" Hola...."+datos[1]+"");
			$("#idcontrato").val(+datos2[0]);										
			$("#dep_trabajo").val(datos2[3]);										
			 $("#fecha_naci").val(datos2[5]);	
		
		//swal('Holaaa  '+datos2[5]+' ');
		    $("#idpersona").val(datos2[15]);										
		    $("#nacionalidad").val(datos2[16]);										
		    $("#button_nacionalidad").text(datos2[16]);	  
             $("#busqueda2").val(datos2[17]);
		    $("#nombre").val(datos2[18]);
		    $("#apellido").val(datos2[19]);	
		   	 $("#idestado").val(datos2[20]);	
		    $("#idmunicipio").val(datos2[21]);	
		     $("#direccion").val(datos2[22]);	
		    $("#tel_mob").val(datos2[23]);	
		    $("#correo").val(datos2[24]);
			 	     		if(datos2[2]=="M"){$("#sexo").prop('checked',true);									
			}else{$("#sexo1").prop('checked',true);									
			}
		     $("#cod_cargo").val(datos2[7]);	
		    $("#tlf_trabajo").val(datos2[8]);
            $("#dir_trabajo").val(datos2[9]);		
		   		 
		    $("#idestudiante").val(datos2[28]);	
					
					}
	           $("#registrar2").css({"display":"block","float":"left"});
					   $("#registrar").css({"display":"none"});
		  		
									
		
							});  
		});//cierre del change  del select de nombres
		$("#idpiso").change(function(){
				idpiso = $(this).val();
				ambiente=document.getElementById("idambiente");
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{idpiso:idpiso,nivel:'UPEL_piso'},function(data){
				ambiente.disabled = false;
						$("#idambiente").html(data);
				});
			
		});
		$("#cod_tmodalidad2").change(function(){
				cod_tmodalidad = $('#cod_tmodalidad2').val();
				curso=document.getElementById("cod_tcurso2");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{cod_tmodalidad:cod_tmodalidad,nivel:'UPEL_cursos'},function(data){
				curso.disabled = false;
						$("#cod_tcurso2").html(data);
				});
		});
		$("#cod_tcurso2").change(function(){
				cod_tcurso = $('#cod_tcurso2').val();
				materia=document.getElementById("cod_tmateria");
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{cod_tcurso:cod_tcurso,nivel:'UPEL_materias'},function(data){
				materia.disabled = false;
						$("#cod_tmateria").html(data);
				});
		});
		
		$("#busqueda26").blur(function(){
				busqueda26 = $(this).val();
				piso=document.getElementById("idpiso");
				
				if(busqueda26==''){ //para no permitir que se queda en blanco
		swal('Ingrese la cédula del facilitador');busqueda26.focus();
		permitido=false;
	    obj_name=busqueda26.id;
		return false;
	}else if(!(/^\d{7,8}$/.test(busqueda26.replace(/^\s+|\s+$/gi,"")))){ //para no permitir que se queda en blanco
		swal('Ingrese una cédula válida');busqueda26.focus();
		permitido=false;
	    obj_name=busqueda26.id;
		return false;
	}
				//hacemos la funcion ajax
		 $.post("control/ajax_combo.php",{busqueda26:busqueda26,nivel:'UPEL_docente'},function(data){
		 var datos=data.split(",");
		 if(datos==''){
						swal('Usted no es un docente de esa Institución');
						$("#busqueda26").val('');
						$("#idpersonal").val('');
						$("#nombre").val('');
						$("#apellido").val('');
					}else{
          
	         piso.disabled = false;
				
		    $("#idpersonal").val(datos[0]);										
		    $("#nacionalidad").val(datos[1]);										
		    $("#button_nacionalidad").text(datos[1]);	  
             $("#busqueda26").val(datos[2]);
		    $("#nombre").val(datos[3]);
		    $("#apellido").val(datos[4]);	
					
					}
	       	
									
		
							});  
		}); 
		$("#busqueda27").blur(function(){
				busqueda27 = $(this).val();
					
				if(busqueda27==''){ //para no permitir que se queda en blanco
		swal('Ingrese la cédula del Estudiante');busqueda27.focus();
		permitido=false;
	    obj_name=busqueda27.id;
		return false;
	}else if(!(/^\d{7,8}$/.test(busqueda27.replace(/^\s+|\s+$/gi,"")))){ //para no permitir que se queda en blanco
		swal('Ingrese una cédula válida');busqueda27.focus();
		permitido=false;
	    obj_name=busqueda27.id;
		return false;
	}
				//hacemos la funcion ajax
		 $.post("control/ajax_combo.php",{busqueda27:busqueda27,nivel:'UPEL_estudiante2'},function(data){
		 var datos=data.split(",");
		 if(datos==''){
						swal('Usted no es un estudiante de esa Institución');
						$("#busqueda27").val('');
						$("#idestudiante").val('');
						$("#nombre").val('');
						$("#apellido").val('');
					}else{
          
	       	
		    $("#idestudiante").val(datos[0]);										
		    $("#nacionalidad").val(datos[1]);										
		    $("#button_nacionalidad").text(datos[1]);	  
             $("#busqueda27").val(datos[2]);
		    $("#nombre").val(datos[3]);
		    $("#apellido").val(datos[4]);	
					
					}
	       	
									
		
							});  
		}); 
		$("#cod_tmateria").change(function(){
				cod_tmateria = $(this).val();
				
				//hacemos la funcion ajax
				$.post("control/ajax_combo.php",{cod_tmateria:cod_tmateria,nivel:'UPEL_horas_materia'},function(data){
					 var datos=data.split(",");
         											
			//$("#pre_inscripcion").prop("disabled",false);								
			//$("#inscripcion").prop("disabled",false);								
			$("#mycant").val(datos[0]);
         		var tot=datos[0];			
    $("#myfecha").html('');				
			var ini=parseInt(tot)/parseInt(8);
			for(var i = 1; i <= ini; i++) {
	 var campo = ' <div class="col-sm-3" ><div class="form-group"> <b class="control-label">Fecha clase '+i+'<span style="color:red" title="Campo obligatorio">(*)</span></b><input type="text" class="form-control" name="fechas'+i+'" id="txtfecha'+i+'" style="width:86.7%;" readonly></div></div>';
	 
    $("#myfecha").append(campo);
    
}
for(var x = 1; x <= ini; x++) {
	$("#txtfecha"+x+"").datepicker({
													minDate: "0",
						 changeMonth: true,
    changeYear: true, 
	showOn: "button",
    
  buttonText:"<span class='glyphicon glyphicon-calendar'></span>",
utoclose: true,todayHighlight: true,
	 numberOfMonths: 1
							});	
}
 var campo2 = '<div class="col-sm-3"><div class="input-group-btn"><button class="btn btn-success" type="button"  onclick="Agregar()"> <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> </button></div></div>';
	$("#myfecha").append(campo2);




	
				});
		});
		$("#cod_tseccion").change(function(){
				cod_tseccion = $(this).val();
	
			
				//hacemos la funcion ajax
		 $.post("control/ajax_combo.php",{cod_tseccion:cod_tseccion,nivel:'UPEL_rev_seccion'},function(data){
		 var datos=data.split(",");
		 if(datos!=''){
						swal('Sección '+datos[0]+' Ya se encuentra Planificado por ese lapso Académico!');
						$("#cod_tseccion").val('');
						
					}else{
          
	       
					
					}
	       	
									
		
							});  
		});
		
});