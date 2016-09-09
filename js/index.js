var source = $("#some-template").html();
var template = Handlebars.compile(source);

var data = {
    items: [ {
        item: {
          icon:"fa fa-lis"
            title: "Objetivos",
            text: "Metas y propositos para la vida a corto plazo"
        },
        item: {
          icon:"fa fa-lis"
            title: "Objetivos",
            text: "Metas y propositos para la vida a corto plazo"
        },
        item: {
          icon:"fa fa-lis"
            title: "Objetivos",
            text: "Metas y propositos para la vida a corto plazo"
        },
         ]
};

Handlebars.registerHelper('fullName', function(person) {
  return person.firstName + " " + person.lastName;
});
