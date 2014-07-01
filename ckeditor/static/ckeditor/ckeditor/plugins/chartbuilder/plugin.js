CKEDITOR.plugins.add( 'chartbuilder', {
    icons: 'chartbuilder',
    requires: 'dialog,diveimage,figurebox',
    init: function( editor ) {
        CKEDITOR.dialog.add( 'chartbuilder', this.path + 'dialogs/chartbuilder.js' );

        editor.addCommand( 'launchChartbuilder', new CKEDITOR.dialogCommand( 'chartbuilder' ));

        editor.ui.addButton('Chartbuilder', {
            label: 'Launch Chartbuilder',
            command: 'launchChartbuilder',
            toolbar: 'insert'
        });
    }
});
function insert_diveimage_figurebox(editor, json) {
    var extra_attrs = 'data-imagemodel="' + json.id + '" ';
    var attribution = parseJsonAttribution(json);
    // figurebox_template(img_src, attribution, caption, img_attrs)
    var figurebox_html = figurebox_template(json.full_url, attribution, '', extra_attrs);
    editor.insertHtml(figurebox_html);
}
