this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("buttons", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<a href=\"#\" class=\"button submit\">\n    <span>  \n        ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._buttons)),stack1 == null || stack1 === false ? stack1 : stack1.submit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    </span>\n</a>\n<a href=\"#\" class=\"button reset\">\n    <span>\n        ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._buttons)),stack1 == null || stack1 === false ? stack1 : stack1.reset)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    </span>\n</a> \n<a href=\"#\" class=\"button model\">\n    <span> \n        ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._buttons)),stack1 == null || stack1 === false ? stack1 : stack1.showCorrectAnswer)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    </span>\n</a>\n<a href=\"#\" class=\"button user\">\n    <span>\n        ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._buttons)),stack1 == null || stack1 === false ? stack1 : stack1.hideCorrectAnswer)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n    </span>\n</a>";
  return buffer;
  }));

Handlebars.registerPartial("component", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"";
  if (helper = helpers._component) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._component); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-title component-title\">\n    <h4 class=\"";
  if (helper = helpers._component) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._component); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-title-inner component-title-inner\">\n        ";
  if (helper = helpers.displayTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </h4>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"";
  if (helper = helpers._component) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._component); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-body component-body\">\n    <div class=\"";
  if (helper = helpers._component) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._component); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-body-inner component-body-inner\">\n        ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div class=\"";
  if (helper = helpers._component) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._component); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-instruction component-instruction\">\n    <div class=\"";
  if (helper = helpers._component) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._component); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "-instruction-inner component-instruction-inner\">\n        ";
  if (helper = helpers.instruction) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.instruction); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayTitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.body), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.instruction), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }));

