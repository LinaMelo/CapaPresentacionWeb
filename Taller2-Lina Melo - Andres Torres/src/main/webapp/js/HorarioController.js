'use strict';

var listaHorario=[{id:1,diaSemana:"Lunes",horaInicio:"08:00",horaFinal:"10:00"},{id:2,diaSemana:"Miercoles",horaInicio:"08:00",horaFinal:"10:00"},
    {id:3,diaSemana:"Jueves",horaInicio:"14:00",horaFinal:"16:00"},{id:4,diaSemana:"Sabado",horaInicio:"08:00",horaFinal:"12:00"},
    {id:5,diaSemana:"Martes",horaInicio:"14:00",horaFinal:"17:00"},{id:6,diaSemana:"Viernes",horaInicio:"10:00",horaFinal:"12:00"}];

module.controller('HorarioCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //Listar
    $scope.lista = listaHorario;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    //Listas
    $scope.dias= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    
    
    //Guardar
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
