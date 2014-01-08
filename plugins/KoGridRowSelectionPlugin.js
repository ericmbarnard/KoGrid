 // use this plugin if you need to change the selection programmatically
 var KoGridRowSelectionPlugin = (function () {
        function KoGridRowSelectionPlugin(selectedItems) {
            this.selectedItems = selectedItems;
        }
        KoGridRowSelectionPlugin.prototype.onGridInit = function (grid) {
            var _this = this;
            this._grid = grid;

            this.selectedItems.subscribe(function (newValues) {
                if (_this._grid.$$selectionPhase == true)
                    return;

                for (var j = 0; j < newValues.length; j++) {
                    var newValue = newValues[j];

                    for (var i = 0; i < _this._grid.rowFactory.rowCache.length; i++) {
                        var rowCache = _this._grid.rowFactory.rowCache[i];
                        if (rowCache.entity == newValue) {
                            _this._grid.selectionService.setSelection(rowCache, true);
                            _this._grid.selectionService.lastClickedRow = rowCache;
                            break;
                        }
                    }
                }
            });
        };
        return KoGridRowSelectionPlugin;
    })();
    koGridRowSelectionPlugin = KoGridRowSelectionPlugin;