this["Handlebars"]["templates"]["accordion"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"accordion-item\">\n            <a href=\"#\" class=\"accordion-item-title ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisited), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" title=\"";
  if (helper = helpers.alt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.alt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n              <div class=\"accordion-item-title-inner\">\n                <div class=\"accordion-item-title-icon icon icon-plus\"></div>\n                  <h5>\n                      ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                  </h5>\n              </div>\n            </a>\n            <div class=\"accordion-item-body\">\n                <div class=\"accordion-item-body-inner\">\n                    ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            </div>\n        </div>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "visited";
  }

  buffer += "<div class=\"accordion-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"accordion-widget component-widget\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["blank"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n<div class=\"blank-inner component-inner\"></div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isComplete), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isCorrect), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        <div class=\"gmcq-item component-item ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression((helper = helpers.odd || (depth1 && depth1.odd),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), options) : helperMissing.call(depth0, "odd", (data == null || data === false ? data : data.index), options)))
    + "\">\n             \n            <label for=\""
    + escapeExpression(((stack1 = (depth1 && depth1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"component-item-color component-item-text-color component-item-boder ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            \n                <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-large=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.large)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-medium=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-small=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.small)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n            \n                <div class=\"gmcq-item-checkbox\">\n                    <div class=\"gmcq-item-state\">\n                        <div class=\"gmcq-item-icon gmcq-answer-icon icon\"></div>\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    <h5 class=\"gmcq-item-inner\">\n                        ";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </h5>\n                </div>\n            </label>\n            <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n        </div>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.correct), {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"gmcq-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"gmcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._isEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"buttons\">\n            ";
  stack1 = self.invokePartial(partials.buttons, 'buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["graphic"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"graphic-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"graphic-widget component-widget\">\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-large=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.large)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-medium=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-small=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.small)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n          <div class=\"hotgraphic-popup-nav component-item-color\">\n            <a href=\"#\" class=\"hotgraphic-popup-controls back\" title=\"back\" alt=\"back\">\n              <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n            </a>\n            <div class=\"hotgraphic-popup-count component-item-text-color\">\n              <span class=\"current\">1</span>/<span class=\"total\">3</span>\n            </div>\n            <a href=\"#\" class=\"hotgraphic-popup-controls next\" title=\"next\" alt=\"next\">\n              <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n            </a>\n          </div>\n          ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <div class=\"hotgraphic-item component-item item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  if (helper = helpers._classes) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._classes); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n            <div class=\"hotgraphic-item-graphic\">\n              <div class=\"hotgraphic-item-graphic-inner\">\n                <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n              </div>\n            </div>\n            <div class=\"hotgraphic-item-body\">\n              <div class=\"hotgraphic-item-body-inner\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <p>\n                  ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </p>\n              </div>\n            </div>\n          </div>\n          ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <h5>\n                  ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </h5>\n                ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"hotgraphic-narrative\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n      ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <a href=\"#\" class=\"hotgraphic-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisited), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " hotgraphic-graphic-pin-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1._classes), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"top:";
  if (helper = helpers._top) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._top); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%; left:";
  if (helper = helpers._left) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._left); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\" title=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <div class=\"hotgraphic-graphic-pin-image component-item-color item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"background-image: url("
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")\"></div>\n          </a>\n          ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return "visited";
  }

function program10(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1._classes)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"/>\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a href=\"#\" class=\"hotgraphic-graphic-pin component-item-text-color item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisited), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"top:";
  if (helper = helpers._top) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._top); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%; left:";
  if (helper = helpers._left) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._left); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\" title=\"";
  if (helper = helpers.graphicTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.graphicTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n          <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></div>\n        </a>\n        ";
  return buffer;
  }

  buffer += "\n<div class=\"hotgraphic-inner component-inner\">\n  ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"hotgraphic-widget component-widget\">\n\n    <div class=\"hotgraphic-graphic\">\n\n      <div class=\"hotgraphic-popup\">\n\n        <div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n          ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._hidePagination), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          <a href=\"#\" class=\"hotgraphic-popup-done\" alt=\"done\" title=\"done\">\n            <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n          </a>\n        </div>\n\n        <div class=\"hotgraphic-popup-inner clearfix\">\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n\n      </div>\n\n      ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._useGraphicsAsPins), {hash:{},inverse:self.program(12, program12, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      \n    </div>\n  </div>\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["matching"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isComplete), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isCorrect), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"matching-item item ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n      <div class=\"matching-item-title\">";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n      <div class=\"matching-select-container component-item-color\">\n        <div class=\"matching-select-state\">\n          <div class=\"matching-select-icon component-text-color matching-dropdown-icon icon icon-controls-small-down\"></div>\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\n        </div>\n        <select class=\"matching-select component-text-color\" ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n          <option ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            "
    + escapeExpression(((stack1 = (depth1 && depth1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n          </option>\n          ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._options), {hash:{},inverse:self.noop,fn:self.programWithDepth(13, program13, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </select>\n      </div>\n    </div>\n    ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isCorrect), {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  
  return "disabled=\"true\"";
  }

function program11(depth0,data) {
  
  
  return "selected=\"selected\"";
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n          <option ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n            ";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </option>\n          ";
  return buffer;
  }
function program14(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

  buffer += "\n<div class=\"matching-inner component-inner\">\n  ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"matching-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._isEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"buttons\">\n        ";
  stack1 = self.invokePartial(partials.buttons, 'buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["mcq"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isComplete), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isCorrect), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <div class=\"mcq-item component-item component-item-color ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n            <label for=\""
    + escapeExpression(((stack1 = (depth1 && depth1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"component-item-text-color component-item-border";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.selected), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <h5 class=\"mcq-item-inner\">\n                    ";
  if (helper = helpers.text) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.text); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </h5>\n            </label>\n            <input type=\"checkbox\" id=\""
    + escapeExpression(((stack1 = (depth1 && depth1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n        </div>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.correct), {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<div class=\"mcq-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"mcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._isEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        <div class=\"buttons\">\n            ";
  stack1 = self.invokePartial(partials.buttons, 'buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["media"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <audio src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.mp3)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"audio/mp3\"/>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.ogg), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <audio src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.ogg)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"audio/ogg\"/>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <video preload=\"none\" width=\"640px\" height=\"360px\" poster=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.poster)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" style=\"width:100%; height:100%;\">\n          ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.source), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </video>\n      ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <source src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.source)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n          ";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <source src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.mp4)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"video/mp4\"/>\n            <source src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.ogv)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\"video/ogg\"/>\n          ";
  return buffer;
  }

  buffer += "<div class=\"media-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"media-widget component-widget\">\n\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._media)),stack1 == null || stack1 === false ? stack1 : stack1.mp3), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["narrative"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "narrative-text-controls";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <div class=\"narrative-strapline-title\">\n                        <h5 class=\"narrative-strapline-title-inner\">\n                           ";
  if (helper = helpers.strapline) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.strapline); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n                        </h5>\n                    </div>\n                    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.visited), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                    <img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" title=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"/>\n                </div>\n                ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return "visited";
  }

function program8(depth0,data) {
  
  
  return "\n                <div class=\"narrative-progress component-item-color component-item-border\"></div>\n                ";
  }

function program10(depth0,data) {
  
  
  return "\n                    <div class=\"narrative-progress component-item-color component-item-border\"></div>\n                    ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"narrative-content-item\">\n                    <div class=\"narrative-content-title\">\n                        <h5 class=\"narrative-content-title-inner\">\n                           ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " \n                        </h5>\n                    </div>\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        </div> \n                    </div>\n                </div>\n                ";
  return buffer;
  }

  buffer += "\n<div class=\"narrative-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"narrative-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._hasNavigationInTextArea), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        \n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            </div>\n            <a href=\"#\" class=\"narrative-popup-open\" tabindex=\"-1\">\n                <div class=\"icon icon-plus\"></div>\n            </a>\n        </div>\n        \n        <div class=\"narrative-slide-container\">\n  \n            <a href=\"#\" class=\"narrative-controls narrative-control-left\">\n                <div class=\"icon icon-controls-left\"></div>\n            </a>\n            <a href=\"#\" class=\"narrative-controls narrative-control-right\">\n                <div class=\"icon icon-controls-right\"></div>\n            </a>\n            \n            <div class=\"narrative-slider clearfix\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"narrative-indicators\">\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n                <a href=\"#\" class=\"narrative-controls narrative-control-left\">\n                    <div class=\"icon icon-controls-left\"></div>\n                </a>\n                <div class=\"narrative-indicators\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n                <a href=\"#\" class=\"narrative-controls narrative-control-right\">\n                    <div class=\"icon icon-controls-right\"></div>\n                </a>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n\n    </div>    \n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["slider"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isComplete), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isCorrect), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.correct), {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program6(depth0,data) {
  
  
  return "incorrect";
  }

  buffer += "<div class=\"slider-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"slider-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._isEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <div class=\"slider-holder clearfix\">\n            <div class=\"slider-scale-labels\">\n                <div class=\"slider-scale-start\">";
  if (helper = helpers.labelStart) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelStart); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n                <div class=\"slider-scale-end\">";
  if (helper = helpers.labelEnd) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.labelEnd); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n            </div>\n            <div class=\"slider-scaler component-item-color\">\n                <div class=\"slider-modelranges\"></div>\n                <div class=\"slider-markers\"></div>\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\n                <div class=\"slider-scale-marker component-item-color component-item-text-color\"></div>\n            </div>\n            <div class=\"slider-background\">\n                <div class=\"slider-item component-item ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._isEnabled), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                    <div class=\"slider-sliderange\">\n                        <a href=\"#\" class=\"slider-handle component-item-color component-item-text-color\"></a>\n                        <div class=\"slider-bar component-item-color\"></div>\n                    </div>\n                    <div class=\"slider-outer-bar\">\n                    <div class=\"slider-item-state\">\n                        <div class=\"slider-icon slider-correct-icon icon icon-tick\"></div>\n                        <div class=\"slider-icon slider-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"buttons\">\n            ";
  stack1 = self.invokePartial(partials.buttons, 'buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["text"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this;


  buffer += "<div class=\"text-inner component-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["textinput"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isComplete), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " complete submitted user ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isCorrect), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return "correct";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"textinput-item component-item component-item-color component-item-border clearfix ";
  stack1 = helpers.unless.call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prefix), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth1 && depth1._isEnabled), {hash:{},inverse:self.programWithDepth(13, program13, data, depth0),fn:self.programWithDepth(11, program11, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.suffix), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"textinput-item-state\">\n                <div class=\"textinput-icon textinput-correct-icon icon icon-tick\"></div>\n                <div class=\"textinput-icon textinput-incorrect-icon icon icon-cross\"></div>\n            </div>\n        </div>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.correct), {hash:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }
function program7(depth0,data) {
  
  
  return "incorrect";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <label class=\"textinput-item-prefix component-item-text-color\">";
  if (helper = helpers.prefix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prefix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            ";
  return buffer;
  }

function program11(depth0,data,depth1) {
  
  var buffer = "", stack1;
  buffer += "\n                <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = (depth1 && depth1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"\">\n            ";
  return buffer;
  }

function program13(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <input type=\"text\" placeholder=\""
    + escapeExpression(((stack1 = (depth1 && depth1.placeholder)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" value=\"";
  if (helper = helpers.userAnswer) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.userAnswer); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" disabled=\"true\">\n            ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <label class=\"textinput-item-suffix component-item-text-color\">";
  if (helper = helpers.suffix) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.suffix); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</label>\n            ";
  return buffer;
  }

  buffer += "\n<div class=\"component-inner textinput-inner\">\n    ";
  stack1 = self.invokePartial(partials.component, 'component', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n    <div class=\"component-widget textinput-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0._isEnabled), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._items), {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        \n        <div class=\"buttons\">\n            ";
  stack1 = self.invokePartial(partials.buttons, 'buttons', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"page-level-progress-item drawer-item\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisible), {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        	<h5 class=\"page-level-progress-item-title-inner\">\n            ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </h5>\n            <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isComplete), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                <div class=\"page-level-progress-indicator-bar\">\n                </div>\n            </div>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisible), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <a class=\"page-level-progress-item-title clearfix drawer-item-open\" href=\"#\" data-page-level-progress-id=\"";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n        ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "\n        <div class=\"page-level-progress-item-title drawer-item-open disabled clearfix\">\n        ";
  }

function program6(depth0,data) {
  
  
  return "complete";
  }

function program8(depth0,data) {
  
  
  return "incomplete";
  }

function program10(depth0,data) {
  
  
  return "\n        </a>\n        ";
  }

function program12(depth0,data) {
  
  
  return "\n        </div>\n        ";
  }

  buffer += "<div class=\"page-level-progress-inner\">\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.components), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"page-level-progress-navigation-completion\">\n	<div class=\"page-level-progress-navigation-bar\">\n	</div>\n</div>";
  });

this["Handlebars"]["templates"]["resources"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n		";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n			<a href=\"#\" class=\"resources-show-all selected\" data-filter=\"all\">\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.all)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n			</a>\n			";
  stack1 = (helper = helpers.if_collection_contains || (depth0 && depth0.if_collection_contains),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.resources), "_type", "document", options) : helperMissing.call(depth0, "if_collection_contains", (depth0 && depth0.resources), "_type", "document", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = (helper = helpers.if_collection_contains || (depth0 && depth0.if_collection_contains),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.resources), "_type", "media", options) : helperMissing.call(depth0, "if_collection_contains", (depth0 && depth0.resources), "_type", "media", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  stack1 = (helper = helpers.if_collection_contains || (depth0 && depth0.if_collection_contains),options={hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.resources), "_type", "link", options) : helperMissing.call(depth0, "if_collection_contains", (depth0 && depth0.resources), "_type", "link", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"#\" class=\"resources-show-document\" data-filter=\"document\">\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.document)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n			</a>\n			";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"#\" class=\"resources-show-media\" data-filter=\"media\">\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.media)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n			</a>\n			";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"#\" class=\"resources-show-link\" data-filter=\"link\">\n				<span>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1._filterButtons)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n			</a>\n			";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n	<div class=\"resources-item drawer-item ";
  if (helper = helpers._type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n		<a class=\"resources-item-open drawer-item-open\" target=\"_blank\" href=\"";
  if (helper = helpers._link) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._link); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			<div class=\"drawer-item-title\">\n				<h5 class=\"drawer-item-title-inner\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n			</div>\n			<div class=\"drawer-item-description\">\n				<div class=\"drawer-item-description-inner\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n			</div>\n		</a>\n	</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"resources-inner\">\n	<div class=\"resources-filter clearfix resources-col-"
    + escapeExpression((helper = helpers.return_column_layout_from_collection_length || (depth0 && depth0.return_column_layout_from_collection_length),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.resources), "_type", options) : helperMissing.call(depth0, "return_column_layout_from_collection_length", (depth0 && depth0.resources), "_type", options)))
    + "\">\n		\n		";
  stack1 = (helper = helpers.if_collection_contains_only_one_item || (depth0 && depth0.if_collection_contains_only_one_item),options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.resources), "_type", options) : helperMissing.call(depth0, "if_collection_contains_only_one_item", (depth0 && depth0.resources), "_type", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.resources), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0._trickle)),stack1 == null || stack1 === false ? stack1 : stack1.button)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n      Continue\n    ";
  }

  buffer += "\n<a href=\"#\" class=\"trickle-button\">\n  <h6>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0._trickle)),stack1 == null || stack1 === false ? stack1 : stack1.button), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </h6>\n</a>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["tutor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"tutor-title\">\n                    <h5 class=\"tutor-title-inner\">\n                    ";
  if (helper = helpers.feedbackTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.feedbackTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </h5>\n                </div>\n                ";
  return buffer;
  }

  buffer += "\n<div class=\"tutor\">\n    <div class=\"tutor-toolbar\">\n        <a href=\"#\" class=\"tutor-done\">\n            <div class=\"tutor-icon-close icon icon-cross\"></div>\n        </a>\n    </div>\n    <div class=\"tutor-content\">\n        <div class=\"tutor-inner\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.feedbackTitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"tutor-body\">\n                <div class=\"tutor-body-inner\">";
  if (helper = helpers.feedbackMessage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.feedbackMessage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tutor-shadow\"></div>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "visited";
  }

  buffer += "<div class=\"menu-item-inner\">\n	<div class=\"menu-graphic\">\n		<a href=\"#/id/";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisited), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.src)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0._graphic)),stack1 == null || stack1 === false ? stack1 : stack1.alt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n		</a>\n	</div>\n	<div class=\"menu-item-title\">\n		<h2 class=\"menu-item-title-inner\">";
  if (helper = helpers.displayTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	</div>\n	<div class=\"menu-item-body\">\n		<div class=\"menu-item-body-inner\">";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</div>\n	<div class=\"menu-item-button\">\n		<a href=\"#/id/";
  if (helper = helpers._id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._isVisited), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n			";
  if (helper = helpers.linkText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.linkText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</a>\n		<span class=\"menu-item-duration\">Duration: ";
  if (helper = helpers.duration) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.duration); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n	</div>\n	<div class=\"menu-item-progress\">\n		<div class=\"menu-item-progress-indicator\">\n			<div class=\"menu-item-progress-indicator-bar\" style=\"width:";
  if (helper = helpers.completedChildrenAsPercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.completedChildrenAsPercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "%\"></div>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<div class=\"menu-title\">\n			<h1 class=\"menu-title-inner\">\n				";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</h1>\n		</div>\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<div class=\"menu-body\">\n			<div class=\"menu-body-inner\">\n				";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n		";
  return buffer;
  }

  buffer += "<div class=\"menu-container\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.body), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["article"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"article-title\">\n        <h2 class=\"article-title-inner\">\n            ";
  if (helper = helpers.displayTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </h2>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"article-body\">\n        <div class=\"article-body-inner\">\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    ";
  return buffer;
  }

  buffer += "\n\n<div class=\"article-inner block-container\">\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayTitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.body), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["block"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"block-title\">\n        <h3 class=\"block-title-inner\">\n            ";
  if (helper = helpers.displayTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </h3>\n    </div>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"block-body\">\n        <div class=\"block-body-inner\">\n            ";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n    ";
  return buffer;
  }

  buffer += "\n\n<div class=\"block-inner\">\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayTitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.body), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"component-container\">\n    </div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["drawer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"drawer-inner\">\n	<div class=\"drawer-toolbar clearfix\">\n		<a href=\"#\" class=\"drawer-back icon icon-controls-small-left\">\n		</a>\n		<a href=\"#\" class=\"drawer-close icon icon-cross\">\n		</a>\n	</div>\n	<div class=\"drawer-holder\">\n	</div>\n</div>";
  });

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"drawer-item-open ";
  if (helper = helpers.className) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.className); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#\">\n	<div class=\"drawer-item-title\">\n		<h5 class=\"drawer-item-title-inner\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h5>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	</div>\n</a>";
  return buffer;
  });

