// Women literacy data page controller
(function () {
    var app = angular.module('HMSApp');

    app.controller('WomenLiteracyData', ['$scope', function ($scope) {

        //Shows the litercy brief paragraph
        $("#paragraphDiv").css("display", "block");

        // Literacy
        d3.tsv("data/Literacy.tsv", function (data) {
            var myChart = new dimple.chart(d3.select("#svg1"), data);
            myChart.setBounds(60, 30, 410, 305)
            var x = myChart.addCategoryAxis("x", "Duration");            
            myChart.addMeasureAxis("y", "Literacy(%)");
            var s = myChart.addSeries(null, dimple.plot.bar);
            myChart.draw();
        });

       // Enrollment to school
        d3.tsv("data/EnrollmentRatio.tsv", function (data) {
            var svgenrollmentRateChart = new dimple.chart(d3.select("#svg2"), data);
            svgenrollmentRateChart.setBounds(60, 30, 410, 330)
            svgenrollmentRateChart.addCategoryAxis("x", ["Duration", "Type"]);
            svgenrollmentRateChart.addMeasureAxis("y", "Ratio");
            svgenrollmentRateChart.addSeries("Type", dimple.plot.bar);
            svgenrollmentRateChart.addLegend(65, 10, 410, 20, "right");
            svgenrollmentRateChart.draw();
        });

      //  Women Occupation
        d3.tsv("data/Occupation.tsv", function (data) {
            var OccupationChart = new dimple.chart(d3.select("#svg3"), data);
            OccupationChart.setBounds(0, 50, 510, 305)
            OccupationChart.addMeasureAxis("p", "ContributionRate");
            OccupationChart.addSeries("Occupation", dimple.plot.pie);
            OccupationChart.addLegend(10, 0, 550, 50, "right");
            OccupationChart.draw();
        });

       // Women Health
        d3.tsv("data/Health.tsv", function (data) {
            var healthChart = new dimple.chart(d3.select("#svg4"), data);
            healthChart.setBounds(20, 50, 510, 315)
            healthChart.addMeasureAxis("p", "Rate");
            var ring = healthChart.addSeries("Issue", dimple.plot.pie);
            ring.innerRadius = "50%";
            healthChart.addLegend(400, 0, 90, 300, "left");
            healthChart.draw();
        });

        
       
    } ]);

})();

