'use strict';

var app=angular.module('myApp',[]);

app.controller('homeCtrl',function($scope){
    
    $scope.gridData=[];
   


    /*descrription:
    this function will count the no of click event on square box
    and if count will be reached to 8 then it will show display total score based on
    no of unclick square
    */
    $scope.clickCounter=function(data){
       if(data.value==='diamond'){
           $scope.diamondCount++;
       }
       else{
           $scope.findNearestIndex();
       }
        $scope.clicked++;
        if($scope.diamondCount===8){
            alert('Finished!!!');
            $scope.score='Your Score is ' +(64-$scope.clicked)+'';
        }
    };


    /**
     * @function: initializes array with diamond and blank key value pair object
     * @param: None
     * @return: None
     */
    $scope.getData=function(){
        $scope.clicked=0;
        $scope.diamondCount=0;

        var daimondSet=[];
        for(let i=0;i<8;i++){
            daimondSet[i]={key:i,value:'diamond'};
        }
        var dataSet=new Array(8*8);

        while(daimondSet.length){
            let counter=daimondSet.length-1;
            let randomIndex= Math.floor(Math.random()*64)+1;
            if(!dataSet[randomIndex]){
                dataSet[randomIndex]=daimondSet[counter];
                daimondSet.pop();
            }
        }
        for(let i=0;i<dataSet.length;i++){
          if(!dataSet[i]){
              dataSet[i]={key:i,value:'blank'};
          }
        }
       $scope.gridData=dataSet;
       
    }
});


/*This derective will add or remove class based on selection
*/
app.directive('gridCheck',function(){
    return {
        restrict : 'A',
        scope : {
            selection : '='         
        },
        link:function(scope,elem,attr){
             elem.on('click', function ($event) {
                   //  alert(scope.selection);                  
                     elem.removeClass("unknown");
                     if(scope.selection.value==='diamond'){                      
                         elem.addClass("diamond");    
                     }
                     else{                       
                         elem.addClass("blank");                       
                     }
                      elem.unbind('click');                     
                  });

             

        }
    };
});