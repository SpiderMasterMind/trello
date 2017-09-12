this["JST"] = this["JST"] || {};

this["JST"]["addCardPopup"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"card_add_text\">		<textarea></textarea>	</div>	<div class=\"card_add_ctrls\">		<input class=\"submit_card_add\" type=\"submit\" value=\"Add\" />		<a class=\"cancel_card_add\" href=\"#\">X</a>		<div class=\"card_add_optns\">			<span>...</span>		</div>	</div>";
},"useData":true});

this["JST"]["addList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"add_list\">	<p>Add List:</p>	<input type=\"text\" name=\"new\" placeholder\"List name\" />	<input type=\"submit\" value=\"Submit\" id=\"test_add_list\" /></div>";
},"useData":true});

this["JST"]["board"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"lists_area\"></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"icon-subscribe\">isSubbed</span>		";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"due_date\">isDue</span>		";
},"5":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"list_description\">hasDesc</span>		";
},"7":function(container,depth0,helpers,partials,data) {
    return "			<span class=\"comments_num\">hasComms</span>		";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<div class=\"card_content\">		<h4>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</h4>		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header boards_button\">	<a href=\"#\">		<img src=\"images/header_boards.png\" alt=\"boards_icon\" />		<span id=\"board\">Boards</span>	</a></div><div class=\"header header_search\">	<input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" />	<!--<img src=\"images/header_search.png\" alt=\"header_search_icon\" />--></div><div class=\"header boards-ctrl\">	<a class=\"notif_button\" href=\"#\">		<img src=\"images/header_notif.png\" alt=\"notification_icon\" />	</a></div><div class=\"header header_logo\">	<img src=\"images/header_logo.png\" alt=\"trello_logo\" /></div>";
},"useData":true});

this["JST"]["infobar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>infobar test!</p>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<div class=\"card\" data-cardid=\""
    + alias4(((helper = (helper = helpers.cardId || (depth0 != null ? depth0.cardId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardId","hash":{},"data":data}) : helper)))
    + "\">			<div class=\"card_content\">				<h4>"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</h4>				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "				"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>		</div>		";
},"2":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"icon-subscribe\">isSubbed</span>				";
},"4":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"due_date\">isDue</span>				";
},"6":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"list_description\">hasDesc</span>				";
},"8":function(container,depth0,helpers,partials,data) {
    return "					<span class=\"comments_num\">hasComms</span>				";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "	<textarea class=\"heading_text\" onclick=\"this.focus();this.select()\">"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</textarea>	<div class=\"list_extras\">		<a href=\"#\">			<span>...</span>		</a>	</div>	<div class=\"cards_area\">	<!--"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->	</div>		<div class=\"card_add\">		<div class=\"card_add_activate\">			<a href=\"#\">				<span>Add a card...</span>			</a>		</div>	</div>";
},"useData":true});

this["JST"]["view"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"list\" data-listid=\""
    + alias4(((helper = (helper = helpers.listId || (depth0 != null ? depth0.listId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listId","hash":{},"data":data}) : helper)))
    + "\">	<h3>List</h3>	<ul>		<li>LIST Heading: "
    + alias4(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"heading","hash":{},"data":data}) : helper)))
    + "</li>		<li>LIST subscribed: "
    + alias4(((helper = (helper = helpers.subscribed || (depth0 != null ? depth0.subscribed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"subscribed","hash":{},"data":data}) : helper)))
    + "</li>	</ul>	"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "		<div class=\"card\" data-cardid=\""
    + alias4(((helper = (helper = helpers.cardId || (depth0 != null ? depth0.cardId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardId","hash":{},"data":data}) : helper)))
    + "\">		<h3>Card</h3>		<ul>			<li>CARD Label: "
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</li>			<li>CARD Description: "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</li>			<li>CARD Due: "
    + alias4(((helper = (helper = helpers.due || (depth0 != null ? depth0.due : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due","hash":{},"data":data}) : helper)))
    + "</li>		</ul>		<h3>Comments</h3>			"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>	";
},"3":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"comments\">				<ul>					<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>				</ul>			</div>			";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Trello mockup</h2>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.testCollection : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});