this["Handlebars"]["templates"]["loading"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<div class=\"loading\">\n    <div class=\"loading-image\"><h3>Loading...</h3></div>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["navigation"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "\n\n<div class=\"navigation-inner clearfix\">\n    <a href=\"#\" class=\"navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" alt=\"Back button\"></a>\n    <a href=\"#\" class=\"navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" alt=\"Drawer\"></a>\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["notify"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n    <div class=\"notify-popup-toolbar\">\n        <a href=\"#\" class=\"notify-popup-done\">\n            <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n        </a>\n    </div>\n    ";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"notify-popup-icon\">\n                    <div class=\"icon";
  stack1 = (helper = helpers.if_value_equals || (depth0 && depth0.if_value_equals),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, (depth0 && depth0._type), "prompt", options) : helperMissing.call(depth0, "if_value_equals", (depth0 && depth0._type), "prompt", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = (helper = helpers.if_value_equals || (depth0 && depth0.if_value_equals),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, (depth0 && depth0._type), "alert", options) : helperMissing.call(depth0, "if_value_equals", (depth0 && depth0._type), "alert", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n                    </div>\n                </div>\n                ";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return " icon-question";
  }

function program6(depth0,data) {
  
  
  return " icon-warning";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"notify-popup-title\">\n                    <h5 class=\"notify-popup-title-inner\">\n                    ";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </h5>\n                </div>\n                ";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <div class=\"notify-popup-body\">\n                    <div class=\"notify-popup-body-inner\">";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n                </div>\n                ";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"notify-popup-buttons\">\n\n                    ";
  stack1 = (helper = helpers.if_value_equals || (depth0 && depth0.if_value_equals),options={hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data},helper ? helper.call(depth0, (depth0 && depth0._type), "alert", options) : helperMissing.call(depth0, "if_value_equals", (depth0 && depth0._type), "alert", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                    ";
  stack1 = (helper = helpers.if_value_equals || (depth0 && depth0.if_value_equals),options={hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data},helper ? helper.call(depth0, (depth0 && depth0._type), "prompt", options) : helperMissing.call(depth0, "if_value_equals", (depth0 && depth0._type), "prompt", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n                </div>\n                ";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <a href=\"#\" class=\"notify-popup-button notify-popup-alert-button\">";
  if (helper = helpers.confirmText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.confirmText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                    ";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0._prompts), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <a href=\"#\" class=\"notify-popup-button notify-popup-prompt-button\" data-event=\"";
  if (helper = helpers._callbackEvent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._callbackEvent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.promptText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.promptText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n                        ";
  return buffer;
  }

  buffer += "\n<div class=\"notify-popup notify-type-";
  if (helper = helpers._type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0._type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  stack1 = (helper = helpers.if_value_equals || (depth0 && depth0.if_value_equals),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0._type), "popup", options) : helperMissing.call(depth0, "if_value_equals", (depth0 && depth0._type), "popup", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0._showIcon), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.title), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.body), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.body), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"notify-shadow\"></div>";
  return buffer;
  });

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<div class=\"notify-push-inner\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner\">\n			";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n</div>\n<a href=\"#\" class=\"notify-push-close\">\n	<span class=\"icon icon-cross\"></span>\n</a>";
  return buffer;
  });

this["Handlebars"]["templates"]["page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n    <div class=\"page-title\">\n        <h1 class=\"page-title-inner\">\n            ";
  if (helper = helpers.displayTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.displayTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </h1>\n    </div>\n    ";
  return buffer;
  }

  buffer += "\n\n<div class=\"page-inner article-container\">\n    \n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.displayTitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["shadow"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });