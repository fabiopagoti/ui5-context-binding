sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.context-binding.controller.View1", {
		onInit: function () {
			
			window._text = this.byId("text");
			window._combobox = this.byId("combobox");
			
			window._text2 = this.byId("text2");
			window._combobox2 = this.byId("combobox2");
			
			var oDados = {
				titulo: "Produtos",
				produtos: [{
					id: 1,
					nome: "Arroz"
				}, {
					id: 2,
					nome: "Feijão"
				}],
				categoriasTitulo: "Categorias",
				categorias: [
					{ codigo: "10", descricao: "Comida" },
					{ codigo: "20", descricao: "Bebida" }
				]
			};

			this._modelo = new sap.ui.model.json.JSONModel(oDados);
			this.getView().setModel(this._modelo);
			
			// this.byId("text2").bindText({
			// 	path: "/categorias/0/codigo"
			// });
			
			this.byId("text2").bindProperty("text", {
				path: "/categoriasTitulo"
			});
			
			this.byId("combobox2").bindItems({
				path: "/categorias",
				template: new sap.ui.core.Item({
					key: {
						path: "codigo"
					},
					text: {
						path: "descricao"
					}
				})
			});
			
			// this.byId("combobox2").bindAggregation("items", {
			// 	path: "/categorias",
			// 	template: new sap.ui.core.Item({
			// 		key: {
			// 			path: "codigo"
			// 		},
			// 		text: {
			// 			path: "descricao"
			// 		}
			// 	})
			// });
			
			
			this.byId("combobox2").bindProperty("selectedKey", {
				path: "/codigoSelecionado"
			});
			
			this.byId("text3").bindProperty("text", {
				path: "/codigoSelecionado"
			});
			
			
			
		}
	});
});


// _combobox.getBindingContext()


// _combobox.getItems()
// _combobox.getItems()[0]
// _combobox.getItems()[0].getMetadata()

// _combobox.getItems()[0].getBindingContext()


// var contexto = _combobox.getItems()[0].getBindingContext()

// // Get Model
// contexto.getModel().getMetadata()


// contexto.getPath()

// contexto.getObject()
// contexto.getProperty("id")
// contexto.getProperty("nome")







