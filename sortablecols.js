$.fn.sortablecols = function(options) {

  var row = $(this);

  var actions = {
    allowdrop: function(e) {

      e.preventDefault();

    },
    drag: function(e) {

      e.originalEvent.dataTransfer.setData("text", $(e.target).attr('id'));

    },
    drop: function(e) {

      e.preventDefault();

      if ($(e.target).hasClass('drop-target')) {

        var data = e.originalEvent.dataTransfer.getData("text");

        if ($('#' + data).index() > $(e.target).index()) {
          $(e.target).before($('#' + data));
        } else {
          $(e.target).after($('#' + data));
        }

      } else if ($(e.target).parents('.drop-target')) {

        var data = e.originalEvent.dataTransfer.getData("text");

        if ($('#' + data).index() > $(e.target).parents('.drop-target').index()) {
          $(e.target).parents('.drop-target').before($('#' + data));
        } else {
          $(e.target).parents('.drop-target').after($('#' + data));
        }

      }

    }
  }

  var cols = row.children();

  for (var i = 0; i < cols.length; i++) {

    var col = $(cols[i]);

    var class_string = col.attr('class');
    
    if (class_string.match(/^col-+|.*\scol-+/)) {

      if (!col.attr('id')) {

        col.attr('id', 'sortablecols-target' + i);

      }

      col.addClass('drop-target')
          .attr('draggable', true)
          .on('drop', actions.drop)
          .on('dragover', actions.allowdrop)
          .on('dragstart', actions.drag);

    }

  }

  if (options != undefined && options.lockdrag) {

    var selectors = options.lockdrag.split(' ');

    for (var i in selectors) {
      row.find(selectors[i]).attr('draggable', false);
    }

  }
  
};
