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

const getHTML = node =>'<' + node.name + ' ' + parseAttrs(node.attrs) + '>' + parseNodes(node.children)  +'</' + node.name +'>';

const getText = node => node.value;

const getAttr = attr => `${attr.name}='${attr.value}'`;

const parseAttrs = attrs => (attrs && attrs instanceof Array) ? attrs.map(getAttr).join(' ') : ''; //.join(' ')

const checkNode = node => node.type === 'tag' ? getHTML(node) : getText(node);

const parseNodes = nodes => nodes.map(checkNode); //.join(' ')

const convertToHTML = nodes => nodes.length > 0 || nodes !== null ? parseNodes(nodes) : 'Invalid Conversion';

console.log(convertToHTML(tree.nodes));