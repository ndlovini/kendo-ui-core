﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Areas/aspx/Views/Shared/Web.Master" Inherits="System.Web.Mvc.ViewPage<dynamic>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
<%=Html.Kendo().Scheduler<Kendo.Mvc.Examples.Models.Scheduler.TaskViewModel>()
    .Name("scheduler")
    .Date(new DateTime(2013, 6, 13))
    .StartTime(new DateTime(2013, 6, 13, 7, 00, 00))
    .Height(600)
    .Pdf(pdf => pdf
        .FileName("Kendo UI Scheduler Export.pdf")
        .ProxyURL(Url.Action("Pdf_Export_Save", "Grid"))
    )
    .Toolbar(t => t.Pdf())
    .Views(views =>
    {
        views.DayView();
        views.WeekView(weekView => weekView.Selected(true));
        views.MonthView();
        views.AgendaView();
        views.TimelineView();
    })
    .Timezone("Etc/UTC")
    .Resources(resource =>
    {
        resource.Add(m => m.OwnerID)
            .Title("Owner")
            .DataTextField("Text")
            .DataValueField("Value")
            .DataColorField("Color")
            .BindTo(new[] { 
                new { Text = "Alex", Value = 1, Color = "#f8a398" } ,
                new { Text = "Bob", Value = 2, Color = "#51a0ed" } ,
                new { Text = "Charlie", Value = 3, Color = "#56ca85" } 
            });
    })
    .DataSource(d => d
        .Model(m => {
            m.Id(f => f.TaskID);
            m.Field(f => f.Title).DefaultValue("No title");
            m.Field(f => f.OwnerID).DefaultValue(1);
            m.RecurrenceId(f => f.RecurrenceID);
        })
        .Read("Read", "Scheduler")
        .Create("Create", "Scheduler")
        .Destroy("Destroy", "Scheduler")
        .Update("Update", "Scheduler")
    )
%>
</asp:Content>