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
    var stack1;

  return "			"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		";
},"2":function(container,depth0,helpers,partials,data) {
    return "				--><div class=\"color_block\" style=\"background-color:"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ";\"></div><!--			";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "		<div class=\"card_icons\">			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>	";
},"5":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"is_subscribed\"><img src=\"images/card_subscribe.png\" alt=\"subscribed\" /></div>			";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"due_date\"><img src=\"images/card_clock.png\" alt=\"clock_icon\" /><div class=\"date_box\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.due || (depth0 != null ? depth0.due : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"due","hash":{},"data":data}) : helper)))
    + "</span></div></div>			";
},"9":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"has_description\"><img src=\"images/card_description.png\" alt=\"description_icon\" /></div>			";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"comments_number\"><img src=\"images/card_comments.png\" alt=\"comments_icon\" /><span>"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></div>			";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"card_content\" style=\"position:relative;\">	<div class=\"labels_area\"><!--		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div><!--	--><div class=\"title_area\">		<h4>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</h4>		<div class=\"pencil_box\"><img src=\"images/list_pencil.png\" alt=\"pencil_icon\" /></div>	</div>	"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.icons : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["JST"]["cardEditPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		";
},"2":function(container,depth0,helpers,partials,data) {
    return "				--><div class=\"color_block\" style=\"background-color:"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ";\"></div><!--			";
},"4":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"is_subscribed\"><img src=\"images/card_subscribe.png\" alt=\"subscribed\" /></div>			";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"due_date\"><img src=\"images/card_clock.png\" alt=\"clock_icon\" /><div class=\"date_box\"><span>"
    + container.escapeExpression(((helper = (helper = helpers.due || (depth0 != null ? depth0.due : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"due","hash":{},"data":data}) : helper)))
    + "</span></div></div>			";
},"8":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"has_description\"><img src=\"images/card_description.png\" alt=\"description_icon\" /></div>			";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "				<div class=\"comments_number\"><img src=\"images/card_comments.png\" alt=\"comments_icon\" /><span>"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></div>			";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"card_edit_modal\">	<div class=\"labels_area\"><!--		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	--></div>	<textarea>"
    + container.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</textarea>		<div class=\"card_icons\">			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>	<input type=\"submit\" value=\"Save\" /></div>";
},"useData":true});

this["JST"]["cardModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"modal_card_subscribed\"><img src=\"images/card_subscribe.png\" /></div>			";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<h3>Labels</h4>		<div class=\"modal_labels\">			"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			<a href=\"#\" class=\"add_color\"><img src=\"\" alt=\"add_icon\" /></a>		</div>		";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<span class=\"label_sq_color\" style=\"background-color:"
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"></span>			";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<div class=\"modal_date\">				<h3>Due Date</h3>				<span>"
    + container.escapeExpression(((helper = (helper = helpers.due || (depth0 != null ? depth0.due : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"due","hash":{},"data":data}) : helper)))
    + "</span>			</div>		";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div class=\"content_description\">			<p>Description</p><a href=\"#\" class=\"edit_description\">Edit</a>			<p class=\"edit_description\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>		</div>		";
},"10":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"add_description\">				<!--<div class=\"description_icon\"><img src=\"images/card_description.png\" alt=\"desc_icon\" /></div>-->				<a href=\"#\" class=\"edit_description\">Edit the description...</a>			</div>		";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"comments_display_area\">			"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>			";
},"13":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "				<div class=\"comment_box\">					<p>"
    + alias2(alias1(depth0, depth0))
    + "</p>				</div>				<div class=\"edit_comment_box\">					<textarea>"
    + alias2(alias1(depth0, depth0))
    + "</textarea>					<input type=\"submit\" id=\"submit_edit_comment\" value=\"Save\" />					<a class=\"cancel_comment_add\" href=\"#\">X</a>							</div>				<div class=\"comment_sub_text\">					<a href=\"#\" class=\"edit_comment\">Edit</a> - <a href=\"#\" class=\"delete_comment\">Delete</a></p>				</div>				<hr>			";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card_main_modal\">	<div class=\"modal_heading\">		<textarea class=\"modal_card_title\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</textarea>		<div class=\"info\">			<p>in list </p><a href=\"#\">"
    + alias4(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</a>			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>	</div>	<div class=\"modal_sidebar\">		<div class=\"add_ctrls\">			<h3>Add</h3>			<a href=\"#\"><span>Labels</span></a>			<a href=\"#\"><span>Due Date</span></a>		</div>		<div class=\"actions_ctrls\">			<h3>Actions</h3>			<a href=\"#\"><span>Move</span></a>			<a href=\"#\"><span>Copy</span></a>			<a href=\"#\" id=\"sidebar_subscribe\"><span>Subscribe</span></a>			<a href=\"#\" id=\"sidebar_archive\"><span>Archive</span></a>		</div>	</div>	<div class=\"modal_main\">		<!--"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-->		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "		<div class=\"input_description\" style=\"\">				<textarea>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea>			<input type=\"submit\" value=\"Save\" />				<a class=\"cancel_card_add\" href=\"#\">X</a>		</div>		<div class=\"add_comment_area\">			<h3>Add Comment</h3>			<textarea placeholder=\"Write a comment...\"></textarea>			<input type=\"submit\" value=\"Save\" id=\"comment_save\"/>		</div>		<div class=\"activity_area\">			<h3>Activity</h3>			"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>	</div></div>";
},"useData":true});

