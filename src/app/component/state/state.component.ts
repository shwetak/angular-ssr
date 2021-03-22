import { Component, OnInit, OnDestroy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';
import * as CanvasJS from './canvasjs.min';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit,OnDestroy {
  sub:any=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  serviceData: any=[];
  serviceImage: string;
  
  constructor(private service:AccountService,private http:HttpClient, private router:Router, private route:ActivatedRoute, private meta: Meta, private titleService:Title) { }

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {
      // get id from params
      let service = params.service;
      let permalink = params.permalink;
      this.getService(service,permalink);
    });
    /* 
      let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Google - Consolidated Quarterly Revenue",
        fontFamily: "arial black",
        fontColor: "#695A42"
      },
      axisX: {
        interval: 1,
        intervalType: "year"
      },
      axisY:{
        valueFormatString:"$#0bn",
        gridColor: "#B6B1A8",
        tickColor: "#B6B1A8"
      },
      toolTip: {
        shared: true,
        content: 'toolTipContent'
      },
      data: [
        {
          type: "stackedColumn",
          showInLegend: true,
          color: "#696661",
          name: "Q1",
          dataPoints: [
            { y: 6.75, x: new Date(2010,0) },
            { y: 8.57, x: new Date(2011,0) },
            { y: 10.64, x: new Date(2012,0) },
            { y: 13.97, x: new Date(2013,0) },
            { y: 15.42, x: new Date(2014,0) },
            { y: 17.26, x: new Date(2015,0) },
            { y: 20.26, x: new Date(2016,0) }
          ]
        },        
        {        
          type: "stackedColumn",
          showInLegend: true,
          name: "Q4",
          color: "#B6B1A8",
          dataPoints: [
            { y: 8.44, x: new Date(2010,0) },
            { y: 10.58, x: new Date(2011,0) },
            { y: 14.41, x: new Date(2012,0) },
            { y: 16.86, x: new Date(2013,0) },
            { y: 10.64, x: new Date(2014,0) },
            { y: 21.32, x: new Date(2015,0) },
            { y: 26.06, x: new Date(2016,0) }
          ]
        }
      ]
    });
    chart.render();

    let dataPoints = [];
    let dpsLength = 0;
    let chart1 = new CanvasJS.Chart("chartContainer1",{
      exportEnabled: true,
      title:{
        text:"Live Chart with Data-Points from External JSON"
      },
      data: [{
        type: "spline",
        dataPoints : dataPoints,
      }]
    });
    
    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function(data) {  
      $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
      });
      dpsLength = dataPoints.length;
      chart1.render();
      updateChart();
    });
    function updateChart() {	
      $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json&callback=?", function(data) {
        $.each(data, function(key, value) {
          dataPoints.push({
          x: parseInt(value[0]),
          y: parseInt(value[1])
          });
          dpsLength++;
        });
        
        if (dataPoints.length >  20 ) {
              dataPoints.shift();				
            }
        chart1.render();
        setTimeout(function(){updateChart()}, 1000);
      });
    }
    */
  }

  ngOnDestroy() {
    let description: HTMLMetaElement = this.meta.getTag('name="description"');
    this.meta.removeTagElement(description);
    let locale: HTMLMetaElement = this.meta.getTag("property='og:locale'");
    this.meta.removeTagElement(locale);
    let type: HTMLMetaElement = this.meta.getTag("property='og:type'");
    this.meta.removeTagElement(type);
    let ogTitle: HTMLMetaElement = this.meta.getTag("property='og:title'");
    this.meta.removeTagElement(ogTitle);
    let ogDescription: HTMLMetaElement = this.meta.getTag("property='og:description'");
    this.meta.removeTagElement(ogDescription);
    let ogUrl: HTMLMetaElement = this.meta.getTag("property='og:url'");
    this.meta.removeTagElement(ogUrl);
    let ogSite: HTMLMetaElement = this.meta.getTag("property='og:site_name'");
    this.meta.removeTagElement(ogSite);
    let ogImage: HTMLMetaElement = this.meta.getTag("property='og:image'");
    this.meta.removeTagElement(ogImage);
    let ogImageSecureUrl: HTMLMetaElement = this.meta.getTag("property='og:image:secure_url'");
    this.meta.removeTagElement(ogImageSecureUrl);
    let ogImageWidth: HTMLMetaElement = this.meta.getTag("property='og:image:width'");
    this.meta.removeTagElement(ogImageWidth);
    let ogImageHeight: HTMLMetaElement = this.meta.getTag("property='og:image:height'");
    this.meta.removeTagElement(ogImageHeight);
    let twitterCard: HTMLMetaElement = this.meta.getTag("name='twitter:card'");
    this.meta.removeTagElement(twitterCard);
    let twitterDescription: HTMLMetaElement = this.meta.getTag("name='twitter:description'");
    this.meta.removeTagElement(twitterDescription);
    let twitterTitle: HTMLMetaElement = this.meta.getTag("name='twitter:title'");
    this.meta.removeTagElement(twitterTitle);
    let twitterImage: HTMLMetaElement = this.meta.getTag("name='twitter:image'");
    this.meta.removeTagElement(twitterImage);
    this.sub.unsubscribe();
  }

  getService(service,permalink) {
    this.service.getTargetState(service,permalink).subscribe(data=>{
      debugger;
      if(data.code=='200'){
        this.serviceData=data.data;
        this.serviceData.faqs=JSON.parse(this.serviceData.faqs);
        this.serviceData.meta_tags=JSON.parse(this.serviceData.metaTags);
        //this.titleService.setTitle(this.serviceData.pageTitle);
        this.serviceData.meta_tags.forEach(element => {
          if(element.name=='title'){
            this.titleService.setTitle(element.content);
          }
        });
        this.meta.addTags(this.serviceData.meta_tags);
        this.meta.addTag({ property:'og:url', content:environment.baseUrl + '/' + service + '/' + this.serviceData.permalink});
        this.meta.addTag({ property:'og:locale', content:'en_US'});
        this.meta.addTag({ property:'og:type', content:'article'});
        this.meta.addTag({ property:'og:site_name', content:'Service Near Me<'});
        this.meta.addTag({ property:'og:image:width', content:'806'});
        this.meta.addTag({ property:'og:image:height', content:'410'});
        this.meta.addTag({ name: 'twitter:card', content:'summary_large_image'});
      }else{
        this.router.navigate(['error']);
      }
    },error=>{
      debugger;
      this.router.navigate(['error']);
    })
  }
}
