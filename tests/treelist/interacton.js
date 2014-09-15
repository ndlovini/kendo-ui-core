(function() {
    module("TreeList interaction", {
        setup: function() {
           dom = $("<div />").appendTo(QUnit.fixture);
        },
        teardown: function() {
            kendo.destroy(QUnit.fixture);

            dom = instance = null;
        }
    });

    function createTreeList(options) {
        dom.kendoTreeList($.extend({
            dataSource: [
                { id: 1, parentId: null },
                { id: 2, parentId: 1 }
            ],
            columns: [ "id", "parentId" ]
        }, options));

        instance = dom.data("kendoTreeList");
    }

    test("click on expand arrow shows child rows", function() {
        createTreeList();

        instance.content.find(".k-i-expand").click();

        equal(instance.content.find("tr").length, 2);
    });

    test("click on collapse arrow hides child rows", function() {
        createTreeList({
            dataSource: [
                { id: 1, expanded: true, parentId: null },
                { id: 2, parentId: 1 }
            ]
        });

        instance.content.find(".k-i-collapse").click();

        equal(instance.content.find("tr").length, 1);
    });

    test("click on expand arrow loads items from remote", function() {
        var calls = 0;
        var ds = new kendo.data.TreeListDataSource({
            transport: {
                read: function(options) {
                    options.success([ { id: ++calls, hasChildren: true } ]);
                }
            }
        });

        ds.read();

        createTreeList({ dataSource: ds });

        instance.content.find(".k-i-expand").click();

        equal(instance.content.find("tr").length, 2);
    });

    test("shows loading icon during remote items", function() {
        var calls = 0;
        var readOperation;

        createTreeList({
            dataSource: {
                transport: {
                    read: function(options) {
                        // use promise to control when the transport reads
                        readOperation = $.Deferred();
                        readOperation.then(function() {
                            options.success([ { id: ++calls, hasChildren: true } ]);
                        });
                    }
                }
            }
        });

        // initial load
        instance.dataSource.read();
        readOperation.resolve();

        instance.content.find(".k-i-expand").click();
        equal(instance.content.find(".k-icon.k-loading").length, 1);

        readOperation.resolve();
        //equal(instance.content.find(".k-icon.k-loading").length, 0);
    });

})();
