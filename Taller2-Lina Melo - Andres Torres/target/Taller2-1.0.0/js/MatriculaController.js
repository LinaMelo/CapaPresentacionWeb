'use strict';

var listaMatricula=[{id:1,anio:2018,semestre:1,
        estudiante:{id:1,nombre:'Brayan',apellido:'Espinosa',codigo:"2056513",documento:"1234",fechaNacimiento:"08/08/1998",municipio:{id:1,nombre:'Tunja'},carrera:{id:1, nombre:'Ingenieria de sistemas',facultad:{id:1,nombre:'Ingenieria'}}},
        materias:[{id:3,nombre:'Programacion I',creditos:4,carrera:{id:1,nombre:'Ingenieria de sistemas'}, profesor:{id:4,nombre:'Sebastian',apellido:'Diaz',documento:7542}, horarios:[{id:5,diaSemana:"Martes",horaInicio:"14:00",horaFinal:"17:00"},{id:6,diaSemana:"Viernes",horaInicio:"10:00",horaFinal:"12:00"}]}]},
        {id:2,anio:2017,semestre:2,estudiante:{id:3,nombre:'Javier',apellido:'Santana',codigo:"201746871",documento:"7539",fechaNacimiento:"28/03/1996",municipio:{id:3,nombre:'Sogamoso'},carrera:{id:2,nombre:'Licenciatura Matematicas',facultad:{id:2,nombre:'Ciencias de la educacion'}}},
        materias:[{id:1,nombre:'Calculo',creditos:3,carrera:{id:2,nombre:'Licenciatura Matematicas'},profesor:{id:3,nombre:'German',apellido:'Torres',documento:7539},horarios:[{id:1,diaSemana:"Lunes",horaInicio:"08:00",horaFinal:"10:00"},{id:2,diaSemana:"Miercoles",horaInicio:"08:00",horaFinal:"10:00"}]}]}];

module.controller('MatriculaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaMatricula;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listaEstudia=listaEstudiante;
    $scope.listaMateria=listaMaterias;
    
    $scope.matCarr=[];
    
    $scope.searchMat = function(data){
        $scope.matCarr=[];
        for(var i=0; i<$scope.listaMateria.length; i++){
                if($scope.listaMateria[i].carrera.nombre == data.nombre){
                    $scope.matCarr.push($scope.listaMateria[i]);
                }
         }
    }
    
    
    
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
        $scope.matCarr=[];
    };
    
    $scope.guardar = function () {
        $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        
        if (!$scope.datosFormulario.id){
            $scope.datosFormulario.id = $scope.id++;
            $scope.lista.push($scope.datosFormulario);
        }
        $scope.panelEditar = false;
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
        $scope.matCarr=[];
    };

    //editar
    $scope.editar = function (data) {
        $scope.matCarr=[];
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data){
        if (confirm('\xbfDesea elminar este registro?')) {    
            for(var i=0; i<$scope.lista.length; i++){
                if($scope.lista[i]==data){
                    $scope.lista.splice(i,1);
                    break;
                }
            }
        }
    };
}]);
