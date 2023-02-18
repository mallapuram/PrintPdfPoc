var currentPage = null;
var maxPageHeight = 870;

var wrapper = function() {
    var html = `
    <div class="pdf-page">
        <div id="page-content">
            <div class="container-fluid">
                ${process_section_1()}
            </div>
        </div>
    </div>
    `;
    return $(html);
}

var process_section_1 = function() {
    var html = `
        <div class="row mb-2">
            <img src="axalta_logo.png" width="30px" />
            <div class="col-12 info-text">
                This hit ticket was printed directly from AxCS. Please dispose of the duplicate one that will be printing from SAP with the same Deviation Code.
            </div>
        </div>
        <div class="heading-text">
            <div class="row mb-1">
                <div class="col-auto pe-2">
                    <div class="row">
                        <label class="form-label col-auto fw-bold pe-2">Adjustment Order :</label>
                        <div class="col fw-bold">
                            ${printTemplate.data.adjmntOrdr}
                        </div>
                    </div>
                </div>
                <div class="col text-end pe-2">
                    <div class="row">
                        <label class="form-label col fw-bold pe-2">Printed :</label>
                        <div class="col-auto text-nowrap fw-bold pe-2">
                            ${printTemplate.data.date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="heading-form-fields">
            <div class="row mb-1">
                <div class="col-7">
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2">Material:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.MaterialCode || ''} ${printTemplate.data.ProductCode || ''} ${printTemplate.data.SubCode || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Process order:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.ProcessOrder || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2">Color:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.Color || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Deviation Code:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.DeviationCounter || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Planned Batch Volume:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.PlannedBatchVolume || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Actual Batch Volume:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.ActualBatchVolume || ''}
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="row" style="color: blue; font-size: 17px">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Tank Code:</label>
                        <div class="col text-nowrap fw-bold pe-2">
                            ${printTemplate.data.TankCode || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2">Batch:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.Batch || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2">Plant:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.Plant || ''}
                        </div>
                    </div>
                    <div class="row flex-nowrap">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Created By:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.CreatedBy || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Version Created:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.Version || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2">Version:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.Version || ''}
                        </div>
                    </div>
                    <div class="row">
                        <label class="form-label col-5 fw-bold pe-2 text-nowrap">Notification Number:</label>
                        <div class="col fw-bold text-nowrap">
                            ${printTemplate.data.NotificationNumber || ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="border-top: 1px solid black"></div>
        <div class="defects-correction">
            <div class="row mb-3">
                <div class="col-12">
                    <label class="form-label col-auto fw-bold pe-2">Defects Being Corrected</label>
                </div>
            </div>
        </div>
        <div style="border-top: 1px solid black"></div>
    `;
        
    return html;
}

var process_section_2 = function(callback, options) {
    options = options || {};
    printTemplate.data.Comments = (printTemplate.data.Comments || []);
    
    var html = $(`
    <div class="instructions section2">
        <div class="row mb-3">
            <div class="col-12 section2-comments">
                <label class="form-label col-auto fw-bold pe-2${(options.hideHeaders ? ' d-none' : '')}">Special instructions:</label>
            </div>
        </div>
    </div>
    `);

    currentPage.find('#page-content').append(html);

    var addAtleastOneStop = function() {
        
        html = currentPage.find('#page-content .instructions');
        
        var oneStopHtml = $(`
        <div class="row mb-3" style="color: red;">
            <div class="col-12">
                <div class="row">
                    <div class="col-auto pe-1">
                        <img src="stop_sign.png" alt="" width="40" />
                    </div>
                    <div class="col-auto pe-1 fw-bold d-inline-flex-center">
                        Caution, the correction steps below include adjustments under 1 Unit
                        <div class="col fw-bold ps-3">
                            H/F/R:
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>`);

        if(printTemplate.data.isAtleastOneStopPrsnt) {
            html.append(oneStopHtml);
            if(!okToAdd()) {
                oneStopHtml.remove();
                addNewPage(true);
                process_section_2(addAtleastOneStop, options);
                return;
            }
        }
    }

    var addComments = function() {
        
        html = currentPage.find('#page-content .instructions');

        for (let index = 0, sliceCount = 0; index < printTemplate.data.Comments.length; index++) {
            const comment = printTemplate.data.Comments[index];
            const $comment = $(`<div class="mb-1">${comment}</div>`);
            html.find('.section2-comments').append($comment);
            if(!okToAdd()) {
                $comment.remove();
                printTemplate.data.Comments.splice(0, sliceCount);
                addNewPage(true);
                $.extend(options, { hideHeaders : false});
                process_section_2(addComments, options);
                return;
            }
            else sliceCount++
        }
        addAtleastOneStop();
    }

    callback = callback ?? addComments;
    callback();
}

