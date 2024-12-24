document.addEventListener("DOMContentLoaded", function () {
    // // // // // // // // // // // // 
    const barChartOptions = {
        colors: ["#1A56DB", "#FDBA8C"],
        series: [
            {
                name: "Home Page Visits",
                color: "#1A56DB",
                data: [
                    { x: "Mon", y: 450 },
                    { x: "Tue", y: 300 },
                    { x: "Wed", y: 200 },
                    { x: "Thu", y: 650 },
                    { x: "Fri", y: 400 },
                    { x: "Sat", y: 500 },
                    { x: "Sun", y: 300 },
                ],
            },
            {
                name: "Product Page Visits",
                color: "#FDBA8C",
                data: [
                    { x: "Mon", y: 150 },
                    { x: "Tue", y: 200 },
                    { x: "Wed", y: 250 },
                    { x: "Thu", y: 300 },
                    { x: "Fri", y: 350 },
                    { x: "Sat", y: 400 },
                    { x: "Sun", y: 200 },
                ],
            },
        ],
        chart: {
            type: "bar",
            height: "320px",
            fontFamily: "Inter, sans-serif",
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadius: 8,
            },
        },
        tooltip: { shared: true, intersect: false },
        xaxis: {
            labels: { style: { fontFamily: "Inter, sans-serif" } },
        },
        yaxis: { show: false },
    };

    if (document.getElementById("column-chart")) {
        const chart = new ApexCharts(document.getElementById("column-chart"), barChartOptions);
        chart.render();
    }

    // // // // // // // // // // // // //
       const areaChartOptions1 = {
        series: [
            {
                name: "Online Sales",
                data: [4500, 4800, 5000, 5200, 5400, 5600],
                color: "#34A853",
            },
            {
                name: "In-Store Sales",
                data: [3000, 3200, 3400, 3600, 3800, 4000],
                color: "#FBBC05",
            },
        ],
        chart: {
            height: 320,
            type: "area",
            fontFamily: "Inter, sans-serif",
            toolbar: { show: false },
        },
        fill: {
            type: "gradient",
            gradient: { opacityFrom: 0.55, opacityTo: 0 },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            labels: {
                style: {
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                    cssClass: "text-gray-500",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return `Dh${value}`;
                },
                style: {
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                    cssClass: "text-gray-500",
                },
            },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "center",
        },
    };

    if (document.getElementById("data-series-chart")) {
        const chart = new ApexCharts(document.getElementById("data-series-chart"), areaChartOptions1);
        chart.render();
    }


    // // // // // // // // // //
    const areaChartOptions2 = {
        series: [
            {
                name: "Developer Edition",
                data: [1200, 1300, 1250, 1350, 1400, 1450],
                color: "#1A56DB",
            },
            {
                name: "Designer Edition",
                data: [700, 800, 750, 850, 900, 950],
                color: "#7E3BF2",
            },
        ],
        chart: {
            height: 320,
            type: "area",
            fontFamily: "Inter, sans-serif",
            toolbar: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
            },
        },
        xaxis: {
            categories: ['08 Feb', '09 Feb', '10 Feb', '11 Feb', '12 Feb', '13 Feb', '14 Feb'],
            labels: {
                style: {
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-gray-500',
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return 'Dh' + value;
                },
                style: {
                    fontSize: "12px",
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-gray-500',
                },
            },
        },
    };

    if (document.getElementById("data-series-chart2")) {
        const chart = new ApexCharts(document.getElementById("data-series-chart2"), areaChartOptions2);
        chart.render();
    }
});



