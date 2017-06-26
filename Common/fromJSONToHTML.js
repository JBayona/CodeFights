/*
Write a script that takes in the tree variable and generates
the correct HTML
<div class="header">
 <ul class="navigation">
 <li>Home</li>
 <li>Contact Us</li>
 </ul>
 </div>
<p>Hello World</p>
*/

var tree = {
  "nodes": [{
    "type": "tag",
    "name": "div",
    "attrs": [{
      "name": "class",
      "value": "header"
    },{
      "name": "id",
      "value": "myDiv"
    }],
    "children": [{
      "type": "tag",
      "name": "ul",
      "attrs": [{
        "name": "class",
        "value": "navigation"
      }],
      "children": [{
        "type": "tag",
        "name": "li",
        "children": [{
          "type": "text",
          "value": "Home"
        }]
      }, {
        "type": "tag",
        "name": "li",
        "children": [{
          "type": "text",
          "value": "Contact Us"
        }]
      }]
    }]
  }, {
    "type": "tag",
    "name": "p",
    "children": [{
      "type": "text",
      "value": "Hello World"
    }]
  }]
};
//Si es de tag concatenamos todo el formato, en este caso <elemento propiedades>hijos</elemento> esta es la salida principal
//Si tiene nodos hijos volvemos a llamar al parse e nodos con arreglos ya que es un nodo, no es algo nuevo, sigue un patrón 
const getHTML = node => '<' + node.name + ' ' + parseAttrs(node.attrs) + '>' + parseNodes(node.children)  +'</' + node.name +'>';
//Si es texto simplemente concatenamos el texto como salida
const getText = node => node.value;
//Con esta función retornamos las propiedades con el formato correcto y retornamos el valor
const getAttr = attr => `${attr.name}='${attr.value}'`;
//Para las propiedades nuevamente es un arreglo de objetos, entonces lo iteramos como arreglo con map y le damos formato
const parseAttrs = attrs => (attrs && attrs instanceof Array) ? attrs.map(getAttr).join(' ') : ''; //.join(' ')
//Analizando cada nodo verificamos si es de tipo texto o tag
const checkNode = node => node.type === 'tag' ? getHTML(node) : getText(node);
//Vamos a analizar los hijos principales iterandolos porque es un arreglo de objetos
const parseNodes = nodes => nodes.map(checkNode); //.join(' ')
//Validar que hayan nodos y hacemos el parse para separarlos y analizarlos en un array
const convertToHTML = nodes => nodes.length > 0 || nodes !== null ? parseNodes(nodes) : 'Invalid Conversion';

console.log(convertToHTML(tree.nodes));