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
      },

      createMenuTree: function (_dom, data){
        var _that = this; 
        var html='';
        let n=0;
        function makeMenu(data,level,curNode) {          
            n++;            
            for (k in data) {
                let leftPadding=level*0.6;
                curNode.append(`<li id="menuItem${n}" class="menuItem ${n}" menu-level="${level}" style="padding-left:${leftPadding}em" onmousedown="menuTree.toggleChildren(event)">+${data[k].name}</li>`);                
                if (data[k].child !='undefined') {
                  makeMenu(data[k].child, level+1,$(`.menuItem.${n}`));
                } else {
                  return false;
                }
            }
        }
        makeMenu(data,0,_dom);
      },

      toggleChildren: function(event){
        let x = event.target;

        console.log($(`#${x.id}`));
        $(`#${x.id}`).children().toggle();
      }

      
    }



    // //？点击某个菜单项的时候，调用这个方法，把这个菜单项下的children都给隐藏，但是没有成功
    // function toggleChild(id){
    //   
      
    // }







