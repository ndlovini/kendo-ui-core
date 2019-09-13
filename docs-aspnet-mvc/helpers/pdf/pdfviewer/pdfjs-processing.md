---
title: PDFjs Processing
page_title: PDFjs Processing | Kendo UI PDFViewer HtmlHelper for ASP.NET MVC
description: "Learn how to use PDF.JS processing in the Telerik UI PDFViewer HtmlHelper for ASP.NET MVC."
slug: pdfjsprocessing_pdfviewerhelper_aspnetmvc
position: 2
---

# PDFjs Processing

By default, if no processing configuration is defined, the PDFViewer uses the PDF.js library.

[PDF.js](https://mozilla.github.io/pdf.js/) is an open-source project that is developed by Mozilla.

## Requirements

Add the PDF.js library scripts to the page.

## Basic Configuration

The following example demonstrates how to configure the PDFViewer to use PDF.js processing.

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
    <script>
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    </script>

    @(Html.Kendo().PDFViewer()
        .Name("pdfviewer")
        .PdfjsProcessing(pdf => pdf
            .File(Url.Content("~/Content/web/pdfViewer/sample.pdf"))
        )
        .Height(1200)
    )
```

## Browser Support

PDF.js processing is not supported in Internet Explorer 9. To work properly in that browser version, PDF.js requires additional configuration.

    <script>
        // Specify the workerSrc property for Internet Explorer support.
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    </script>

## See Also

* [Basic Usage of the PDFViewer HtmlHelper for ASP.NET MVC (Demo)](https://demos.telerik.com/aspnet-mvc/pdfviewer/index)
* [Server-Side API](/api/pdfviewer)