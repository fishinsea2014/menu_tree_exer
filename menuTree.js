var data = [
    {
      name:'AAA',
      child:[
        {name:'a1',child:[{name:'a1-1'},{name:'a1-2'}]},
        {name:'a2'},
        {name:'a3',child:[{name:'a3-1'},{name:'a3-2',child:[{name:'a3-2-1'},{name:'a3-2-2'}]}]}
      ]
    },
    {
      name:'BBB',
      child:[
        {name:'b1'},
        {
          name:'b2',
          child:[
            {
              name:'b2-1'
            },
            {
              name:'b2-2',
              child:[{
                name:'b2-2-1'
              }]
            }
          ]
        },
        {name:'b3'}
      ]
    },
    {
      name:'CCC',
      child:[{name:'c1'},{name:'c2'},{name:'c3'}]
    }
    ];

    $(function(){
      var _div = $('#menuTree');
      menuTree.init(_div, data);


      // createMenuTree(data);
    })

    var menuTree = {
      init: function (_dom, data){
        this.createMenuTree(_dom,data);
        this.bind(_dom);
      },

      createMenuTree: function (_dom, data){
        var html='';
        let n=0;
        function makeMenu(data,level,curNode) {          
            n++;            
            for (k in data) {
                let leftPadding=level*0.6;
                curNode.append(`<li class="menuItem ${n}" menu-level="${level}" style="padding-left:${leftPadding}em" >+${data[k].name}</li>`);                
                if (data[k].child !='undefined') {
                  makeMenu(data[k].child, level+1,$(`.menuItem.${n}`));
                } else {
                  return false;
                }
            }
        }
        makeMenu(data,0,_dom);
      },

      bind: function(_dom){
        var _that = this;
        _dom.on("click", function(){
          console.log('click a menu item');
          if (event.target.localName == 'li' && event.target.children.length >0){
            var pnode = event.target.parentNode;
            _that.hideNode(pnode);
            event.target.children[0].style.display = 'block';
          }
          // debugger;
        })
      },

      hideNode: function (pnode) {
        console.log('hidenode');
        var nodes = pnode.children;
        // debugger;

        for (let i=0; i<nodes.length; i++) {
          if (nodes[i].children.length > 0) {
            nodes[i].children[0].style.display = 'none';
            // debugger;
            this.hideNode(nodes[i].children[0]);
          }
        }       
      }
    }



    // var _that = this;


    // function createMenuTree(data){
    //   var html='';
    //     let n=0;
    //     function makeMenu(data,level,curNode) {
          
    //         n++;            
    //         for (k in data) {
    //             if (data[k].name=='a2') console.log(data[k])
    //             let leftPadding=level*0.6;
    //             curNode.append(`<li class="menuItem ${n}" menu-level="${level}" style="padding-left:${leftPadding}em" onclick="_that.toggleChild(${n})">+${data[k].name}</li>`);                
    //             if (data[k].child !='undefined') {
    //               makeMenu(data[k].child, level+1,$(`.menuItem.${n}`));
    //             } else {
    //               return false;
    //             }
    //         }
    //     }

    //     makeMenu(data,0,$('#menuTree'));
    // }
    


    // //？点击某个菜单项的时候，调用这个方法，把这个菜单项下的children都给隐藏，但是没有成功
    // function toggleChild(id){
    //   console.log($(`li.menuItem.${id}`));
    //   $(`li.menuItem.${id}`).children().toggle();
      
    // }







