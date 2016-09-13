{"filter":false,"title":"ngFlowGrid.js","tooltip":"/app/assets/javascripts/ngFlowGrid.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":308,"column":3},"action":"insert","lines":["/*!"," * ngFlowGrid v1.0.1"," * http://eisneim.github.io/ngFlowGrid"," * Copyright (c) 2014 glexe.com"," * License: MIT"," */","","/**"," * TODO"," * 1.css3 transition option"," * 2. in one column split 2 images;"," */","(function() {","","'use strict';","","angular.module('ngFlowGrid', [])","\t.factory('fgDelegate',[function(){","\t\tvar cnt = 0;// for generating id","","\t\tvar flows = {};//store all flowGrid instance;","\t\tvar Flow = function(option){","\t\t\t// delete old one if exists","\t\t\tif(flows[option.name]){","\t\t\t\tdelete flows[option.name];","\t\t\t}","","\t\t\tvar flowInstance = this;","","\t\t\tthis.keyName = option.name||'ngFlow_'+ cnt++;// there might be more than 1 flow grid","\t\t\tthis.__uid_item_counter = 0;","","\t\t\tthis.minItemWidth = parseInt(option.minItemWidth,10) || 150;","\t\t\tthis.itemSelector = option.itemSelector;","\t\t\tif(this.itemSelector.substr(0,1)!==\".\") this.itemSelector = \".\"+this.itemSelector;","","\t\t\tthis.autoCalculation = true;//false, you have to put height in img tag;","\t\t\tthis.columns = []; // array of html elements","","\t\t\tthis.columnsHeights = [];","\t\t\tthis.itemsHeights = {};","","\t\t\tthis.container = option.container;//html element, not jquery object;","\t\t\tthis.items = this.container.querySelectorAll( this.itemSelector||'.flowGridItem');","\t\t\tthis.tempContainer = document.createElement('div');","\t\t\tthis.tempContainer.className = 'flowGridTemp';","\t\t\t// put temp container to container,","\t\t\tthis.container.appendChild( this.tempContainer );","","","\t\t\t// hide the container temporarily,while doing the transform","\t\t\tthis.container.style['visibility'] = 'hidden';","\t\t\t// this.tempContainer.style['visibility'] = 'hidden';","\t\t\t// start to calculate columns and fill items;","\t\t\tthis.refill();","\t\t\t// when resize we also need to refill","\t\t\twindow.addEventListener('resize', this.refill.bind( this ) );","","\t\t\t// console.log(this.items);","\t\t\t// console.log(this.container);","\t\t\t// console.log(this.itemsHeights);","\t\t\t// console.log(this.itemsHeights);","\t\t}","","\t\tFlow.prototype.refill = function( forceRefill ){","\t\t\tvar that = this;","\t\t\t// give every item a ubique id","\t\t\tArray.prototype.forEach.call(this.items, function(elm){","\t\t\t\tvar id = elm.getAttribute('id');","\t\t\t\t// give every item a unique id","\t\t\t\tif (!id) {","\t\t\t\t\t// Generate an unique id","\t\t\t\t\tid = that.generateUniqueId();","\t\t\t\t\telm.setAttribute('id', id);","\t\t\t\t}","\t\t\t});","","\t\t\tthis.numberOfColumns = Math.floor(this.container.clientWidth / this.minItemWidth);","\t\t\t// always keep at least one column","\t\t\tif (this.numberOfColumns < 1)","\t            this.numberOfColumns = 1;","","\t        var needToRefill = this.ensureColumns();","\t        if (needToRefill || forceRefill == true) {","\t\t\t\tthis.fillColumns();","","\t\t\t\tvar shouldBeRemoved = this.container.querySelectorAll('.flowGridColumn.shouldBeRemoved');","\t\t\t\t[].forEach.call(shouldBeRemoved,function(elm){","\t\t\t\t\tthat.container.removeChild( elm );","\t\t\t\t});","\t\t\t}","\t\t\tthis.container.style['visibility'] = 'visible';","","\t\t}","\t\tFlow.prototype.ensureColumns = function(){","\t\t\tvar createdCnt = this.columns.length;","\t\t\tvar calculatedCnt = this.numberOfColumns;","","\t\t\t// console.log('createdCnt',createdCnt);","\t\t\t// console.log('calculatedCnt',calculatedCnt);","","\t\t\tthis.tempContainer.style.width = this.container.clientWidth;","\t\t\t// in the first time, working container is tempContainer","\t\t\tthis.workingContainer = createdCnt === 0 ? this.tempContainer : this.container;","\t\t\t// if  columns are not enough, we add new columns","\t\t\tif (calculatedCnt > createdCnt) {","\t\t\t\t// how many more do we need?","\t\t\t\tvar neededCnt = calculatedCnt - createdCnt;","\t\t\t\tfor (var columnIdx = 0; columnIdx < neededCnt; columnIdx++) {","\t\t\t\t\tvar $column = document.createElement('div');","","\t\t\t\t\tif (!$column.dataset){","\t\t\t\t\t\t$column.dataset = {};","\t\t\t\t\t}","","\t\t\t\t\t$column.dataset.order = columnIdx;","\t\t\t\t\t$column.className = 'flowGridColumn';","\t\t\t\t\t// make sure insert at end of container","\t\t\t\t\tthis.workingContainer.appendChild($column);","\t\t\t\t}","","\t\t\t// what we already have is more than what we need, we hide what we don't need;","\t\t\t}else if(calculatedCnt < createdCnt){","\t\t\t\tvar lastColumn = createdCnt;","\t\t\t\twhile (calculatedCnt < lastColumn) {","\t\t\t\t\t// We can't remove columns here becase it will remove items to. So we hide it and will remove later.","\t\t\t\t\tthis.columns[lastColumn-1].style['visibility'] = 'hidden';","\t\t\t\t\tthis.columns[lastColumn-1].classList.add('shouldBeRemoved');","\t\t\t\t\tlastColumn--;","\t\t\t\t\t// console.log('---loop for remove old columns');","\t\t\t\t}","","\t\t\t\tvar diff = createdCnt - calculatedCnt;","\t\t\t\t// reduce the length of columnsHeights","\t\t\t\tthis.columnsHeights.splice(this.columnsHeights.length - diff, diff);","\t\t\t}","\t\t\t// we already make column exactly what we need ,now make the emtp this.column array to be filled with element;","\t\t\tif (calculatedCnt !== createdCnt) {","\t\t\t\tthis.columns = this.workingContainer.querySelectorAll('.flowGridColumn:not(.shouldBeRemoved)');","\t\t\t\tfor(var jj=0; jj< this.columns.length; jj++){","\t\t\t\t\tthis.columns[jj].style['width'] = (100 / calculatedCnt) + '%';","\t\t\t\t}","\t\t\t\treturn true;","\t\t\t}","\t\t\treturn false;","\t\t}","\t\tFlow.prototype.fillColumns = function(){","\t\t\tvar columnsCnt = this.numberOfColumns;","\t\t\tvar itemsCnt = this.items.length;","\t\t\t// loop through all colums ,and add item to it","\t\t\tfor (var columnIdx = 0; columnIdx < columnsCnt; columnIdx++) {","\t\t\t\tvar column = this.columns[columnIdx];","\t\t\t\tthis.columnsHeights[columnIdx] = 0;","\t\t\t\tfor (var itemIdx = columnIdx; itemIdx < itemsCnt; itemIdx += columnsCnt) {","\t\t\t\t\tvar item = this.items[itemIdx];","\t\t\t\t\tvar height = 0;","\t\t\t\t\tcolumn.appendChild(item);","\t\t\t\t\tif (this.autoCalculation) {","\t\t\t\t\t\t// Check height after being placed in its column","\t\t\t\t\t\theight = item.offsetHeight;","\t\t\t\t\t}else {","\t\t\t\t\t\t// Read img height attribute","\t\t\t\t\t\theight = parseInt(item.querySelector('img').getAttribute('height'), 10);","\t\t\t\t\t}","\t\t\t\t\t// record their height","\t\t\t\t\tthis.itemsHeights[item.id] = height;","\t\t\t\t\tthis.columnsHeights[columnIdx] += height;","\t\t\t\t}","\t\t\t}","","\t\t\t// console.log(this.itemsHeights);","\t\t\t// console.log(this.columnsHeights);","","\t\t\t// prevent too much height difference between colums","\t\t\tthis.levelBottomEdge(this.itemsHeights, this.columnsHeights);","\t\t\t// first time workingContainer is tempContainer, otherwise is this.container;","\t\t\tif (this.workingContainer === this.tempContainer) {","\t\t\t\tvar len = this.tempContainer.children.length;","\t\t\t\tfor(var kk= 0; kk<len ; kk++){","\t\t\t\t\tthis.container.appendChild(this.tempContainer.children[0] );","\t\t\t\t}","\t\t\t}","","\t\t};","\t\t// rearrange","\t\tFlow.prototype.levelBottomEdge = function(itemsHeights, columnsHeights){","\t\t\twhile (true) {","\t\t\t\t// get indexof lowest and highest column","\t\t\t\tvar lowestColumn = columnsHeights.indexOf( Math.min.apply(null, columnsHeights) );","\t\t\t\tvar highestColumn = columnsHeights.indexOf( Math.max.apply(null, columnsHeights) );","\t\t\t\tif (lowestColumn === highestColumn) return;// nothing to do ,return;","","\t\t\t\tvar lastInHighestColumn = this.columns[highestColumn].lastChild;","\t\t\t\tvar lastInHighestColumnHeight = itemsHeights[ lastInHighestColumn.id ];","","\t\t\t\tvar lowestHeight = columnsHeights[lowestColumn];","\t\t\t\tvar highestHeight = columnsHeights[highestColumn];","\t\t\t\tvar newLowestHeight = lowestHeight + lastInHighestColumnHeight;","","\t\t\t\t// not much difference between lowest and highest, return","\t\t\t\tif (newLowestHeight >= highestHeight) return;","","\t\t\t\t// too much difference between lowest and highest,","\t\t\t\t// move last item in the highest to the lowest column","\t\t\t\tthis.columns[lowestColumn].appendChild(lastInHighestColumn);","\t\t\t\t// update new hight record;","\t\t\t\tcolumnsHeights[highestColumn] -= lastInHighestColumnHeight;","\t\t\t\tcolumnsHeights[lowestColumn] += lastInHighestColumnHeight;","\t\t\t}","\t\t};","","\t\tFlow.prototype.generateUniqueId = function() {","\t\t\t// Increment the counter","\t\t\tthis.__uid_item_counter++;","","\t\t\t// Return an unique ID","\t\t\treturn this.keyName + '-itemid-' + this.__uid_item_counter;","\t\t}","","\t\tFlow.prototype.add = function(){","","\t\t}","\t\tFlow.prototype.empty = function(){","\t\t\tvar columnsCnt = this.numberOfColumns;","","\t\t\tthis.items = [];","\t\t\tthis.itemsHeights = {};","","\t\t\tfor (var columnIdx = 0; columnIdx < columnsCnt; columnIdx++) {","\t\t\t\tvar column = this.columns.eq(columnIdx);","\t\t\t\tthis.columnsHeights[columnIdx] = 0;","\t\t\t\tcolumn.innerHTML = '';","\t\t\t}","\t\t}","\t\tFlow.prototype.recomputeHeights = function(){","\t\t\tvar columnsCnt = this.numberOfColumns;","\t\t\tfor (var columnIdx = 0; columnIdx < columnsCnt; columnIdx++) {","\t\t\t\tvar that = this;","\t\t\t\tvar column = this.columns.eq(columnIdx);","","\t\t\t\tthis.columnsHeights[columnIdx] = 0;","\t\t\t\tfor(var ii=0; ii<column.children.length; ii++ ){","\t\t\t\t\tvar height = 0;","\t\t\t\t\tvar item = column.children[ii];","\t\t\t\t\tif (that.autoCalculation) {","\t\t\t\t\t\t// Check height after being placed in its column","\t\t\t\t\t\theight = item.offsetHeight;","\t\t\t\t\t}else {","\t\t\t\t\t\t// Read img height attribute","\t\t\t\t\t\theight = parseInt( item.querySelectorAll('img').getAttribute('height'), 10 );","\t\t\t\t\t}","","\t\t\t\t\tthat.itemsHeights[ item.id ] = height;","\t\t\t\t\tthat.columnsHeights[columnIdx] += height;","\t\t\t\t}","\t\t\t}","","\t\t}","\t\tFlow.prototype.itemsChanged = function(){","\t\t\tthis.items = this.container.querySelectorAll( this.itemSelector||'.flowGridItem');","\t\t\tthis.refill(true);","\t\t}","","\t\treturn {","\t\t\tnew:function(option){","\t\t\t\tflows[option.name] = new Flow(option);","\t\t\t\treturn flows[option.name];","\t\t\t},","\t\t\tgetFlow:function(name){","\t\t\t\treturn flows[name];","\t\t\t}","\t\t}","\t}])","\t.directive('ngFlowGrid',['fgDelegate','$timeout',function(amzFlowDelegate,$timeout){","\t\treturn {","\t\t\trestrict:'A',","\t\t\tlink:function($scope,element,attrs){","\t\t\t\tfunction newGrid(){","\t\t\t\t\tvar flow = amzFlowDelegate.new({","\t\t\t\t\t\tcontainer: element[0],","\t\t\t\t\t\tname: attrs['ngFlowGrid'] || 'ngFlowGrid',","\t\t\t\t\t\titemSelector: attrs['itemSelector'] || '.flowGridItem',","\t\t\t\t\t\tminItemWidth: attrs['minItemWidth']||150,","\t\t\t\t\t});","\t\t\t\t}","\t\t\t\t// you can watch $last as well;","\t\t\t\t$scope.$watch(element.children(),newGrid);","","\t\t\t\t$scope.$on('$destroy',function(){","\t\t\t\t\tangular.element(window).unbind('resize',false);","\t\t\t\t});","\t\t\t}","\t\t}","\t}]);","","","})();","","/**","(function() {","    this.getName = function() {","        return this.name;","    };","    this.getMessage = function() {","        return this.message;","    };","}).call(MyObject.prototype);",""," */"],"id":1}]]},"ace":{"folds":[],"scrolltop":2682,"scrollleft":0,"selection":{"start":{"row":308,"column":3},"end":{"row":308,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":190,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1472926331473,"hash":"54f6c0f2543745b630d0ee99ffc186c05bcfe9a2"}