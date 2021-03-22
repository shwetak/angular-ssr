import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../account.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit, OnDestroy {
  sub: any;
  serviceData: any;
  serviceImage: string='';
  serviceStates: any=[];

  constructor(private service:AccountService,private http:HttpClient, private router:Router, private route:ActivatedRoute, private meta: Meta, private titleService:Title) { }

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {
      // get id from params
      let permalink = params.permalink;
      //debugger;
      this.getService(permalink);
    });
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
  
  getService(permalink) {
    this.service.getService(permalink).subscribe(data=>{
      debugger;
      if(data.code=='200'){
        this.serviceData=data.result;
        this.getServiceStates(this.serviceData.id);
        this.serviceData.faqs=JSON.parse(this.serviceData.faqs);
        this.serviceImage=environment.imageBaseUrl + 'uploads/service/' + this.serviceData.permalink + '/' + this.serviceData.image;
        this.titleService.setTitle(this.serviceData.pageTitle);
        this.meta.addTags(this.serviceData.meta_tags);
        this.meta.addTag({ name: 'twitter:image', content:this.serviceImage});
        this.meta.addTag({ property:'og:image', content:this.serviceImage});
        this.meta.addTag({ property:'og:image:secure_url', content:this.serviceImage});
        this.meta.addTag({ property:'og:url', content:environment.baseUrl+this.serviceData.permalink});
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
      this.router.navigate(['error']);
    })
  }

  getServiceStates(id) {
    this.service.getServiceStates(id).subscribe(data=>{
      debugger;
      if(data.code=='200'){
        this.serviceStates=data.result;
      }else{
        this.serviceStates=[];
      }
    },error=>{
      this.serviceStates=[];
    })
  }


}
