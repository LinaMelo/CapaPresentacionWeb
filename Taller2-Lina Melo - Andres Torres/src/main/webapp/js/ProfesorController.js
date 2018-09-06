'use strict';

var listaProfes=[{id:1,nombre:'Deisy',apellido:'Diaz',documento:1234}, {id:2,nombre:'Mateo',apellido:'Patiño',documento:7895},
    {id:3,nombre:'German',apellido:'Torres',documento:7539},{id:4,nombre:'Sebastian',apellido:'Diaz',documento:7542},{id:5,nombre:'Kelly',apellido:'Maldonado',documento:15498},
    {id:6,nombre:'Oriana',apellido:'Juarez',documento:1452397}];

module.controller('ProfesoresCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaProfes;
    $scope.id=3;
    
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
