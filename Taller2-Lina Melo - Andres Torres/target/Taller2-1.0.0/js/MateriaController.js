'use strict';

var listaMaterias=[{id:1,nombre:'Calculo',creditos:3,carrera:{id:2,nombre:'Licenciatura Matematicas',facultad:{id:2,nombre:'Ciencias de la educacion'}},
        profesor:{id:3,nombre:'German',apellido:'Torres',documento:7539},horarios:[{id:1,diaSemana:"Lunes",horaInicio:"08:00",horaFinal:"10:00"},{id:2,diaSemana:"Miercoles",horaInicio:"08:00",horaFinal:"10:00"}]}, 
    {id:2,nombre:'Ingles',creditos: 2,carrera:{id:3,nombre:'Licenciatura Idiomas',facultad:{id:2,nombre:'Ciencias de la educacion'}},
        profesor:{id:2,nombre:'Mateo',apellido:'Patiño',documento:7895}, horarios:[{id:3,diaSemana:"Jueves",horaInicio:"14:00",horaFinal:"16:00"},{id:4,diaSemana:"Sabado",horaInicio:"08:00",horaFinal:"12:00"}]},
    {id:3,nombre:'Programacion I',creditos:4,carrera:{id:1,nombre:'Ingenieria de sistemas',facultad:{id:1,nombre:'Ingenieria'}}, 
        profesor:{id:4,nombre:'Sebastian',apellido:'Diaz',documento:7542}, horarios:[{id:5,diaSemana:"Martes",horaInicio:"14:00",horaFinal:"17:00"},{id:6,diaSemana:"Viernes",horaInicio:"10:00",horaFinal:"12:00"}]},
    {id:4,nombre:'Redes',creditos: 2,carrera:{id:1,nombre:'Ingenieria de sistemas',facultad:{id:1,nombre:'Ingenieria'}},
        profesor:{id:6,nombre:'Oriana',apellido:'Juarez',documento:1452397}, horarios:[{id:3,diaSemana:"Jueves",horaInicio:"14:00",horaFinal:"16:00"},{id:5,diaSemana:"Martes",horaInicio:"14:00",horaFinal:"17:00"}]}];

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaMaterias;
    $scope.id=3;
    
    $scope.listaCarrera=listaCarreras;
    $scope.listaProfes=listaProfes;
    $scope.listaHorarios=listaHorario;

        
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