this["JST"]["header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"header boards_button\">	<a href=\"#\">		<img src=\"images/header_boards.png\" alt=\"boards_icon\" />		<span id=\"board\">Boards</span>	</a></div><div class=\"header header_search\">	<input type=\"text\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" />	<!--<img src=\"images/header_search.png\" alt=\"header_search_icon\" />--></div><div class=\"header boards-ctrl\">	<a class=\"notif_button\" href=\"#\">		<img src=\"images/header_notif.png\" alt=\"notification_icon\" />	</a></div><div class=\"header header_logo\">	<img src=\"images/header_logo.png\" alt=\"trello_logo\" /></div>";
},"useData":true});

this["JST"]["infobar"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>infobar test!</p>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<textarea class=\"heading_text\" onclick=\"this.focus();this.select()\">"
    + container.escapeExpression(((helper = (helper = helpers.heading || (depth0 != null ? depth0.heading : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"heading","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"list_extras\">	<a href=\"#\">		<span>...</span>	</a></div><div class=\"cards_area\"></div>	<div class=\"card_add\">	<div class=\"card_add_activate\">		<a href=\"#\">			<span>Add a card...</span>		</a>	</div></div>";
},"useData":true});

this["JST"]["listActions"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"popup_wrapper\">	<div class=\"title\">		<h2>List Actions</h2>		<a class=\"close\" href=\"#\">x</a>	</div>	<hr>	<div class=\"content\">		<ul>			<li id=\"add\"><a href=\"#\">Add Card...</a></li>			<li id=\"copy\"><a href=\"#\">Copy List...</a></li>			<li id=\"move\"><a href=\"#\">Move List...</a></li>			<li id=\"subscribe\"><a href=\"#\">Subscribe</a></li>		</ul>			<hr>		<ul>			<li id=\"move_all\"><a href=\"#\">Move All Cards in This List...</a></li>			<li id=\"archive_all\"><a href=\"#\">Archive All Cards in This List...</a></li>		</ul>			<hr>		<ul>			<li id=\"archive_list\"><a href=\"#\">Archive This List</a></li>		</ul>	</div>	<div class=\"moving\">		<div class=\"moving_box\">			<span>Position</span>			<p>"
    + alias3(((helper = (helper = helpers.order || (depth0 != null ? depth0.order : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"order","hash":{},"data":data}) : helper)))
    + "</p>			<select>"
    + alias3((helpers.optionsCounter || (depth0 && depth0.optionsCounter) || alias2).call(alias1,(depth0 != null ? depth0.maxOrder : depth0),(depth0 != null ? depth0.order : depth0),{"name":"optionsCounter","hash":{},"data":data}))
    + "</select>		</div>		<input type=\"submit\" value=\"Move\" />	</div></div>				";
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