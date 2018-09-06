'use strict';

var listaEstudiante=[{id:1,nombre:'Brayan',apellido:'Espinosa',codigo:"2056513",documento:"1234",fechaNacimiento:"08/08/1998",municipio:{id:1,nombre:'Tunja'},carrera:{id:1, nombre:'Ingenieria de sistemas',facultad:{id:1,nombre:'Ingenieria'}}},
    {id:2,nombre:'Vivian',apellido:'Rodriguez',codigo:"20183345",documento:"7895",fechaNacimiento:"12/05/1997",municipio:{id:2,nombre:'Duitama'},carrera:{id:2,nombre:'Licenciatura Matematicas',facultad:{id:2,nombre:'Ciencias de la educacion'}}},
    {id:3,nombre:'Javier',apellido:'Santana',codigo:"201746871",documento:"7539",fechaNacimiento:"28/03/1996",municipio:{id:3,nombre:'Sogamoso'},carrera:{id:2,nombre:'Licenciatura Matematicas',facultad:{id:2,nombre:'Ciencias de la educacion'}}},
    {id:4,nombre:'Sebastian',apellido:'Diaz',codigo:"201811564",documento:"7542",fechaNacimiento:"07/12/1999",municipio:{id:1,nombre:'Tunja'},carrera:{id:3,nombre:'Licenciatura Idiomas',facultad:{id:2,nombre:'Ciencias de la educacion'}}}];

module.controller('EstudiantesCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaEstudiante;
    $scope.listaMunicipio = listaMunicipios;
    $scope.listaCarrera = listaCarreras;
        
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
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
    };

    //editar
    $scope.editar = function (data) {
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
