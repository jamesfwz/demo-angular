window.resizable = function() {
  setTimeout(function() {
    $("table.resizable:not(.loaded)").addClass('loaded').resizableColumns({
      store: window.store
    });
  }, 1);
};