var process_section_3 = function(callback, options) {
    options = options || {};
    printTemplate.data.Ingredients = (printTemplate.data.Ingredients || []);

    var getRow = function(item, index) {
        return $(`
            <tr class="border-bottom">
                <td scope="row">${index + 1}</td>
                <td align="right">
                    `+ 
                        (parseFloat(item.Quantity || '0') < 1 ? '<img src="stop_sign.png" width="20" alt="" style="float: right" />' : '') 
                    +`
                    <span>${item.SCode}</span>
                    <div class="barcode-container">
                        <canvas data-bcode="${ printTemplate.getBcode(item) }" id="bar-code-${index}" style="width: 125px">
                        </canvas>
                    </div>
                </td>
                <td align="left">${item.AdjustmentPercentage}%</td>
                <td align="left">
                    <div class="m-b-quantity">
                        ${item.Quantity}
                        <span style="float:right">${item.Unit}</span>
                    </div>
                    <strong>${item.IngredientDescription}</strong>
                </td>
                <td align="left"><div class="under-line"></div></td>
                <td align="left"><div class="under-line"></div></td>
                <td align="left"><div class="under-line"></div></td>
                <td align="left"><div class="under-line"></div></td>
            </tr>
        `);
    }
    var html = $(`
    <div class="col-grid section3">
        <table class="table section3-ingredients${(options.hideHeaders ? ' table-no-header' : '')}" style="width: 100%;">
            <thead class="border-bottom border-top pt-2 pb-2">
                <tr>
                    <th scope="col" align="left">Item</th>
                    <th scope="col" align="left" class="text-nowrap">S code</th>
                    <th scope="col" align="left" class="text-nowrap">% Batch Wt.</th>
                    <th scope="col" align="left">Quantity</th>
                    <th scope="col" align="left">Batch Added</th>
                    <th scope="col" align="left">Amount Added</th>
                    <th scope="col" align="left">Initials</th>
                    <th scope="col" align="left">Date/Time</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
    `);

    currentPage.find('#page-content').append(html);

    if(!okToAdd()) {
        $html.remove();
        addNewPage(true);
        process_section_3(callback, options);
        return;
    }

    var addIngredientRows = function() {
        html = currentPage.find('#page-content .section3');
        
        var tbody = html.find('.section3-ingredients tbody');

        for (let index = 0, sliceCount = 0; index < printTemplate.data.Ingredients.length; index++) {
            const rowItem = printTemplate.data.Ingredients[index];
            var slNo = index + (options.ingredientIndex || 0);
            const $rowItem = getRow(rowItem, slNo);
            tbody.append($rowItem);

            generateBarcode($rowItem.find('canvas'));

            if(!okToAdd()) {
                $rowItem.remove();
                printTemplate.data.Ingredients.splice(0, sliceCount);
                addNewPage(true);
                $.extend(options, { hideHeaders : true, ingredientIndex: slNo});
                process_section_3(addIngredientRows, options);
                return;
            }
            else sliceCount++
        }
    }

    callback = callback ?? addIngredientRows;
    callback();
}

var addNewPage = function(isPageBreak) {
    if(isPageBreak) {
        currentPage.append($('<div class="page-continue">Continued on next page</div>'))
        $(document.body).append($('<div class="page-break"></div>'));
    }
    currentPage = wrapper().appendTo('body');
}

var okToAdd = function() {
    return maxPageHeight >= currentPage.find('#page-content').innerHeight();
}

var startProcess = function() {
    addNewPage();
    process_section_2();
    process_section_3();
}

var pdfSize = 203;
var barCodeCount = (printTemplate.data.Ingredients || []).length;
var pdfOptions = {
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts:true
};

window.jsPDF = window.jspdf.jsPDF;

function generatePdf(doc, index, callback) {
    if($('.pdf-page').length > index) {

        const html = $('.pdf-page:eq(' + index +')')[0];

        var w = 1200;
        var h = 2042;
        var canvas = document.createElement('canvas');
        canvas.width = w*2;
        canvas.height = h*2;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        var context = canvas.getContext('2d');
        context.scale(3,3);

        html2canvas(html, { canvas: canvas }).then(function(canvas) {
            const imgWidth = 210.5;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            doc.addImage(canvas, 'PNG', 0, 0, imgWidth, imgHeight, '', 'FAST');
            
            index = index + 1;
            
            if($('.pdf-page').length > index)
                doc.addPage();

            generatePdf(doc, index, callback);
            return;
        });
    }
    else {
        if(callback) callback(doc);
    }
}

var generateBarcodes = function() {
    for(var i = 0; i < barCodeCount; i++) {
        var $canvas = $('#bar-code-' + i);
        var bcode = $canvas.data('bcode');
        $canvas.JsBarcode(bcode, {
            format: 'code128',
            height: 40,
            width:1,
            fontSize: 17,
            displayValue: true
        });
    }
}

var generateBarcode = function($canvas) {
    var bcode = $canvas.data('bcode');
    $canvas.JsBarcode(bcode, {
        format: 'code128',
        height: 40,
        width:1,
        fontSize: 17,
        displayValue: true
    });
}

var loader = (function() {
    return {
        show : function() {
            $('.loader').show();
        },
        hide: function() {
            $('.loader').fadeOut(1000);
        }
    }
})();

var renderPDF = function() {
    //generateBarcodes();
    loader.show();
    setTimeout(function() { 
        const doc = new jsPDF('p', 'mm');
        var finishCallBack = function(doc) {
            loader.hide();
            doc.save('Downld.pdf');
        }
        generatePdf(doc, 0, finishCallBack);
    }, 500);
}

$(document).ready(function() {
    printTemplate.data.Ingredients = printTemplate.data.Ingredients.sort(function(a, b) { 
        if(b.IngredientDescription < a.IngredientDescription) return -1;
        if(b.IngredientDescription > a.IngredientDescription) return 1;
        return 0;
    });
    var $body = $(document.body);
    //$body.append(wrapper());
    startProcess();
    renderPDF();
});