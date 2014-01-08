// extension of the LayoutPlugin. Needed if the grid is displayed on a tab within bootstrap. 
koGridBootstrapTabPlugin = function () {
    var self = this;
    this.grid = null;
	$("a[data-toggle='tab']").on("shown.bs.tab", function () {
        self.updateGridLayout();
    });
			
    // The init method gets called during the koGrid binding handler execution.
    self.onGridInit = function (grid) {
        /* logic */
        self.grid = grid;
    };
    this.updateGridLayout = function(){
        window.kg.domUtilityService.UpdateGridLayout(self.grid);
        self.grid.configureColumnWidths();
        window.kg.domUtilityService.BuildStyles(self.grid);
    };
}
